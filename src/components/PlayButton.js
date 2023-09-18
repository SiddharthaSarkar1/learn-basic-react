import React, {useState, memo} from 'react';
import './PlayButton.css';

const PlayButton = memo(function PlayButton({message, children, onPlay, onPause}){
  console.log("Render PlayButton");

    // let playing = false; //This is a wrong approach dont use this

    const [playing, setPlaying] = useState(false);

    const handleClick = () => {
        // console.log(message);
        // onSmash();

        if(playing) onPause();
        else onPlay();

        setPlaying(!playing);
    }

  return (
    <div>
    <button onClick={handleClick}>{children} : {playing?'⏸️':'⏯️'}</button> 
    </div>
  )
});

export default PlayButton