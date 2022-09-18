import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
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

export const MenuMoonSmButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  margin-right: 10px;
  margin-left: 10px;
  padding: 0px;

  @media screen and (min-width: 992px) {
    display: none;
  }
`

export const MenuMoonLgButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  margin-right: 10px;
  margin-left: 10px;
  padding: 0px;
  display: none;

  @media screen and (min-width: 992px) {
    display: inline;
  }
`

export const MenuBurgerSmButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  margin-right: 10px;
  margin-left: 10px;
  padding: 0px;

  @media screen and (min-width: 992px) {
    display: none;
  }
`

export const MenuBurgerLgButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  margin-right: 10px;
  margin-left: 10px;
  padding: 0px;
  display: none;

  @media screen and (min-width: 992px) {
    display: inline;
  }
`

export const ProfileIcon = styled.img`
  width: 32px;
  height: 30px;
`

export const MenuLogoutSmButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  margin-left: 10px;
  padding: 0px;

  @media screen and (min-width: 992px) {
    display: none;
  }
`

export const MenuLogoutLgButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 1px solid #3b82f6;
  border-radius: 2px;
  margin-left: 10px;
  padding: 5px 20px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #3b82f6;
  font-weight: bold;
  display: none;
  align-self: flex-start;

  @media screen and (min-width: 992px) {
    display: inline;
  }
`
