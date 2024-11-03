import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div>
      <div className="flex my-3">
             <img className="w-10 h-10 rounded-full"
            alt="user-icon"
            src="https://static.vecteezy.com/system/resources/previews/000/574/512/large_2x/vector-sign-of-user-icon.jpg"/>
             <p className="font-semibold">{name}</p>
             <p className="my-2">{message}</p>
             </div>
    </div>
  )
}

export default ChatMessage;
