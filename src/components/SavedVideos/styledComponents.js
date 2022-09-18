import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media screen and (min-width: 992px) {
    flex-direction: row;
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
  background-color: #f4f4f4;
  padding: 15px 20px;

  @media screen and (min-width: 576px) {
    padding: 10px 25px;
  }
`

export const FireIconContainer = styled.div`
  background-color: #e2e8f0;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 576px) {
    width: 45px;
    height: 45px;
  }
`

export const PageTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: #1e293b;
  margin-left: 10px;

  @media screen and (min-width: 576px) {
    margin-left: 15px;
  }
`

export const BottomListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
  overflow: auto;
  height: 80vh;

  @media screen and (min-width: 576px) {
    padding: 20px;
  }
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

export const NoVideosImg = styled.img`
  width: 120px;

  @media screen and (min-width: 992px) {
    width: 200px;
  }
`

export const NoVideostitle = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  color: #383838;
  text-align: center;
  margin-top: 20px;
`

export const NoVideosDesc = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #606060;
  text-align: center;
  margin-top: 0px;
  padding: 0px 20px;
  max-width: 400px;
`
