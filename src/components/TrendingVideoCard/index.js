import {Link} from 'react-router-dom'
import VideosContext from '../../context/VideosContext'
import {
  ListItem,
  Thumbnail,
  VideoDetailsContainer,
  ProfilePic,
  Title,
  ChannelDetailsContainer,
  ViewsAndDateRow,
  ChannelDesc,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {details} = props
  const {channel, publishedAt, id, thumbnailUrl, title, viewCount} = details
  return (
    <VideosContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <ListItem>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ProfilePic src={channel.profileImageUrl} alt="channel logo" />
                <div>
                  <Title isDarkMode={isDarkMode}>{title}</Title>
                  <ChannelDetailsContainer>
                    <ChannelDesc channelName isDarkMode={isDarkMode}>
                      {channel.name}
                    </ChannelDesc>
                    <ChannelDesc seperator seperator1 isDarkMode={isDarkMode}>
                      •
                    </ChannelDesc>
                    <ViewsAndDateRow>
                      <ChannelDesc
                        isDarkMode={isDarkMode}
                      >{`${viewCount} views`}</ChannelDesc>
                      <ChannelDesc seperator isDarkMode={isDarkMode}>
                        •
                      </ChannelDesc>
                      <ChannelDesc isDarkMode={isDarkMode}>
                        {publishedAt}
                      </ChannelDesc>
                    </ViewsAndDateRow>
                  </ChannelDetailsContainer>
                </div>
              </VideoDetailsContainer>
            </ListItem>
          </Link>
        )
      }}
    </VideosContext.Consumer>
  )
}

export default TrendingVideoCard
