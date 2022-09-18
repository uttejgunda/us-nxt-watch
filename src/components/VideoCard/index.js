import {Link} from 'react-router-dom'
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

const VideoCard = props => {
  const {details} = props
  const {channel, publishedAt, id, thumbnailUrl, title, viewCount} = details
  return (
    <ListItem>
      <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <ProfilePic src={channel.profileImageUrl} alt="channel logo" />
          <div>
            <Title>{title}</Title>
            <ChannelDetailsContainer>
              <ChannelDesc channelName>{channel.name}</ChannelDesc>
              <ChannelDesc seperator seperator1>
                •
              </ChannelDesc>
              <ViewsAndDateRow>
                <ChannelDesc>{`${viewCount} views`}</ChannelDesc>
                <ChannelDesc seperator>•</ChannelDesc>
                <ChannelDesc>{publishedAt}</ChannelDesc>
              </ViewsAndDateRow>
            </ChannelDetailsContainer>
          </div>
        </VideoDetailsContainer>
      </Link>
    </ListItem>
  )
}

export default VideoCard
