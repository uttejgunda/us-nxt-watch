import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  SideMenuContainer,
  MenuListContainer,
  MenuListItem,
  MenuTitle,
  FooterContainer,
  SubHeading,
  MediaIconsRow,
  MediaIcon,
  FooterDesc,
} from './styledComponents'

class SideMenuBar extends Component {
  render() {
    return (
      <SideMenuContainer>
        <MenuListContainer>
          <Link
            onClick={this.onHomeClick}
            to="/"
            style={{textDecoration: 'none'}}
          >
            <MenuListItem selected>
              <AiFillHome size="20" color="#ff0000" />
              <MenuTitle selected>Home</MenuTitle>
            </MenuListItem>
          </Link>

          <Link
            onClick={this.onTrendingClick}
            to="/trending"
            style={{textDecoration: 'none'}}
          >
            <MenuListItem>
              <HiFire size="20" color="#606060" />
              <MenuTitle>Trending</MenuTitle>
            </MenuListItem>
          </Link>

          <Link
            onClick={this.onGamingClick}
            to="/gaming"
            style={{textDecoration: 'none'}}
          >
            <MenuListItem>
              <SiYoutubegaming size="20" color="#606060" />
              <MenuTitle>Gaming</MenuTitle>
            </MenuListItem>
          </Link>

          <Link
            onClick={this.onSavedClick}
            to="/saved-videos"
            style={{textDecoration: 'none'}}
          >
            <MenuListItem>
              <MdPlaylistAdd size="20" color="#606060" />
              <MenuTitle>Saved videos</MenuTitle>
            </MenuListItem>
          </Link>
        </MenuListContainer>

        <FooterContainer>
          <SubHeading>CONTACT US</SubHeading>
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
          <FooterDesc>
            Enjoy! Now to see your channels and recommendations!
          </FooterDesc>
        </FooterContainer>
      </SideMenuContainer>
    )
  }
}

export default SideMenuBar
