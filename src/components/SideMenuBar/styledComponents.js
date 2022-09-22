import styled from 'styled-components'

export const SideMenuContainer = styled.div`
  min-width: 20%;
  max-width: 20%;
  display: none;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#ffffff')};

  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 89vh;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 1300px) {
    min-width: 18%;
    max-width: 18%;
  }
`

export const MenuListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
`

export const FooterContainer = styled.div`
  padding-left: 24px;
  padding-right: 60px;
`

export const SubHeading = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#475569')};
  font-weight: ${props => (props.isDarkMode ? '500' : 'normal')};
`

export const MediaIconsRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const MediaIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 10px;
`
export const FooterDesc = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: ${props => (props.isDarkMode ? 'normal' : '500')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#475569')};
`
