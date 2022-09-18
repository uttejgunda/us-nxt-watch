import React from 'react'

const VideosContext = React.createContext({
  likedVideosData: [],
  disLikedVideosData: [],
  addLikedVideo: {},
  removeLikedVideo: {},
  savedVideos: [],
  toggleSaveVideo: {},
})

export default VideosContext
