import {withRouter, Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {GrMenu} from 'react-icons/gr'
import Cookies from 'js-cookie'

import {
  MainContainer,
  ContentContainer,
  WebsiteLogo,
  MenuRow,
  MenuMoonSmButton,
  MenuMoonLgButton,
  MenuBurgerSmButton,
  MenuBurgerLgButton,
  ProfileIcon,
  MenuLogoutSmButton,
  MenuLogoutLgButton,
} from './styledComponents'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <MainContainer>
      <ContentContainer>
        <Link to="/">
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
        </Link>
        <MenuRow>
          <MenuMoonSmButton type="button" data-testid="theme">
            <FaMoon size="20" />
          </MenuMoonSmButton>

          <MenuMoonLgButton type="button" data-testid="theme">
            <FaMoon size="23" />
          </MenuMoonLgButton>

          <MenuBurgerSmButton type="button">
            <GrMenu size="20" />
          </MenuBurgerSmButton>
          <MenuBurgerLgButton type="button">
            <ProfileIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
          </MenuBurgerLgButton>

          <MenuLogoutSmButton type="button" onClick={onLogout}>
            <FiLogOut size="22" />
          </MenuLogoutSmButton>
          <MenuLogoutLgButton type="button" onClick={onLogout}>
            Logout
          </MenuLogoutLgButton>
        </MenuRow>
      </ContentContainer>
    </MainContainer>
  )
}

export default withRouter(Header)
