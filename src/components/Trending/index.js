import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import TrendingVideoCard from '../TrendingVideoCard'
import SideMenuBar from '../SideMenuBar'

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
  state = {trendingVideos: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVideos()
  }

  onRetryClick = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
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
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        trendingVideos: updatedVideosData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {trendingVideos} = this.state
    return (
      <BottomListContainer>
        {trendingVideos.map(eachItem => (
          <TrendingVideoCard details={eachItem} key={eachItem.id} />
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
                <HiFire size="57%" color="#ff0000" />
              </FireIconContainer>
              <PageTitle>Trending</PageTitle>
            </TopContainer>
            {this.renderSwitch()}
          </ContentContainer>
        </ResponsiveContainer>
      </TrendingMainContainer>
    )
  }
}

export default Trending
