import { useState } from 'react';
import Video from "./components/Video";
import videosDB from "./data/data";
import "./App.css";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";

function App() {
  console.log("Render App");
  const [videos, setVideos] = useState(videosDB);
  
  return (
   <div className="App">

      <div>
        <button onClick={()=>{
           setVideos( [...videos,{ 
            id:videos.length+1,
            title: 'Demo JS tutorial',
            views: '1M',
            time: '1 month ago',
            channel: 'Coder Dost',
            verified: true
          }]);
        }}>Add Video</button>
      </div>

      <div>Videos</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          >
          <PlayButton 
          onPlay={() => console.log('Playing..'+ video.title)} 
          onPause={() => console.log('Paused..'+ video.title)}>
          {video.title}
          </PlayButton>

        </Video>
      ))}

      <div style={{clear: 'both'}}>
        {/* <PlayButton message="Play-message" onPlay={() => console.log('Playyyy')} onPause={() => console.log('Pauseeee')}>Play</PlayButton> */}
        {/* <PlayButton message="Pause-message" onSmash={() => alert('Plause')}>Pause</PlayButton> */}
      </div>

      <Counter></Counter>

    </div>
  );
}

export default App;
