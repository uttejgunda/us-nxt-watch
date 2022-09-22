import React from 'react'

const VideosContext = React.createContext({
  activeTab: '',
  updateActiveTab: {},
  likedVideosData: [],
  disLikedVideosData: [],
  addLikedVideo: {},
  removeLikedVideo: {},
  savedVideos: [],
  toggleSaveVideo: {},
  isDarkMode: false,
  toggleDarkMode: {},
})

export default VideosContext
