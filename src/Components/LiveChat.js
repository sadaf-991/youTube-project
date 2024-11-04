import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMsg } from "../utils/helper";

const LiveChat = () => {

    const dispatch = useDispatch();
    const [livechat, setLivechat] = useState('');

   const chatMessage = useSelector((store) => store.chat.messages);  

    useEffect(()=>{
       const i = setInterval(()=>{
         
         dispatch(addMessage({
            name: generateRandomName(),
            messages: makeRandomMsg(20) + '❤️',
         }));
       },1500);

       return () => clearInterval(i);

    },[]);

    return (
      <>
        <div className="w-[26rem] h-[470px] ml-2 p-2 border border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
             {chatMessage.map((c, index) => (
                <ChatMessage key={index} 
                name={c.name} 
                message={c.messages}/>
             ))}
        </div>
        
        <form className="" onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
            name: "Sadaf Ansari",
            messages: livechat,
           })
         );
         setLivechat('');
        }}>
         <input className="pl-2 h-10 border border-none bg-gray-300 rounded-lg ml-2 w-80"
         type="text" value={livechat} onChange={(e)=> (
              setLivechat(e.target.value)
         )} /> 
         <button className="h-10 w-[87px] font-semibold mt-1 ml-1 rounded-lg bg-gray-300">
            Send</button>
        </form>
        </>
    )
};
export default LiveChat;