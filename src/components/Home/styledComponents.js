import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
`

export const ResponsiveContainer = styled.div`
  display: flex;

  @media screen and (min-width: 992px) {
    height: 85vh;
  }
`

export const ContentContainer = styled.div`
  flex-grow: 1;
  overflow: auto;
`

export const BottomContainer = styled.div`
  padding: 0px
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media screen and (min-width: 992px) {
      padding: 0px 20px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 400px;

  @media screen and (min-width: 992px) {
    height: 32px;
  }
`
export const InputField = styled.input`
  padding: 0px 15px;
  height: 100%;
  flex-grow: 1;
  border: 1px solid #cccccc;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0px 0px 2px grey inset;
  }
`

export const SearchButton = styled.button`
  background-color: transparent;
  border: 1px solid #cccccc;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  height: 100%;
  width: 55px;
  border-left: none;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #b7b7b7;
  }

  @media screen and (min-width: 992px) {
    width: 65px;
  }
`
export const VideosListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
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
  color: #383838;
  text-align: center;
  margin-top: 20px;
`

export const FailureDesc = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #606060;
  text-align: center;
  margin-top: 0px;
  padding: 0px 20px;
  max-width: 400px;
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
