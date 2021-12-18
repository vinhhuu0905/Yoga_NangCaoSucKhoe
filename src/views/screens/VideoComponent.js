import React, { useState, useRef, useMemo } from "react"
import { StyleSheet, View } from "react-native"
import Video from "react-native-video"
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls'

const VideoComponent = ({url, localVideo = false}) => {
  const videoPlayer = useRef(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [paused, setPaused] = useState(false)
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING)
  const [height, setHeigth] = useState(300)

  const onSeek = seek => {
    videoPlayer?.current.seek(seek)
  }

  const noop = () => {
    if (isFullScreen) {
      setHeigth(300)
      setIsFullScreen(false)
    } else {
      setHeigth('100%')
      setIsFullScreen(true)
    }
  }

  const onPaused = playerState => {
    setPaused(!paused)
    setPlayerState(playerState)
  }

  const onReplay = () => {
    setPlayerState(PLAYER_STATES.PLAYING)
    videoPlayer?.current.seek(0)
  }

  const onProgress = data => {
    // Video Player will continue progress even if the video already ended
    if (!isLoading) {
      setCurrentTime(data.currentTime)
    }
  }

  const onLoad = data => {
    setDuration(data.duration)
    setIsLoading(false)
  }

  const onLoadStart = () => setIsLoading(true)

  const onEnd = () => {
    // Uncomment this line if you choose repeat=false in the video player
    // setPlayerState(PLAYER_STATES.ENDED)
  }

  const onSeeking = currentTime => setCurrentTime(currentTime)
  const videoInfo = localVideo ? url : {uri: url}
  return (
    <View style={{height: height, width: '100%'}}>
      <Video
        onEnd={onEnd}
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onProgress={onProgress}
        paused={paused}
        ref={ref => (videoPlayer.current = ref)}
        resizeMode="cover"
        source={videoInfo}
        // repeat
        style={styles.mediaPlayer}
        volume={0.0}
      />
      <MediaControls
        isFullScreen={isFullScreen}
        duration={duration}
        isLoading={isLoading}
        mainColor="orange"
        // onFullScreen={noop}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={onSeek}
        onSeeking={onSeeking}
        playerState={playerState}
        progress={currentTime}
      >
      </MediaControls>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "black",
  },
})

export default VideoComponent
