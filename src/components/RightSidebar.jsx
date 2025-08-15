import React, { useState } from 'react'
import assets, { imagesDummyData } from '../assets/assets'

const RightSidebar = ({ selectedUser }) => {
  const [activeTab, setActiveTab] = useState('media')

  const sharedFiles = [
    { name: 'Project_Proposal.pdf', size: '2.4 MB', type: 'pdf', date: '2 days ago' },
    { name: 'Design_Mockup.fig', size: '15.7 MB', type: 'figma', date: '1 week ago' },
    { name: 'Meeting_Notes.docx', size: '1.2 MB', type: 'doc', date: '2 weeks ago' },
  ]

  const sharedLinks = [
    { title: 'GitHub Repository', url: 'github.com/project', date: '3 days ago' },
    { title: 'Design System', url: 'figma.com/design', date: '1 week ago' },
    { title: 'API Documentation', url: 'docs.api.com', date: '2 weeks ago' },
  ]

  return selectedUser && (
    <div className="bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll max-md:hidden border-l border-stone-500">
      {/* Profile Section */}
      <div className="py-8 flex flex-col items-center gap-3 text-center border-b border-stone-500">
        <div className="relative">
          <img
            src={selectedUser?.profilePic || assets.avatar_icon}
            alt={`${selectedUser.fullName || 'User'} profile`}
            className="w-20 h-20 rounded-full border-4 border-violet-500"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-[#282142]"></div>
        </div>
        
        <div>
          <h1 className="text-xl font-bold text-white mb-1">
            {selectedUser.fullName}
          </h1>
          <p className="text-sm text-gray-400 mb-2">{selectedUser.bio}</p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs text-green-400 font-medium">Active now</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="p-3 bg-violet-500 hover:bg-violet-600 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
          <button className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
          <button className="p-3 bg-gray-600 hover:bg-gray-700 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-stone-500">
        <button
          onClick={() => setActiveTab('media')}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
            activeTab === 'media' 
              ? 'text-violet-400 border-b-2 border-violet-400' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Media
        </button>
        <button
          onClick={() => setActiveTab('files')}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
            activeTab === 'files' 
              ? 'text-violet-400 border-b-2 border-violet-400' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Files
        </button>
        <button
          onClick={() => setActiveTab('links')}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
            activeTab === 'links' 
              ? 'text-violet-400 border-b-2 border-violet-400' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Links
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex-1">
        {activeTab === 'media' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-white">Shared Media</h3>
              <span className="text-xs text-gray-400">{imagesDummyData.length} items</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {imagesDummyData.map((url, index) => (
                <div
                  key={index}
                  onClick={() => window.open(url)}
                  className="relative cursor-pointer rounded-lg overflow-hidden group hover:scale-105 transition-transform"
                >
                  <img 
                    src={url} 
                    alt={`media-${index}`} 
                    className="w-full h-20 object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'files' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-white">Shared Files</h3>
              <span className="text-xs text-gray-400">{sharedFiles.length} files</span>
            </div>
            <div className="space-y-3">
              {sharedFiles.map((file, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-violet-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{file.name}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>{file.size}</span>
                      <span>•</span>
                      <span>{file.date}</span>
                    </div>
                  </div>
                  <button className="p-1 hover:bg-white/10 rounded">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'links' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-white">Shared Links</h3>
              <span className="text-xs text-gray-400">{sharedLinks.length} links</span>
            </div>
            <div className="space-y-3">
              {sharedLinks.map((link, index) => (
                <div key={index} className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{link.title}</p>
                      <p className="text-xs text-gray-400 truncate">{link.url}</p>
                      <p className="text-xs text-gray-500 mt-1">{link.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Settings */}
      <div className="p-4 border-t border-stone-500">
        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors text-left">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
            <span className="text-sm text-white">Mute Notifications</span>
          </button>
          
          <button className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors text-left">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <span className="text-sm text-white">Clear Chat History</span>
          </button>
          
          <button className="w-full flex items-center gap-3 p-3 hover:bg-red-500/20 rounded-lg transition-colors text-left">
            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
            </svg>
            <span className="text-sm text-red-400">Block User</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar