import styled from 'styled-components'

export const ListItem = styled.li`
  width: 44%;
  max-width: 200px;
  cursor: pointer;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;

  @media screen and (min-width: 576px) {
    width: 30%;
    max-width: 250px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  }
`

export const VideoDetailsContainer = styled.div`
  margin-top: 10px;
  width: 80%;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #231f20;
  margin: 0px;
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #606060;
  margin-top: 5px;
  line-height: 20px;
`

export const ViewsAndDateRow = styled.div`
  display: flex;
  align-items: center;
`
