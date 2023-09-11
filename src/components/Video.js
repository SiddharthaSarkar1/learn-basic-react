import React from "react";
import './Video.css';

const Video = ({title,id,channel="hello Channel",views,time,verified}) => {
    // console.log(props);
    const bg = 'dark';
  return (
    <>
    <div className='container'>
    <div className="pic">
    <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
    </div>
    <div className="title">{title}</div>
    <div className="channel">{channel} {verified && '✅'} </div>
    <div className="views">
      {views} views <span>.</span> {time}
    </div>
    </div>
    </>
  );
};

export default Video;
