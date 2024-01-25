import React from 'react'

function Header() {
  return (
    <div className='bg-gradient-to-r from-red-500 to-black text-white flex justify-between h-16 items-center px-8'>
      <div className='flex items-center space-x-4'>
        <div className='text-3xl font-bold'>Awesome</div>
      </div>
      <div className='text-2xl font-semibold'>Greetings!</div>
    </div>
  )
}


export default Header
