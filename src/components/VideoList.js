import React, { useContext } from 'react';
import Video from './Video';
import PlayButton from './PlayButton';
import VideosContext from '../context/VideosContext';
import ThemeContext from '../context/ThemeContext';
import useVideos from '../hooks/Videos';

const VideoList = ({editVideo}) => {

  const themeContext = useContext(ThemeContext);
  console.log({ themeContext });

  // const videos = useContext(VideosContext);
  const videos = useVideos();
  return (
      <>
    {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          // deleteVideo={deleteVideo}
          editVideo={editVideo}
          >
          <PlayButton 
          onPlay={() => console.log('Playing..'+ video.title)} 
          onPause={() => console.log('Paused..'+ video.title)}>
          {video.title}
          </PlayButton>

        </Video>
      ))}
      </>
  )
}

export default VideoList;