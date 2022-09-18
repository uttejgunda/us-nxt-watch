import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GoSearch} from 'react-icons/go'
import Header from '../Header'
import PremiumCard from '../PremiumCard'
import SideMenuBar from '../SideMenuBar'
import VideoCard from '../VideoCard'

import {
  HomeMainContainer,
  ResponsiveContainer,
  ContentContainer,
  BottomContainer,
  InputContainer,
  InputField,
  SearchButton,
  VideosListContainer,
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

class Home extends Component {
  state = {
    videosData: [],
    showPremiumCard: true,
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  onClosePremiumCard = () => {
    this.setState({showPremiumCard: false})
  }

  onRetryClick = () => {
    this.getVideos()
  }

  onUserSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchClick = () => {
    this.getVideos()
  }

  onEnterClick = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem => ({
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
        isLiked: false,
      }))

      this.setState({
        videosData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {videosData} = this.state

    const isNoResults = videosData.length === 0

    if (isNoResults) {
      return this.renderNoResultsView()
    }

    return (
      <VideosListContainer>
        {videosData.map(eachVideo => (
          <VideoCard details={eachVideo} key={eachVideo.id} />
        ))}
      </VideosListContainer>
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

  contentRenderSwitch = () => {
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

  renderNoResultsView = () => (
    <FailureContainer style={{'margin-top': '20px'}}>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureTitle>No Search results found</FailureTitle>
      <FailureDesc>Try different key words or remove search filter</FailureDesc>
      <RetryButton type="button" onClick={this.onRetryClick}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  render() {
    const {showPremiumCard} = this.state
    return (
      <HomeMainContainer data-testid="home">
        <Header />
        <ResponsiveContainer>
          <SideMenuBar />
          <ContentContainer>
            {showPremiumCard && (
              <PremiumCard onClosePremiumCard={this.onClosePremiumCard} />
            )}
            <BottomContainer>
              <InputContainer>
                <InputField
                  type="search"
                  placeholder="Search"
                  onChange={this.onUserSearchInput}
                  onKeyDown={this.onEnterClick}
                />
                <SearchButton
                  type="button"
                  data-testid="searchButton"
                  onClick={this.onSearchClick}
                >
                  <GoSearch color="#606060" />
                </SearchButton>
              </InputContainer>

              {this.contentRenderSwitch()}
            </BottomContainer>
          </ContentContainer>
        </ResponsiveContainer>
      </HomeMainContainer>
    )
  }
}

export default Home
