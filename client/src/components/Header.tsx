import React from 'react'


const Header = () => {
  const date = new Date()
  const options = {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
  }

  const formattedDate = date.toLocaleDateString('en-US', options)
  return <div className='w-full h-30 bg-gray-700 text-lg text-center text-white p-2 pb-4'>{formattedDate}</div>
}

export default Header
