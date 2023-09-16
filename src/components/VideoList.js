import React, { useContext, useState, useEffect } from 'react';
import Video from './Video';
import PlayButton from './PlayButton';
import VideosContext from '../context/VideosContext';
import ThemeContext from '../context/ThemeContext';
import useVideos from '../hooks/Videos';

import axios from 'axios';
import useVideoDispatch from '../hooks/VideoDispatch';

const VideoList = ({editVideo}) => {
  //API url
  const url = `http://localhost:8800/videos`;

  // const themeContext = useContext(ThemeContext);
  // console.log({ themeContext });

  // const videos = useContext(VideosContext);
  // const videos = useVideos();

  // const [videos, setVideos] = useState([]);
  const videos = useVideos();
  const dispatch = useVideoDispatch();

  async function handleClick(){
    const res = await axios.get(url);
    console.log("get videos", res.data);

    dispatch({type:'LOAD', payload:res.data});
  }

  useEffect(() => {
    async function getVideosFromAPI(){
      const res = await axios.get(url);
      console.log("get videos", res.data);
  
      dispatch({type:'LOAD', payload:res.data});
    }
    //Calling the function
    getVideosFromAPI();
  }, [])
  

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
      <button onClick={handleClick}>Get Videos</button>
      </>
  )
}

export default VideoList;