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

const TrendingVideoCard = props => {
  const {details} = props
  const {channel, publishedAt, id, thumbnailUrl, title, viewCount} = details
  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
      <ListItem>
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
      </ListItem>
    </Link>
  )
}

export default TrendingVideoCard
