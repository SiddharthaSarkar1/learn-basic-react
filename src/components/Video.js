import React from "react";
import './Video.css';

const Video = ({title, bgColor}) => {
    // console.log(props);
    const bg = 'dark';
  return (
    <>
    <img src="https://placebear.com/640/360" alt="" />
    <div className={bg} style={{ backgroundColor: bgColor }}>{title}</div>
</>
  );
};

export default Video;
