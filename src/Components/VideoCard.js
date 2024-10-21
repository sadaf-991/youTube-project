

const VideoCard = ({info}) => {


const {snippet, statistics} = info;
const { channelTitle, thumbnails, title } = snippet;
const {likeCount, viewCount} = statistics;

    return (
       
        <div className="p-2 m-2 w-[15rem] shadow-lg rounded-lg">
             
            <img className="rounded-lg" 
            alt="video" src={thumbnails.high.url}/>
           <ul>
           <li className="font-bold">{title}</li>
           <li className="font-semibold">{channelTitle}</li> 
            <li>Like {likeCount}</li> 
            <li>Views {viewCount}</li> 
            
           </ul>
           
        </div>
       
    )
}
export default VideoCard;