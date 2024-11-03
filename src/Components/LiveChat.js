import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {

    const dispatch = useDispatch();

   const chatMessage = useSelector((store) => store.chat.messages);  

    useEffect(()=>{
       const i = setInterval(()=>{
         console.log("api polling");

         dispatch(addMessage({
            name: 'Sadaf Ansari',
            messages: 'Lorem ipsum dolor sit amit anus agah',
         }));
       },2000);

       return () => clearInterval(i);

    },[]);

    return (
        <div className=" w-[26rem] h-[470px] ml-2 p-2 border border-black rounded-lg bg-slate-100 overflow-y-scroll">
             {chatMessage.map((c, index) => (
                <ChatMessage key={index} 
                name={c.name} 
                message={c.messages}/>
             ))}
        </div>
    )
};
export default LiveChat;