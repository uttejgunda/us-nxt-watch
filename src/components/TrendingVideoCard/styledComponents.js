import styled from 'styled-components'

export const ListItem = styled.li`
  width: 100%;
  cursor: pointer;
  margin-bottom: 20px;

  @media screen and (min-width: 576px) {
    display: flex;
  }
`

export const Thumbnail = styled.img`
  width: 100%;

  @media screen and (min-width: 576px) {
    width: 40%;
    max-width: 300px;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  padding: 10px 20px;
`

export const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;

  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #231f20;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelDesc = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #606060;
  font-weight: ${props => (props.seperator ? 'bold' : 'normal')};
  margin-right: ${props => (props.seperator ? '10px' : '0px')};
  margin-left: ${props => (props.seperator ? '10px' : '0px')};

  @media screen and (min-width: 576px) {
    display: ${props => (props.seperator1 ? 'none' : 'block')};
    margin-right: ${props => (props.seperator ? '5px' : '0px')};
    margin-left: ${props => (props.seperator ? '5px' : '0px')};
    margin-bottom: 0px;
    margin-top: ${props => (props.channelName ? '8px' : '4px')};
  }
`

export const ViewsAndDateRow = styled.div`
  display: flex;
  align-items: center;
`
