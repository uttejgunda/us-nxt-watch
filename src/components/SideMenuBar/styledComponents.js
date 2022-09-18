import styled from 'styled-components'

export const SideMenuContainer = styled.div`
  min-width: 20%;
  max-width: 20%;
  display: none;
  background-color: #ffffff;

  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 83vh;
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

export const MenuListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  background-color: ${props => (props.selected ? '#f1f5f9' : '#ffffff')};
`

export const MenuTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: ${props => (props.selected ? 'bold' : '500')};
  color: ${props => (props.selected ? '#383838' : '#424242')};
  margin: 0px;
  margin-left: 20px;
`

export const FooterContainer = styled.div`
  padding-left: 24px;
  padding-right: 60px;
`

export const SubHeading = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #475569;
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
  font-weight: 500;
  color: #475569;
`
