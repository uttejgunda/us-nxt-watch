import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import SideMenuBar from '../SideMenuBar'
import GamingVideoCard from '../GamingVideoCard'

import Header from '../Header'
import {
  TrendingMainContainer,
  ResponsiveContainer,
  ContentContainer,
  TopContainer,
  FireIconContainer,
  PageTitle,
  BottomListContainer,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureTitle,
  FailureDesc,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {gamingVideos: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVideos()
  }

  onRetryClick = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response) {
      const data = await response.json()
      const {videos} = data
      const updatedVideosData = videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gamingVideos: updatedVideosData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {gamingVideos} = this.state
    return (
      <BottomListContainer>
        {gamingVideos.map(eachItem => (
          <GamingVideoCard details={eachItem} key={eachItem.id} />
        ))}
      </BottomListContainer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <div className="loader-container">
        <Loader type="ThreeDots" color="#3b82f6" height="60" width="60" />
      </div>
    </LoaderContainer>
  )

  renderFailureView = () => (
    <FailureContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureTitle>Oops! Something Went Wrong</FailureTitle>
      <FailureDesc>
        We are having some trouble to complete your request. Please try again.
      </FailureDesc>
      <RetryButton type="button" onClick={this.onRetryClick}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderSwitch = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <TrendingMainContainer>
        <Header />
        <ResponsiveContainer>
          <SideMenuBar />
          <ContentContainer>
            <TopContainer>
              <FireIconContainer>
                <SiYoutubegaming size="57%" color="#ff0000" />
              </FireIconContainer>
              <PageTitle>Gaming</PageTitle>
            </TopContainer>
            {this.renderSwitch()}
          </ContentContainer>
        </ResponsiveContainer>
      </TrendingMainContainer>
    )
  }
}

export default Trending
