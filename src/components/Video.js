import React, { useContext, useEffect } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";
import useVideoDispatch from "../hooks/VideoDispatch";
import './Video.css';

const Video = ({title,id,channel="hello Channel",views,time,verified,children, editVideo}) => {
  // console.log("Render Video");

  // const dispatch = useContext(VideoDispatchContext);
  const dispatch = useVideoDispatch();

  useEffect(() => {
    const idx = setInterval(() => {
      console.log("Video playing " + id);
    }, 3000)

    return () => {
      clearInterval(idx);
    }
  }, [id])
  

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
