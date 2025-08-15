import React from 'react'
import { formatMessageTime } from '../lib/utils'

const MessageBubble = ({ message, isOwn, senderAvatar, onImageClick }) => {
  return (
    <div className={`flex items-end gap-3 ${isOwn ? 'flex-row-reverse' : ''}`}>
      <img
        src={senderAvatar}
        alt="avatar"
        className='w-8 h-8 rounded-full flex-shrink-0'
      />
      <div className={`flex flex-col max-w-[70%] ${isOwn ? 'items-end' : 'items-start'}`}>
        {message.image ? (
          <img 
            src={message.image} 
            alt='shared image' 
            className='max-w-[250px] rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform' 
            onClick={() => onImageClick && onImageClick(message.image)}
          />
        ) : (
          <div
            className={`p-3 rounded-2xl shadow-lg ${
              isOwn
                ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-br-md'
                : 'bg-white/10 text-white rounded-bl-md backdrop-blur-sm'
            }`}
          >
            <p className='text-sm leading-relaxed break-words'>{message.text}</p>
          </div>
        )}
        <div className='flex items-center gap-1 mt-1'>
          <p className='text-xs text-gray-400'>{formatMessageTime(message.createdAt)}</p>
          {isOwn && (
            <svg className={`w-3 h-3 ${message.seen ? 'text-blue-400' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
    </div>
  )
}

export default MessageBubble