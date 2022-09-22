import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#181818' : '#ffffff')};
  display: flex;
  justify-content: center;
`
export const ContentContainer = styled.div`
  width: 90%;
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 992px) {
    padding: 30px 0px;
  }

  @media screen and (min-width: 1300px) {
    padding: 20px 0px;
  }
`
export const WebsiteLogo = styled.img`
  width: 120px;

  @media screen and (min-width: 992px) {
    width: 150px;
  }
`

export const MenuRow = styled.div`
  display: flex;
  align-items: center;
`

export const MenuMoonButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0px;
  width: 20px;
  height: 20px;

  @media screen and (min-width: 992px) {
    width: 23px;
    height: 23px;
  }
`

export const MenuBurgerSmButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0px;
  margin-left: 15px;
  margin-right: 15px;
  width: 25px;
  height: 25px;

  @media screen and (min-width: 992px) {
    display: none;
  }
`

export const MenuBurgerLgButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  margin-right: 25px;
  margin-left: 25px;
  padding: 0px;
  display: none;
  width: 30px;
  height: 30px;

  @media screen and (min-width: 992px) {
    display: inline;
  }
`

export const ProfileIcon = styled.img`
  width: 100%;
  height: 100%;
`

export const MenuLogoutSmButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0px;
  width: 20px;
  height: 20px;

  @media screen and (min-width: 992px) {
    display: none;
  }
`

export const MenuLogoutLgButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isDarkMode ? '#ffffff' : '#3b82f6')};
  border-radius: 2px;
  padding: 5px 20px;
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#3b82f6')};
  font-weight: bold;
  display: none;

  @media screen and (min-width: 992px) {
    display: inline;
  }
`

export const PopupMainContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#181818' : '#ffffff')};
  padding: 40px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 20px grey;
`

export const PopupDesc = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#00306e')};
  font-weight: ${props => (props.isDarkMode ? 'normal' : '500')};
  margin-top: 0px;

  @media screen and (min-width: 556px) {
    font-size: 18px;
  }
`

export const PopupButtonsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

export const PopupCancelButton = styled.button`
  padding: 8px 16px;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #7e858e;
  border: 1px solid #7e858e;
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 556px) {
    padding: 10px 20px;
    font-size: 16px;
  }
`

export const PopupLogoutButton = styled.button`
  padding: 8px 16px;
  background-color: #3b82f6;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 556px) {
    padding: 10px 20px;
    font-size: 16px;
  }
`
