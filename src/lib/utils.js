export function formatMessageTime(date) {
  const messageDate = new Date(date)
  const now = new Date()
  const diffInHours = (now - messageDate) / (1000 * 60 * 60)
  
  if (diffInHours < 24) {
    return messageDate.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    })
  } else if (diffInHours < 48) {
    return 'Yesterday'
  } else if (diffInHours < 168) { // 7 days
    return messageDate.toLocaleDateString([], { weekday: 'short' })
  } else {
    return messageDate.toLocaleDateString([], { 
      month: 'short', 
      day: 'numeric' 
    })
  }
}

export function formatLastSeen(date) {
  const lastSeenDate = new Date(date)
  const now = new Date()
  const diffInMinutes = (now - lastSeenDate) / (1000 * 60)
  
  if (diffInMinutes < 1) {
    return 'Active now'
  } else if (diffInMinutes < 60) {
    return `${Math.floor(diffInMinutes)}m ago`
  } else if (diffInMinutes < 1440) { // 24 hours
    return `${Math.floor(diffInMinutes / 60)}h ago`
  } else {
    return `${Math.floor(diffInMinutes / 1440)}d ago`
  }
}

export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

export function truncateText(text, maxLength = 50) {
  if (text.length <= maxLength) return text
  return text.substr(0, maxLength) + '...'
}

export function getFileIcon(fileType) {
  const icons = {
    pdf: '📄',
    doc: '📝',
    docx: '📝',
    xls: '📊',
    xlsx: '📊',
    ppt: '📊',
    pptx: '📊',
    txt: '📄',
    zip: '🗜️',
    rar: '🗜️',
    default: '📎'
  }
  
  return icons[fileType.toLowerCase()] || icons.default
}