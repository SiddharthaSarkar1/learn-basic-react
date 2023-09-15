import React from "react";
import './Video.css';

const Video = ({title,id,channel="hello Channel",views,time,verified,children, dispatch, editVideo}) => {
  console.log("Render Video");
    // console.log(props);
    // console.log(children);
    const bg = 'dark';
  return (
    <>
    <div className='container'>
    <button className="close" onClick={() => dispatch({type:'DELETE', payload: id})}>X</button>
    <button className="edit" onClick={() => editVideo(id)}>Edit</button>
    <div className="pic">
    <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
    </div>
    <div className="title">{title}</div>
    <div className="channel">{channel} {verified && '✅'} </div>
    <div className="views">
      {views} views <span>.</span> {time}
    </div>
    <div>
      {children}
    </div>
    </div>
    </>
  );
};

export default Video;
