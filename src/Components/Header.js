import { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {

const [searchInput, setSearchInput] = useState("");
const [suggestions, setSuggestions] = useState([]);
const [showFocus, setShowFocus] = useState(false);

const cache = useSelector((store) => store.search);
const dispatch = useDispatch();

useEffect(() => {
const timer = setTimeout(() => {

 if(cache[searchInput]){
  setSuggestions(cache[searchInput])
}else{
  getSuggestions();
}
},200);

return () => {
  clearTimeout(timer)
};
},[searchInput]);

const getSuggestions = async () => {
  
  const data = await fetch(YOUTUBE_SEARCH_API + searchInput);
  const json = await data.json();
 setSuggestions(json[1]);

 // update chache
 dispatch(cacheResults({
  [searchInput]: json[1],
 }));
};



const toggleMenuHandler = () => {
    dispatch(toggleMenu());
};



    return(
        <div className="flex justify-between h-16 shadow-lg">
          <div className="flex">
            
             
            <img 
            onClick={() => toggleMenuHandler()}
            className="w-12 cursor-pointer"
            alt="humburger" 
            src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"/>
           
            
            
            <a href='/'>
            <img className="w-32 ml-1" 
            alt="youtube-icon"
            src="https://logolook.net/wp-content/uploads/2021/06/Youtube-Logo-2005.png"/>
            </a>
          </div>
          <div className="mt-2">
            <input className=" pl-2 rounded-l-full border border-gray-400 w-[40rem] h-10" 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => setShowFocus(true)}
            onBlur={() => setShowFocus(false)}
            type="text"/>
            <button className="bg-gray-200 border border-gray-400 h-10 w-16 rounded-r-full">
              🔍</button>
              <div className="bg-white w-[40rem] list-none rounded-lg absolute">
              <ul>
                { showFocus && (
                  suggestions.map((s) => (
                    <li key={s} className="shadow-sm hover:bg-gray-200 my-3 mx-2">
                      {s}</li>
                  ))
                )}
              
                            </ul>
              </div>
          </div>
          <div className="pr-9">
            <img className="w-16 "
            alt="user-icon"
            src="https://static.vecteezy.com/system/resources/previews/000/574/512/large_2x/vector-sign-of-user-icon.jpg"/>
            </div>
        </div>
    )
}
export default Header;