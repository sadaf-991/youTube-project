import { useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";


const WatchPage = () => {

const [searchParams]  = useSearchParams();


const dispatch = useDispatch();
useEffect(() => {
        dispatch(closeMenu());
    },[]);

    return (
        <div className="flex flex-col">
           <div className="flex mt-6 ml-6">
           <iframe className="rounded-lg"
           width="900" 
           height="470" 
           src={"https://www.youtube.com/embed/" + searchParams.get("v")}
           title="YouTube video player" 
           frameBorder="0" 
           allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerPolicy="strict-origin-when-cross-origin" 
           ></iframe>
           <div>
            <LiveChat />
            </div>
           </div> 
           <CommentContainer />
       </div>
    )
};
export default WatchPage;