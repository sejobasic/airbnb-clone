import React from 'react'
import logo from '../assets/airbnb.png'
import menu from '../assets/menu.png'

function Navbar() {
  return (
    <nav>
      <img className='nav-logo' src={logo} alt='airbnb logo icon' />
      <img className='nav-menu' src={menu} alt='navigation menu icon' />
    </nav>
  )
}

export default Navbar
