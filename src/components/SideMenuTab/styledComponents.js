import styled from 'styled-components'

export const MenuListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  background-color: ${props =>
    props.isActive ? props.highTabColor : props.lowTabColor};
`

export const MenuTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: ${props => (props.isActive ? 'bold' : '400')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#424242')};
  margin: 0px;
  margin-left: 20px;
`
