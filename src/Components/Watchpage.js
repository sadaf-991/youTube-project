import { useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {

const [searchParams]  = useSearchParams();
console.log(searchParams.get("v"));  

const dispatch = useDispatch();
useEffect(() => {
        dispatch(closeMenu());
    },[]);

    return (
        <div>
           <div className="mt-6 ml-6 ">
           <iframe className="rounded-lg"
           width="900" 
           height="470" 
           src={"https://www.youtube.com/embed/" + searchParams.get("v")}
           title="YouTube video player" 
           frameBorder="0" 
           allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerPolicy="strict-origin-when-cross-origin" 
           ></iframe>
           </div> 
        </div>
    )
}
export default WatchPage;