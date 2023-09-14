import React, {useState} from 'react';
import './AddVideo.css';

const AddVideo = ({addVideos}) => {
    console.log("render AddVideo")

    const initialVideoState = {
        time: '1 month ago',
        channel: 'Hello Dost',
        verified: true,
        title: '',
        views: ''
    }

    const [video, setVideo] = useState({
        time: '1 month ago',
        channel: 'Hello Dost',
        verified: true,
        title: '',
        views: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();//This is to prevent default form submitting functionality
        addVideos(video);
        // console.log(video);
        setVideo(initialVideoState);
    }

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        setVideo({...video,
            [e.target.name] : e.target.value
        })
        // console.log(video);
    }

  return (
    <form>
        <input type="text" name="title" onChange={handleChange} placeholder='title' value={video.title} />
        <input type="text" name="views" onChange={handleChange} placeholder='views' value={video.views} />
        <button onClick={handleSubmit}
        // <button onClick={()=>{
        //    setVideos( [...videos,{ 
        //     id:videos.length+1,
        //     title: 'Demo JS tutorial',
        //     views: '1M',
        //     time: '1 month ago',
        //     channel: 'Hello Dost',
        //     verified: true
        //   }]);
        // }}
        >
        Add Video
        </button>
    </form>
  )
}

export default AddVideo;