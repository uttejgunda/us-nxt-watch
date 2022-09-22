import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import VideosContext from './context/VideosContext'
import NotFound from './components/NotFound'

// Replace your code here

class App extends Component {
  state = {
    likedVideosData: [],
    disLikedVideosData: [],
    savedVideos: [],
    activeTab: 'HOME',
    isDarkMode: false,
  }

  updateActiveTab = id => {
    this.setState({activeTab: id})
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  addLikedVideo = item => {
    const {likedVideosData, disLikedVideosData} = this.state
    const matchItem = likedVideosData.find(eachItem => eachItem.id === item.id)
    if (matchItem === undefined) {
      this.setState(prevState => ({
        likedVideosData: [...prevState.likedVideosData, item],
      }))
    }
    const updatedDislikedVideoList = disLikedVideosData.filter(
      eachItem => eachItem.id !== item.id,
    )
    this.setState({disLikedVideosData: updatedDislikedVideoList})
  }

  removeLikedVideo = item => {
    const {likedVideosData, disLikedVideosData} = this.state
    const updatedLikedVideoList = likedVideosData.filter(
      eachItem => eachItem.id !== item.id,
    )

    const isItemDisliked = disLikedVideosData.find(
      eachItem => eachItem.id === item.id,
    )

    if (isItemDisliked === undefined) {
      this.setState(prevState => ({
        disLikedVideosData: [...prevState.disLikedVideosData, item],
        likedVideosData: updatedLikedVideoList,
      }))
    } else {
      const updatedDislikedVideoList = disLikedVideosData.filter(
        eachItem => eachItem.id !== item.id,
      )
      this.setState({
        disLikedVideosData: updatedDislikedVideoList,
        likedVideosData: updatedLikedVideoList,
      })
    }
  }

  toggleSaveVideo = item => {
    const {savedVideos} = this.state
    const matchItem = savedVideos.find(eachItem => eachItem.id === item.id)
    if (matchItem === undefined) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, item],
      }))
    } else {
      const updatedSavedVideos = savedVideos.filter(
        eachItem => eachItem.id !== item.id,
      )
      this.setState({savedVideos: updatedSavedVideos})
    }
  }

  render() {
    const {
      likedVideosData,
      disLikedVideosData,
      savedVideos,
      activeTab,
      isDarkMode,
    } = this.state

    return (
      <VideosContext.Provider
        value={{
          activeTab,
          updateActiveTab: this.updateActiveTab,
          likedVideosData,
          disLikedVideosData,
          addLikedVideo: this.addLikedVideo,
          removeLikedVideo: this.removeLikedVideo,
          savedVideos,
          toggleSaveVideo: this.toggleSaveVideo,
          isDarkMode,
          toggleDarkMode: this.toggleDarkMode,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </VideosContext.Provider>
    )
  }
}
export default App
