import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className="logo">Shoify</div>
            <div className="lists">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
            </div>
            <div className="btn">
                <button>Try Now</button>
            </div>
        </nav>
    </>
  )
}

export default Navbar