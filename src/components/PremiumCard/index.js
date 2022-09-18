import {IoCloseOutline} from 'react-icons/io5'
import {
  CardContainer,
  TextContainer,
  WebsiteLogo,
  Desc,
  GetNowButton,
  CloseButton,
} from './styledComponents'

const PremiumCard = props => {
  const onCloseClick = () => {
    const {onClosePremiumCard} = props
    onClosePremiumCard()
  }

  return (
    <CardContainer data-testid="banner">
      <TextContainer>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <Desc>Buy Nxt Watch Premium prepaid plans with UPI</Desc>
        <GetNowButton type="button">GET IT NOW</GetNowButton>
      </TextContainer>
      <CloseButton type="button" data-testid="close" onClick={onCloseClick}>
        <IoCloseOutline size="20" />
      </CloseButton>
    </CardContainer>
  )
}

export default PremiumCard
