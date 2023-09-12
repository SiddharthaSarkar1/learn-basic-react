import Video from "./components/Video";
import videos from "./data/data";
import "./App.css";
import PlayButton from "./components/PlayButton";

function App() {
  return (
   <div className="App">
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

    </div>
  );
}

export default App;
