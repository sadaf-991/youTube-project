import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

const [video, setVideo] = useState([]);  

 useEffect(() => {
  fetchVideos();
 }, []);
 
 const fetchVideos = async () => {
  
     const data = await fetch(YOUTUBE_VIDEOS_API);
     const json = await data.json();
     setVideo(json.items);
         
 };

  return (
    <div className='flex flex-wrap'>
      {video.map((Vid) => (
        <Link  key={Vid.id} to={"/watch?v=" + Vid.id}>
       <VideoCard info={Vid} />
       </Link>
      ))
    
      }
    </div>
  );
};

export default VideoContainer
