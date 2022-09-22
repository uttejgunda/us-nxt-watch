import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import SideMenuTab from '../SideMenuTab'
import VideoContext from '../../context/VideosContext'
import {
  SideMenuContainer,
  MenuListContainer,
  FooterContainer,
  SubHeading,
  MediaIconsRow,
  MediaIcon,
  FooterDesc,
} from './styledComponents'

const menuTabs = [
  {
    id: 'HOME',
    title: 'Home',
    icon: <AiFillHome size="20" />,
    link: '/',
  },
  {
    id: 'TRENDING',
    title: 'Trending',
    icon: <HiFire size="20" />,
    link: '/trending',
  },
  {
    id: 'GAMING',
    title: 'Gaming',
    icon: <SiYoutubegaming size="20" />,
    link: '/gaming',
  },
  {
    id: 'SAVED',
    title: 'Saved videos',
    icon: <MdPlaylistAdd size="20" />,
    link: '/saved-videos',
  },
]

const SideMenuBar = () => (
  <VideoContext.Consumer>
    {value => {
      const {activeTab, updateActiveTab, isDarkMode} = value

      const onTabClick = id => {
        updateActiveTab(id)
      }

      return (
        <SideMenuContainer isDarkMode={isDarkMode}>
          <MenuListContainer>
            {menuTabs.map(eachItem => (
              <SideMenuTab
                details={eachItem}
                onTabClick={onTabClick}
                activeTab={activeTab}
                key={eachItem.id}
                isDarkMode={isDarkMode}
              />
            ))}
          </MenuListContainer>

          <FooterContainer>
            <SubHeading isDarkMode={isDarkMode}>CONTACT US</SubHeading>
            <MediaIconsRow>
              <MediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <MediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <MediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </MediaIconsRow>
            <FooterDesc isDarkMode={isDarkMode}>
              Enjoy! Now to see your channels and recommendations!
            </FooterDesc>
          </FooterContainer>
        </SideMenuContainer>
      )
    }}
  </VideoContext.Consumer>
)

export default SideMenuBar
