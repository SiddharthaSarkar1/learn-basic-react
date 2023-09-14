import { useState } from 'react';
import videosDB from "./data/data";
import "./App.css";
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';

function App() {
  console.log("Render App");
  const [videos, setVideos] = useState(videosDB);
  const [editableVideo, setEditableVideo] = useState(null);
  

  const addVideos = (video) => {
    setVideos([
      ...videos,
          {...video, id: videos.length+1}
    ]);
  }

  const deleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));// usingfilter to remove the video
    console.log(id);
  }

  const editVideo = (id) => {
    setEditableVideo(videos.find(video => video.id === id));
    console.log(id);
  }

  const updateVideo = (video) => {
    // console.log(video);
    //To update videos array we will use splice
    const index = videos.findIndex(v => v.id === video.id);
    const newVideos = [...videos]
    newVideos.splice(index, 1, video);
    // console.log(newVideos);
    setVideos(newVideos);
  }
  
  return (
   <div className="App">

      <div>
        <AddVideo addVideos={addVideos} updateVideo={updateVideo} editableVideo={editableVideo}></AddVideo>
      </div>
      <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>
      
      {/* <div style={{clear: 'both'}}> */}
        {/* <PlayButton message="Play-message" onPlay={() => console.log('Playyyy')} onPause={() => console.log('Pauseeee')}>Play</PlayButton> */}
        {/* <PlayButton message="Pause-message" onSmash={() => alert('Plause')}>Pause</PlayButton> */}
      {/* </div> */}

      {/* <Counter></Counter> */}

    </div>
  );
}

export default App;
