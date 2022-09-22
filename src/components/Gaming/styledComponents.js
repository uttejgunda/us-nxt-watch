import styled from 'styled-components'

export const GamingMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;

  @media screen and (min-width: 992px) {
    height: 85vh;
  }
`

export const ContentContainer = styled.div`
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#f4f4f4')};
  padding: 15px 20px;

  @media screen and (min-width: 576px) {
    padding: 15px 25px;
  }
`

export const FireIconContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#e2e8f0')};
  width: 50px;
  height: 50px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 576px) {
    width: 60px;
    height: 60px;
  }
`

export const PageTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  margin-left: 10px;

  @media screen and (min-width: 576px) {
    margin-left: 15px;
    font-size: 24px;
  }
`

export const BottomListContainer = styled.ul`
  list-style-type: none;
  padding: 20px;
  height: 80vh;
  overflow: auto;
  margin-top: 0px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 992px) {
    padding: 40px 80px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

export const FailureImg = styled.img`
  width: 120px;

  @media screen and (min-width: 992px) {
    width: 200px;
  }
`

export const FailureTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#383838')};
  text-align: center;
  margin-top: 20px;
  font-weight: 500;

  @media screen and (min-width: 992px) {
    font-size: 24px;
    margin-top: 40px;
  }
`

export const FailureDesc = styled.p`
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

export const RetryButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #4f46e5;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  border-radius: 4px;
  width: 80px;
  height: 32px;
  margin-top: 5px;
`
