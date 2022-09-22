import {Link} from 'react-router-dom'

import {MenuListItem, MenuTitle} from './styledComponents'

const SideMenuTab = props => {
  const {details, onTabClick, activeTab, isDarkMode} = props
  const isActive = details.id === activeTab

  const userTabClick = () => {
    onTabClick(details.id)
  }

  const highTabColor = isDarkMode ? '#313131' : '#f1f5f9'
  const lowTabColor = isDarkMode ? '#181818' : '#ffffff'

  return (
    <Link
      onClick={userTabClick}
      to={details.link}
      style={{textDecoration: 'none', color: isActive ? '#ff0000' : '#606060'}}
    >
      <MenuListItem
        isActive={isActive}
        highTabColor={highTabColor}
        lowTabColor={lowTabColor}
      >
        {details.icon}
        <MenuTitle isActive={isActive} isDarkMode={isDarkMode}>
          {details.title}
        </MenuTitle>
      </MenuListItem>
    </Link>
  )
}

export default SideMenuTab
