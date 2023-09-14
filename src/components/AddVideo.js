import React, {useState, useEffect} from 'react';
import './AddVideo.css';

const AddVideo = ({addVideos, updateVideo, editableVideo}) => {
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

        if(editableVideo){
            updateVideo(video);
        }else{
            addVideos(video);
        }
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

    useEffect(() => {
        if(editableVideo){
            setVideo(editableVideo);
        }
        console.log('useEffect');
    },[editableVideo]);
    

  return (
    <form>
        <input type="text" name="title" onChange={handleChange} placeholder='title' value={video.title} />
        <input type="text" name="views" onChange={handleChange} placeholder='views' value={video.views} />
        <button onClick={handleSubmit}
        >
        {editableVideo?'Edit':'Add'} Video
        </button>
    </form>
  )
}

export default AddVideo;