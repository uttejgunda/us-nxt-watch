import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import SideMenuBar from '../SideMenuBar'
import GamingVideoCard from '../GamingVideoCard'
import VideosContext from '../../context/VideosContext'

import Header from '../Header'
import {
  GamingMainContainer,
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
    <VideosContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <FailureContainer>
            <FailureImg
              src={
                isDarkMode
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureTitle isDarkMode={isDarkMode}>
              Oops! Something Went Wrong
            </FailureTitle>
            <FailureDesc isDarkMode={isDarkMode}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDesc>
            <RetryButton type="button" onClick={this.onRetryClick}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </VideosContext.Consumer>
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
      <VideosContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <GamingMainContainer data-testid="gaming" isDarkMode={isDarkMode}>
              <Header />
              <ResponsiveContainer>
                <SideMenuBar />
                <ContentContainer>
                  <TopContainer isDarkMode={isDarkMode}>
                    <FireIconContainer isDarkMode={isDarkMode}>
                      <SiYoutubegaming size="57%" color="#ff0000" />
                    </FireIconContainer>
                    <PageTitle isDarkMode={isDarkMode}>Gaming</PageTitle>
                  </TopContainer>
                  {this.renderSwitch()}
                </ContentContainer>
              </ResponsiveContainer>
            </GamingMainContainer>
          )
        }}
      </VideosContext.Consumer>
    )
  }
}

export default Trending
