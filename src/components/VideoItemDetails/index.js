import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike, BiDownload} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {RiShareForwardLine} from 'react-icons/ri'

import SideMenuBar from '../SideMenuBar'
import Header from '../Header'
import {
  VideoDetails,
  ResponsiveContainer,
  ContentContainer,
  PlayerSmContainer,
  DetailsContainer,
  VideoTitle,
  ViewsAndActionsContainer,
  ViewsAndDateRow,
  ViewsAndDateItem,
  ActionsRow,
  ActionButton,
  ActionTitle,
  ActionLikeTitle,
  ActionDislikeTitle,
  ActionSavedTitle,
  HrTag,
  ChannelDetailsContainer,
  ProfilePic,
  ChannelName,
  ChannelSubscribers,
  VideoDesc,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureTitle,
  FailureDesc,
  RetryButton,
} from './styledComponents'
import VideosContext from '../../context/VideosContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {videoDetails: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVideoDetails()
  }

  onRetryClick = () => {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }

      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => (
    <VideosContext.Consumer>
      {value => {
        const {
          likedVideosData,
          disLikedVideosData,
          addLikedVideo,
          removeLikedVideo,
          savedVideos,
          toggleSaveVideo,
          isDarkMode,
        } = value
        console.log(savedVideos)
        const {videoDetails} = this.state
        const isLiked = likedVideosData.find(
          eachItem => eachItem.id === videoDetails.id,
        )
        const isDisliked = disLikedVideosData.find(
          eachItem => eachItem.id === videoDetails.id,
        )

        const isSaved = savedVideos.find(
          eachItem => eachItem.id === videoDetails.id,
        )

        const isLikeClick = () => {
          console.log('like clicked')
          addLikedVideo(videoDetails)
        }

        const isDislikeClick = () => {
          removeLikedVideo(videoDetails)
        }

        const isSaveClick = () => {
          toggleSaveVideo(videoDetails)
        }

        return (
          <>
            <PlayerSmContainer>
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                url={videoDetails.videoUrl}
              />
            </PlayerSmContainer>

            <DetailsContainer>
              <VideoTitle isDarkMode={isDarkMode}>
                {videoDetails.title}
              </VideoTitle>
              <ViewsAndActionsContainer>
                <ViewsAndDateRow>
                  <ViewsAndDateItem isDarkMode={isDarkMode}>
                    {videoDetails.viewCount}
                  </ViewsAndDateItem>
                  <ViewsAndDateItem seperator isDarkMode={isDarkMode}>
                    •
                  </ViewsAndDateItem>
                  <ViewsAndDateItem isDarkMode={isDarkMode}>
                    {videoDetails.publishedAt}
                  </ViewsAndDateItem>
                </ViewsAndDateRow>
                <ActionsRow>
                  <ActionButton onClick={isLikeClick}>
                    <BiLike
                      size="22px"
                      color={isLiked ? '#2563eb' : '#64748b'}
                    />
                    <ActionLikeTitle isLiked={isLiked}>Like</ActionLikeTitle>
                  </ActionButton>
                  <ActionButton onClick={isDislikeClick}>
                    <BiDislike
                      size="22px"
                      color={isDisliked ? '#2563eb' : '#64748b'}
                    />
                    <ActionDislikeTitle isDisliked={isDisliked}>
                      Dislike
                    </ActionDislikeTitle>
                  </ActionButton>
                  <ActionButton>
                    <RiShareForwardLine size="22px" color="#64748b" />
                    <ActionTitle>Share</ActionTitle>
                  </ActionButton>
                  <ActionButton>
                    <BiDownload size="22px" color="#64748b" />
                    <ActionTitle>Download</ActionTitle>
                  </ActionButton>
                  <ActionButton onClick={isSaveClick}>
                    <MdPlaylistAdd
                      size="22px"
                      color={isSaved ? '#2563eb' : '#64748b'}
                    />
                    <ActionSavedTitle isSaved={isSaved}>
                      {isSaved ? 'Saved' : 'Save'}
                    </ActionSavedTitle>
                  </ActionButton>
                </ActionsRow>
              </ViewsAndActionsContainer>
              <HrTag isDarkMode={isDarkMode} />

              <ChannelDetailsContainer>
                <ProfilePic
                  src={videoDetails.channel.profileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <ChannelName isDarkMode={isDarkMode}>
                    {videoDetails.channel.name}
                  </ChannelName>
                  <ChannelSubscribers isDarkMode={isDarkMode}>
                    {videoDetails.channel.subscriberCount}
                  </ChannelSubscribers>
                </div>
              </ChannelDetailsContainer>

              <VideoDesc isDarkMode={isDarkMode}>
                {videoDetails.description}
              </VideoDesc>
            </DetailsContainer>
          </>
        )
      }}
    </VideosContext.Consumer>
  )

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

  render() {
    return (
      <VideosContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <VideoDetails isDarkMode={isDarkMode}>
              <Header />
              <ResponsiveContainer>
                <SideMenuBar />
                <ContentContainer>
                  {this.contentRenderSwitch()}
                </ContentContainer>
              </ResponsiveContainer>
            </VideoDetails>
          )
        }}
      </VideosContext.Consumer>
    )
  }
}

export default VideoItemDetails
