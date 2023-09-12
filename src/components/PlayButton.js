import React from 'react';
import './PlayButton.css';

const PlayButton = ({message, children, onPlay, onPause}) => {

    let playing = false; //This is a wrong approach dont use this

    const handleClick = () => {
        // console.log(message);
        // onSmash();

        if(playing) onPause();
        else onPlay();

        playing = !playing;
    }

  return (
    <div>
    <button onClick={handleClick}>{children}</button> 
    </div>
  )
}

export default PlayButton