import {HiFire} from 'react-icons/hi'
import TrendingVideoCard from '../TrendingVideoCard'
import VideosContext from '../../context/VideosContext'
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
  NoVideosContainer,
  NoVideosImg,
  NoVideostitle,
  NoVideosDesc,
} from './styledComponents'

const SavedVideos = () => (
  <VideosContext.Consumer>
    {value => {
      const {savedVideos} = value
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
          <NoVideostitle>No saved videos found</NoVideostitle>
          <NoVideosDesc>
            You can save your videos while watching them
          </NoVideosDesc>
        </NoVideosContainer>
      )

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
                <PageTitle>Saved Videos</PageTitle>
              </TopContainer>
              {isVideos ? renderSuccessView() : renderFailureView()}
            </ContentContainer>
          </ResponsiveContainer>
        </TrendingMainContainer>
      )
    }}
  </VideosContext.Consumer>
)

export default SavedVideos
