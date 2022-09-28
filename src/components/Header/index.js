import {withRouter, Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {HiMenu} from 'react-icons/hi'
import {BsBrightnessHigh} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {
  MainContainer,
  ContentContainer,
  WebsiteLogo,
  MenuRow,
  MenuMoonButton,
  MenuBurgerSmButton,
  MenuBurgerLgButton,
  ProfileIcon,
  MenuLogoutSmButton,
  MenuLogoutLgButton,
  PopupMainContainer,
  PopupDesc,
  PopupButtonsRow,
  PopupCancelButton,
  PopupLogoutButton,
} from './styledComponents'
import VideosContext from '../../context/VideosContext'

const Header = props => (
  <VideosContext.Consumer>
    {value => {
      const {isDarkMode, toggleDarkMode} = value

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onThemeChange = () => {
        toggleDarkMode()
      }

      return (
        <MainContainer isDarkMode={isDarkMode}>
          <ContentContainer>
            <Link to="/">
              <WebsiteLogo
                src={
                  isDarkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <MenuRow>
              <MenuMoonButton
                onClick={onThemeChange}
                type="button"
                data-testid="theme"
              >
                {isDarkMode ? (
                  <BsBrightnessHigh size="100%" color="#ffffff" />
                ) : (
                  <FaMoon size="100%" color="#181818" />
                )}
              </MenuMoonButton>

              <MenuBurgerSmButton type="button">
                <HiMenu
                  size="100%"
                  color={isDarkMode ? '#ffffff' : '#181818'}
                />
              </MenuBurgerSmButton>
              <MenuBurgerLgButton type="button">
                <ProfileIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </MenuBurgerLgButton>

              <div className="popup-container">
                <Popup
                  modal
                  trigger={
                    <MenuLogoutSmButton type="button" onClick={onLogout}>
                      <FiLogOut
                        size="100%"
                        color={isDarkMode ? '#ffffff' : '#181818'}
                      />
                    </MenuLogoutSmButton>
                  }
                >
                  {close => (
                    <PopupMainContainer isDarkMode={isDarkMode}>
                      <PopupDesc isDarkMode={isDarkMode}>
                        Are you sure, you want to logout
                      </PopupDesc>

                      <PopupButtonsRow>
                        <PopupCancelButton
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          Cancel
                        </PopupCancelButton>
                        <PopupLogoutButton
                          type="button"
                          className="trigger-button"
                          onClick={onLogout}
                        >
                          Confirm
                        </PopupLogoutButton>
                      </PopupButtonsRow>
                    </PopupMainContainer>
                  )}
                </Popup>
              </div>

              <div className="popup-container">
                <Popup
                  modal
                  trigger={
                    <MenuLogoutLgButton
                      type="button"
                      isDarkMode={isDarkMode}
                      onClick={onLogout}
                    >
                      Logout
                    </MenuLogoutLgButton>
                  }
                >
                  {close => (
                    <PopupMainContainer isDarkMode={isDarkMode}>
                      <PopupDesc isDarkMode={isDarkMode}>
                        Are you sure, you want to logout
                      </PopupDesc>

                      <PopupButtonsRow>
                        <PopupCancelButton
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          Cancel
                        </PopupCancelButton>
                        <PopupLogoutButton
                          type="button"
                          className="trigger-button"
                          onClick={onLogout}
                        >
                          Confirm
                        </PopupLogoutButton>
                      </PopupButtonsRow>
                    </PopupMainContainer>
                  )}
                </Popup>
              </div>
            </MenuRow>
          </ContentContainer>
        </MainContainer>
      )
    }}
  </VideosContext.Consumer>
)

export default withRouter(Header)
