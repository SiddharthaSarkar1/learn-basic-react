import { useState, useReducer, useContext } from 'react';
import videosDB from "./data/data";
import "./App.css";
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import ThemeContext from './context/ThemeContext';

function App() {
  // console.log("Render App");

  const [editableVideo, setEditableVideo] = useState(null);

  const videoReducer = (videos, action) => {
    switch(action.type) {
      case 'ADD':
        return [
          ...videos,
              {...action.payload, id: videos.length+1}
        ]
      case 'DELETE':
        return videos.filter(video => video.id !== action.payload);
      case 'UPDATE':
        const index = videos.findIndex(v => v.id === action.payload.id);
        const newVideos = [...videos]
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videosDB);

  const [mode, setMode] = useState('darkMode');

  //Using the context -
  const themeContext = useContext(ThemeContext);
  console.log({themeContext});

  // const [videos, setVideos] = useState(videosDB);

  

  // const addVideos = (video) => {
  //   dispatch({type:'ADD', payload: video});
  //   // setVideos([
  //   //   ...videos,
  //   //       {...video, id: videos.length+1}
  //   // ]);
  // }

  // const deleteVideo = (id) => {
  //   // setVideos(videos.filter(video => video.id !== id));// usingfilter to remove the video
  //   // console.log(id);
  //   dispatch({type:'DELETE', payload: id});
  // }

  const editVideo = (id) => {
    setEditableVideo(videos.find(video => video.id === id));
    console.log(id);
  }

  // const updateVideo = (video) => {
  //   // console.log(video);
  //   //To update videos array we will use splice
  //   // const index = videos.findIndex(v => v.id === video.id);
  //   // const newVideos = [...videos]
  //   // newVideos.splice(index, 1, video);
  //   // console.log(newVideos);
  //   // setVideos(newVideos);
  //   dispatch({type:'UPDATE', payload: video});
  // }
  
  return (
    <ThemeContext.Provider value={mode}>
   <div className={`App ${mode}`}>
      <button onClick={() => setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')}>Mode</button>
      <div>
        <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
      </div>
      <VideoList dispatch={dispatch} editVideo={editVideo} videos={videos}></VideoList>
      
      {/* <div style={{clear: 'both'}}> */}
        {/* <PlayButton message="Play-message" onPlay={() => console.log('Playyyy')} onPause={() => console.log('Pauseeee')}>Play</PlayButton> */}
        {/* <PlayButton message="Pause-message" onSmash={() => alert('Plause')}>Pause</PlayButton> */}
      {/* </div> */}

      {/* <Counter></Counter> */}

    </div>
    </ThemeContext.Provider>
  );
}

export default App;
