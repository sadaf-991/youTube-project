import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div>
      <div className="flex my-3">
             <img className="w-10 h-10 rounded-full"
            alt="user-icon"
            src="https://static.vecteezy.com/system/resources/previews/000/574/512/large_2x/vector-sign-of-user-icon.jpg"/>
             <div className='flex flex-row space-x-2'>
             <p className="font-semibold">{name}</p>
             <p>{message}</p>
             </div>
             </div>
    </div>
  )
}

export default ChatMessage;
