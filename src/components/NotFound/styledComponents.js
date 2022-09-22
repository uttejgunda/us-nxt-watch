import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const ResponsiveContainer = styled.div`
  display: flex;
  @media screen and (min-width: 992px) {
    height: 85vh;
  }
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 85vh;
`

export const NotFoundImg = styled.img`
  width: 250px;
  margin-bottom: 20px;

  @media screen and (min-width: 992px) {
    width: 400px;
  }
`

export const NotfoundTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#383838')};
  text-align: center;
  margin-top: 20px;
  font-weight: 500;

  @media screen and (min-width: 992px) {
    font-size: 24px;
  }
`

export const NotFoundDesc = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkMode ? '#94a3b8' : '#606060')};
  text-align: center;
  margin-top: 0px;
  padding: 0px 20px;
  max-width: 400px;

  @media screen and (min-width: 992px) {
    font-size: 16px;
    max-width: 450px;
  }
`
