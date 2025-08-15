import React from 'react'

const StatusIndicator = ({ status = 'online', size = 'sm' }) => {
  const sizeClasses = {
    xs: 'w-2 h-2',
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  }

  const statusColors = {
    online: 'bg-green-500',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
    offline: 'bg-gray-500'
  }

  return (
    <div className={`${sizeClasses[size]} ${statusColors[status]} rounded-full border-2 border-[#282142]`}></div>
  )
}

export default StatusIndicator