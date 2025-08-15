import React, { useRef, useEffect, useState } from 'react'
import assets, { messagesDummyData } from '../assets/assets'
import { formatMessageTime } from '../lib/utils'

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  const scrollEnd = useRef(null)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState(messagesDummyData)
  const [isTyping, setIsTyping] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  const emojis = ['😀', '😂', '😍', '🥰', '😎', '🤔', '👍', '❤️', '🔥', '✨', '🎉', '💯']

  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        _id: Date.now().toString(),
        senderId: '680f5116f10f3cd28382ed02',
        receiverId: selectedUser._id,
        text: message,
        seen: false,
        createdAt: new Date().toISOString()
      }
      setMessages([...messages, newMessage])
      setMessage('')
      
      // Simulate typing indicator
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        const replyMessage = {
          _id: (Date.now() + 1).toString(),
          senderId: selectedUser._id,
          receiverId: '680f5116f10f3cd28382ed02',
          text: "Thanks for your message! 😊",
          seen: false,
          createdAt: new Date().toISOString()
        }
        setMessages(prev => [...prev, replyMessage])
      }, 2000)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const addEmoji = (emoji) => {
    setMessage(prev => prev + emoji)
    setShowEmojiPicker(false)
  }

  return selectedUser ? (
    <div className='h-full overflow relative backdrop-blur-lg'>
      {/* Header Section */}
      <div className='flex items-center gap-3 py-4 px-4 border-b border-stone-500 bg-black/20'>
        <img src={selectedUser.profilePic} alt="" className='w-10 h-10 rounded-full border-2 border-violet-500' />
        <div className='flex-1'>
          <p className='text-lg text-white font-medium flex items-center gap-2'>
            {selectedUser.fullName}
            <span className='w-2 h-2 rounded-full bg-green-500'></span>
          </p>
          <p className='text-xs text-gray-400'>
            {isTyping ? 'typing...' : 'last seen recently'}
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <button className='p-2 hover:bg-white/10 rounded-full transition-colors'>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
          <button className='p-2 hover:bg-white/10 rounded-full transition-colors'>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
          <img
            onClick={() => setSelectedUser(null)}
            src={assets.arrow_icon}
            alt=""
            className='md:hidden max-w-6 cursor-pointer hover:opacity-70 transition-opacity'
          />
          <img src={assets.help_icon} alt="" className='max-md:hidden max-w-5 cursor-pointer hover:opacity-70 transition-opacity' />
        </div>
      </div>

      {/* Messages Section */}
      <div className='flex flex-col h-[calc(100%-140px)] overflow-y-scroll p-4 space-y-4'>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-3 ${
              msg.senderId === '680f5116f10f3cd28382ed02'
                ? 'flex-row-reverse'
                : ''
            }`}
          >
            <img
              src={
                msg.senderId === '680f5116f10f3cd28382ed02'
                  ? assets.avatar_icon
                  : selectedUser.profilePic
              }
              alt=""
              className='w-8 h-8 rounded-full flex-shrink-0'
            />
            <div className={`flex flex-col max-w-[70%] ${
              msg.senderId === '680f5116f10f3cd28382ed02' ? 'items-end' : 'items-start'
            }`}>
              {msg.image ? (
                <img 
                  src={msg.image} 
                  alt='' 
                  className='max-w-[250px] rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform' 
                />
              ) : (
                <div
                  className={`p-3 rounded-2xl shadow-lg ${
                    msg.senderId === '680f5116f10f3cd28382ed02'
                      ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-br-md'
                      : 'bg-white/10 text-white rounded-bl-md backdrop-blur-sm'
                  }`}
                >
                  <p className='text-sm leading-relaxed break-words'>{msg.text}</p>
                </div>
              )}
              <div className='flex items-center gap-1 mt-1'>
                <p className='text-xs text-gray-400'>{formatMessageTime(msg.createdAt)}</p>
                {msg.senderId === '680f5116f10f3cd28382ed02' && (
                  <svg className={`w-3 h-3 ${msg.seen ? 'text-blue-400' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-end gap-3">
            <img src={selectedUser.profilePic} alt="" className='w-8 h-8 rounded-full' />
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl rounded-bl-md">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={scrollEnd}></div>
      </div>

      {/* Input Section */}
      <div className='absolute bottom-0 left-0 right-0 p-4 bg-black/20 backdrop-blur-sm border-t border-stone-500'>
        {showEmojiPicker && (
          <div className='mb-3 p-3 bg-[#282142] rounded-lg border border-gray-600'>
            <div className='grid grid-cols-6 gap-2'>
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => addEmoji(emoji)}
                  className='p-2 hover:bg-white/10 rounded-lg transition-colors text-lg'
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className='flex items-end gap-3'>
          <div className='flex-1 flex items-center bg-[#282142] border border-gray-600 rounded-2xl px-4 py-2'>
            <button
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className='p-2 hover:bg-white/10 rounded-full transition-colors mr-2'
            >
              <span className='text-lg'>😊</span>
            </button>
            
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder='Type a message...'
              className='flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 resize-none max-h-20 py-2'
              rows={1}
            />
            
            <input type="file" id='image' accept='image/png,image/jpeg' hidden />
            <label htmlFor="image" className='p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer ml-2'>
              <img src={assets.gallery_icon} alt="" className='w-5' />
            </label>
          </div>
          
          <button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className='p-3 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition-all duration-200 transform hover:scale-105'
          >
            <img src={assets.send_button} alt="" className='w-5' />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center gap-4 text-gray-500 bg-white/5 max-md:hidden h-full'>
      <div className='text-center'>
        <img src={assets.logo_icon} className='max-w-20 mx-auto mb-4 opacity-50' alt="" />
        <h2 className='text-2xl font-bold text-white mb-2'>Welcome to CODEMATE</h2>
        <p className='text-lg font-medium text-gray-300 mb-4'>Chat anytime, anywhere</p>
        <p className='text-sm text-gray-400 max-w-md'>
          Select a conversation from the sidebar to start chatting with your friends and colleagues.
        </p>
      </div>
      <div className='flex items-center gap-4 mt-8'>
        <div className='flex items-center gap-2 text-green-400'>
          <div className='w-2 h-2 rounded-full bg-green-500'></div>
          <span className='text-sm'>Online</span>
        </div>
        <div className='flex items-center gap-2 text-gray-400'>
          <div className='w-2 h-2 rounded-full bg-gray-500'></div>
          <span className='text-sm'>Secure</span>
        </div>
        <div className='flex items-center gap-2 text-blue-400'>
          <div className='w-2 h-2 rounded-full bg-blue-500'></div>
          <span className='text-sm'>Fast</span>
        </div>
      </div>
    </div>
  )
}

export default ChatContainer