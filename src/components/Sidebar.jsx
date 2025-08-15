import React, { useState } from 'react'
import assets, { userDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('chats')

  const filteredUsers = userDummyData.filter(user =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getLastMessage = (userId) => {
    const messages = [
      "Hey, how are you doing?",
      "Thanks for the help yesterday!",
      "Are we still on for the meeting?",
      "Check out this cool project I found",
      "Let's catch up soon!"
    ]
    return messages[Math.floor(Math.random() * messages.length)]
  }

  const getMessageTime = (index) => {
    const times = ['2m', '5m', '1h', '3h', '1d']
    return times[index % times.length]
  }

  return (
    <div className={`bg-[#8185B2]/10 h-full rounded-r-xl overflow-hidden text-white ${selectedUser ? 'max-md:hidden' : ''}`}>
      {/* Header */}
      <div className='p-5 border-b border-stone-500'>
        <div className='flex justify-between items-center mb-4'>
          <img src={assets.logo} alt="logo" className='max-w-32' />
          <div className='relative group'>
            <button className='p-2 hover:bg-white/10 rounded-full transition-colors'>
              <img src={assets.menu_icon} alt="menu" className='max-h-5' />
            </button>
            <div className='absolute top-full right-0 z-20 w-40 p-3 rounded-lg bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block shadow-xl'>
              <button 
                onClick={() => navigate('/profile')} 
                className='w-full text-left p-2 hover:bg-white/10 rounded text-sm transition-colors'
              >
                Edit Profile
              </button>
              <button className='w-full text-left p-2 hover:bg-white/10 rounded text-sm transition-colors'>
                Settings
              </button>
              <hr className='my-2 border-gray-600' />
              <button 
                onClick={() => navigate('/login')}
                className='w-full text-left p-2 hover:bg-red-500/20 text-red-400 rounded text-sm transition-colors'
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className='bg-[#282142] rounded-full flex items-center gap-3 py-3 px-4 border border-gray-600 focus-within:border-violet-500 transition-colors'>
          <img src={assets.search_icon} alt="search" className='w-4 opacity-70' />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='bg-transparent border-none outline-none text-white text-sm placeholder-gray-400 flex-1'
            placeholder='Search conversations...'
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className='text-gray-400 hover:text-white transition-colors'
            >
              ×
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className='flex mt-4 bg-[#282142] rounded-lg p-1'>
          <button
            onClick={() => setActiveTab('chats')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'chats' 
                ? 'bg-violet-500 text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Chats
          </button>
          <button
            onClick={() => setActiveTab('groups')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'groups' 
                ? 'bg-violet-500 text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Groups
          </button>
        </div>
      </div>

      {/* User List */}
      <div className='flex flex-col overflow-y-scroll h-[calc(100%-200px)]'>
        {activeTab === 'chats' ? (
          <>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedUser(user)}
                  className={`relative flex items-center gap-3 p-4 hover:bg-white/5 cursor-pointer transition-all duration-200 border-b border-stone-500/30 ${
                    selectedUser?._id === user._id ? 'bg-violet-500/20 border-l-4 border-l-violet-500' : ''
                  }`}
                >
                  <div className='relative'>
                    <img
                      src={user?.profilePic || assets.avatar_icon}
                      alt=""
                      className='w-12 h-12 rounded-full border-2 border-transparent hover:border-violet-500 transition-colors'
                    />
                    {index < 3 && (
                      <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#282142]'></div>
                    )}
                  </div>
                  
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-center justify-between mb-1'>
                      <p className='font-medium text-white truncate'>{user.fullName}</p>
                      <span className='text-xs text-gray-400'>{getMessageTime(index)}</span>
                    </div>
                    <p className='text-sm text-gray-400 truncate'>{getLastMessage(user._id)}</p>
                  </div>

                  {index > 2 && (
                    <div className='flex flex-col items-end gap-1'>
                      <div className='w-5 h-5 bg-violet-500 rounded-full flex items-center justify-center'>
                        <span className='text-xs text-white font-bold'>{index}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className='flex flex-col items-center justify-center p-8 text-gray-400'>
                <svg className="w-12 h-12 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className='text-sm'>No conversations found</p>
                <p className='text-xs mt-1'>Try a different search term</p>
              </div>
            )}
          </>
        ) : (
          <div className='flex flex-col items-center justify-center p-8 text-gray-400'>
            <svg className="w-12 h-12 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className='text-sm'>No groups yet</p>
            <p className='text-xs mt-1'>Create or join a group to get started</p>
            <button className='mt-4 px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white text-sm rounded-lg transition-colors'>
              Create Group
            </button>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className='p-4 border-t border-stone-500'>
        <div className='flex items-center gap-3'>
          <img src={assets.avatar_icon} alt="profile" className='w-10 h-10 rounded-full border-2 border-violet-500' />
          <div className='flex-1'>
            <p className='text-white font-medium'>You</p>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-green-500'></div>
              <span className='text-xs text-green-400'>Online</span>
            </div>
          </div>
          <button 
            onClick={() => navigate('/profile')}
            className='p-2 hover:bg-white/10 rounded-full transition-colors'
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar