import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets'

const ProfilePage = () => {
  const navigate = useNavigate()
  const [profileData, setProfileData] = useState({
    fullName: 'Martin Johnson',
    email: 'martin@example.com',
    bio: 'Hi Everyone, I am Using CODEMATE',
    status: 'online'
  })
  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {
    setIsEditing(false)
    // Save profile data logic here
  }

  return (
    <div className="min-h-screen bg-[url('/src/assets/bgImage.svg')] bg-contain p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="backdrop-blur-xl border-2 border-gray-600 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-white hover:text-violet-400 transition-colors"
            >
              <img src={assets.arrow_icon} alt="back" className="w-5 rotate-180" />
              <span>Back to Chat</span>
            </button>
            <h1 className="text-xl font-bold text-white">Profile Settings</h1>
            <div></div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="backdrop-blur-xl border-2 border-gray-600 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <img
                src={assets.profile_martin}
                alt="profile"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-violet-500"
              />
              <button className="absolute bottom-2 right-2 bg-violet-500 hover:bg-violet-600 text-white p-2 rounded-full transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-green-400 text-sm font-medium">Online</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#282142] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors"
                />
              ) : (
                <p className="text-white text-lg">{profileData.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#282142] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors"
                />
              ) : (
                <p className="text-white">{profileData.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Bio</label>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 bg-[#282142] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors resize-none"
                />
              ) : (
                <p className="text-gray-300">{profileData.bio}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Status</label>
              <select
                name="status"
                value={profileData.status}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full p-3 bg-[#282142] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors disabled:opacity-50"
              >
                <option value="online">🟢 Online</option>
                <option value="away">🟡 Away</option>
                <option value="busy">🔴 Busy</option>
                <option value="offline">⚫ Offline</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="flex-1 bg-gradient-to-r from-purple-400 to-violet-600 text-white py-3 rounded-lg font-medium hover:from-purple-500 hover:to-violet-700 transition-all duration-200"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="flex-1 bg-gradient-to-r from-purple-400 to-violet-600 text-white py-3 rounded-lg font-medium hover:from-purple-500 hover:to-violet-700 transition-all duration-200"
              >
                Edit Profile
              </button>
            )}
          </div>

          {/* Additional Settings */}
          <div className="mt-8 pt-6 border-t border-gray-600">
            <h3 className="text-white font-medium mb-4">Privacy & Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Show online status</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Read receipts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-500"></div>
                </label>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate('/login')}
            className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage