import {MdPlaylistAdd} from 'react-icons/md'
import TrendingVideoCard from '../TrendingVideoCard'
import VideosContext from '../../context/VideosContext'
import SideMenuBar from '../SideMenuBar'

import Header from '../Header'
import {
  SavedVideosMainContainer,
  ResponsiveContainer,
  ContentContainer,
  TopContainer,
  FireIconContainer,
  PageTitle,
  BottomListContainer,
  NoVideosContainer,
  NoVideosImg,
  NoVideostitle,
  NoVideosDesc,
} from './styledComponents'

const SavedVideos = () => (
  <VideosContext.Consumer>
    {value => {
      const {savedVideos, isDarkMode} = value
      const isVideos = savedVideos.length > 0

      const renderSuccessView = () => (
        <BottomListContainer>
          {savedVideos.map(eachItem => (
            <TrendingVideoCard details={eachItem} key={eachItem.id} />
          ))}
        </BottomListContainer>
      )

      const renderFailureView = () => (
        <NoVideosContainer>
          <NoVideosImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoVideostitle isDarkMode={isDarkMode}>
            No saved videos found
          </NoVideostitle>
          <NoVideosDesc isDarkMode={isDarkMode}>
            You can save your videos while watching them
          </NoVideosDesc>
        </NoVideosContainer>
      )

      return (
        <SavedVideosMainContainer
          data-testid="savedVideos"
          isDarkMode={isDarkMode}
        >
          <Header />
          <ResponsiveContainer>
            <SideMenuBar />
            <ContentContainer>
              <TopContainer isDarkMode={isDarkMode}>
                <FireIconContainer isDarkMode={isDarkMode}>
                  <MdPlaylistAdd size="55%" color="#ff0000" />
                </FireIconContainer>
                <PageTitle isDarkMode={isDarkMode}>Saved Videos</PageTitle>
              </TopContainer>
              {isVideos ? renderSuccessView() : renderFailureView()}
            </ContentContainer>
          </ResponsiveContainer>
        </SavedVideosMainContainer>
      )
    }}
  </VideosContext.Consumer>
)

export default SavedVideos
