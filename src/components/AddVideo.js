import React, {useState, useEffect, useRef, useContext} from 'react';
import VideoDispatchContext from '../context/VideoDispatchContext';
import useVideoDispatch from '../hooks/VideoDispatch';
import './AddVideo.css';

const initialVideoState = {
    time: '1 month ago',
    channel: 'Hello Dost',
    verified: true,
    title: '',
    views: ''
}



const AddVideo = ({editableVideo}) => {
    // console.log("render AddVideo")
    const [video, setVideo] = useState(initialVideoState);
    // const dispatch = useContext(VideoDispatchContext);//now we are able to access globally using context


    const dispatch = useVideoDispatch(); //Custom hook we have created

    let inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();//This is to prevent default form submitting functionality

        if(editableVideo){
            dispatch({type:'UPDATE', payload: video});
        }else{
            dispatch({type:'ADD', payload: video});
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
        //using useRef hook
        // inputRef.current.value = "DEMO TEST";
        // inputRef.current.focus();

        inputRef.current.placeholder = "";
        "Type here".split('').forEach((char, i) => {
            setTimeout(() => {
                inputRef.current.placeholder = inputRef.current.placeholder + char;
            }, 1000 * i);
        })

    },[editableVideo]);
    

  return (
    <form>
        <input ref={inputRef} type="text" name="title" onChange={handleChange} placeholder='title' value={video.title} />
        <input type="text" name="views" onChange={handleChange} placeholder='views' value={video.views} />
        <button onClick={handleSubmit}
        >
        {editableVideo?'Edit':'Add'} Video
        </button>
    </form>
  )
}

export default AddVideo;