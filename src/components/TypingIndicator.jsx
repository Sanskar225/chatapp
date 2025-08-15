import React from 'react'

const TypingIndicator = ({ user }) => {
  return (
    <div className="flex items-end gap-3">
      <img src={user.profilePic} alt="" className='w-8 h-8 rounded-full' />
      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl rounded-bl-md">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  )
}

export default TypingIndicator