import {Link} from 'react-router-dom'
import {
  ListItem,
  Thumbnail,
  VideoDetailsContainer,
  Title,
  ViewCount,
} from './styledComponents'

const GamingVideoCard = props => {
  const {details} = props
  const {id, thumbnailUrl, title, viewCount} = details
  return (
    <ListItem>
      <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <Title>{title}</Title>
          <ViewCount>{`${viewCount} Watching Worldwide`}</ViewCount>
        </VideoDetailsContainer>
      </Link>
    </ListItem>
  )
}

export default GamingVideoCard
