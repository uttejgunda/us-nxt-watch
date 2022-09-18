import styled from 'styled-components'

export const VideoDetails = styled.div`
  background-color: #f9f9f9;
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
  overflow: auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    padding: 30px;
  }
`

export const PlayerSmContainer = styled.div`
  width: 100%;
  min-height: 300px;

  @media screen and (min-width: 992px) {
    min-height: 500px;
  }
`

export const DetailsContainer = styled.div`
  padding: 0px 15px;

  @media screen and (min-width: 992px) {
    padding: 15px;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: #231f20;
  margin-top: 15px;
  margin-bottom: 15px;

  @media screen and (min-width: 992px) {
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 0px;
  }
`

export const ViewsAndActionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2px;
  }
`

export const ViewsAndDateRow = styled.div`
  display: flex;
  align-items: center;
`

export const ViewsAndDateItem = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #606060;
  font-weight: ${props => (props.seperator ? 'bold' : 'normal')};
  margin-right: ${props => (props.seperator ? '10px' : '0px')};
  margin-left: ${props => (props.seperator ? '10px' : '0px')};
  margin-bottom: 0px;
  margin-top: 0px;
`

export const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 992px) {
    margin: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const ActionButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  margin-left: 10px;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`

export const ActionTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  margin-top: 5px;
  margin-bottom: 0px;

  &:hover {
    color: #231f20;
    font-weight: 500;
  }

  @media screen and (min-width: 992px) {
    margin-left: 10px;
    margin-top: 0px;
  }
`

export const ActionLikeTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  margin-top: 5px;
  margin-bottom: 0px;

  &:hover {
    color: #231f20;
    font-weight: 500;
  }

  @media screen and (min-width: 992px) {
    margin-left: 10px;
    margin-top: 0px;
  }
`

export const ActionDislikeTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};
  margin-top: 5px;
  margin-bottom: 0px;

  &:hover {
    color: #231f20;
    font-weight: 500;
  }

  @media screen and (min-width: 992px) {
    margin-left: 10px;
    margin-top: 0px;
  }
`
export const ActionSavedTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
  margin-top: 5px;
  margin-bottom: 0px;

  &:hover {
    color: #231f20;
    font-weight: 500;
  }

  @media screen and (min-width: 992px) {
    margin-left: 10px;
    margin-top: 0px;
  }
`

export const HrTag = styled.hr`
  background-color: #cccccc;
  border: none;
  height: 1px;
  margin: 0px;
  margin-bottom: 10px;

  @media screen and (min-width: 992px) {
    margin-top: 10px;
  }
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #231f20;
  margin-bottom: 0px;
`

export const ChannelSubscribers = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #909090;
  margin-top: 5px;
`

export const VideoDesc = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #231f20;
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
