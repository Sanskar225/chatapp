import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets'

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate login/signup
    navigate('/')
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-[url('/src/assets/bgImage.svg')] bg-contain flex items-center justify-center p-4">
      <div className="backdrop-blur-xl border-2 border-gray-600 rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <img src={assets.logo} alt="logo" className="mx-auto mb-4 max-w-32" />
          <h1 className="text-2xl font-bold text-white mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-400 text-sm">
            {isLogin ? 'Sign in to continue chatting' : 'Join our community today'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#282142] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors"
                required={!isLogin}
              />
            </div>
          )}
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#282142] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors"
              required
            />
          </div>
          
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#282142] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-400 to-violet-600 text-white py-3 rounded-lg font-medium hover:from-purple-500 hover:to-violet-700 transition-all duration-200 transform hover:scale-[1.02]"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-violet-400 hover:text-violet-300 ml-1 font-medium transition-colors"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center space-x-4">
          <div className="h-px bg-gray-600 flex-1"></div>
          <span className="text-gray-400 text-xs">OR</span>
          <div className="h-px bg-gray-600 flex-1"></div>
        </div>

        <button className="w-full mt-4 bg-[#282142] border border-gray-600 text-white py-3 rounded-lg font-medium hover:bg-[#3a2a5c] transition-colors">
          Continue as Guest
        </button>
      </div>
    </div>
  )
}

export default LoginPage