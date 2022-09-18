import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 30px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;

  @media screen and (min-width: 992px) {
    height: 220px;
  }
`
export const TextContainer = styled.div`
  width: 60%;
`

export const WebsiteLogo = styled.img`
  width: 120px;

  @media screen and (min-width: 992px) {
    width: 150px;
  }
`

export const Desc = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #1e293b;
  line-height: 20px;
  font-weight: 500;
`

export const GetNowButton = styled.button`
  background-color: transparent;
  border: 1px solid #181818;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #181818;
  padding: 8px 16px;
  margin-top: 10px;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 992px) {
    margin-top: 40px;
    padding: 10px 20px;
    font-size: 14px;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
