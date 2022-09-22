import Header from '../Header'
import {
  NotFoundContainer,
  ResponsiveContainer,
  BottomContainer,
  NotFoundImg,
  NotfoundTitle,
  NotFoundDesc,
} from './styledComponents'
import SideMenuBar from '../SideMenuBar'
import VideosContext from '../../context/VideosContext'

const NotFound = () => (
  <VideosContext.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <NotFoundContainer isDarkMode={isDarkMode}>
          <Header />

          <ResponsiveContainer>
            <SideMenuBar />
            <BottomContainer>
              <NotFoundImg
                src={
                  isDarkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotfoundTitle isDarkMode={isDarkMode}>
                Page Not Found
              </NotfoundTitle>
              <NotFoundDesc isDarkMode={isDarkMode}>
                we are sorry, the page you requested could not be found.
              </NotFoundDesc>
            </BottomContainer>
          </ResponsiveContainer>
        </NotFoundContainer>
      )
    }}
  </VideosContext.Consumer>
)

export default NotFound
