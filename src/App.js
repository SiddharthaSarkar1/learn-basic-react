import { useState } from 'react';
import videosDB from "./data/data";
import "./App.css";
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';

function App() {
  console.log("Render App");
  const [videos, setVideos] = useState(videosDB);

  const addVideos = (video) => {
    setVideos([
      ...videos,
          {...video, id: videos.length+1}
    ]);
  }

  const deleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
    console.log(id);
  }
  
  return (
   <div className="App">

      <div>
        <AddVideo addVideos={addVideos}></AddVideo>
      </div>
      <VideoList deleteVideo={deleteVideo} videos={videos}></VideoList>
      
      {/* <div style={{clear: 'both'}}> */}
        {/* <PlayButton message="Play-message" onPlay={() => console.log('Playyyy')} onPause={() => console.log('Pauseeee')}>Play</PlayButton> */}
        {/* <PlayButton message="Pause-message" onSmash={() => alert('Plause')}>Pause</PlayButton> */}
      {/* </div> */}

      {/* <Counter></Counter> */}

    </div>
  );
}

export default App;
