import {Link} from 'react-router-dom'
import VideosContext from '../../context/VideosContext'
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
    <VideosContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <ListItem>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <Title isDarkMode={isDarkMode}>{title}</Title>
                <ViewCount
                  isDarkMode={isDarkMode}
                >{`${viewCount} Watching Worldwide`}</ViewCount>
              </VideoDetailsContainer>
            </Link>
          </ListItem>
        )
      }}
    </VideosContext.Consumer>
  )
}

export default GamingVideoCard
