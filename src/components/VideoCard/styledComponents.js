import styled from 'styled-components'

export const ListItem = styled.li`
  width: 100%;
  cursor: pointer;

  @media screen and (min-width: 576px) {
    width: 46%;
    max-width: 280px;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 992px) {
    width: 23%;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  padding: 10px 20px;
`

export const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: ${props => (props.isDarkMode ? 'normal' : '500')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#231f20')};
  margin-top: 0px;
  margin-bottom: 0px;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelDesc = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.isDarkMode ? '#94a3b8' : '#606060')};
  font-weight: ${props => (props.seperator ? 'bold' : 'normal')};
  margin-right: ${props => (props.seperator ? '10px' : '0px')};
  margin-left: ${props => (props.seperator ? '10px' : '0px')};

  @media screen and (min-width: 992px) {
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
