import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <h1>My Blog</h1>
        <div className='links'>
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <a href='/'>New Blog</a>
        </div>
    </div>
  )
}

export default Navbar