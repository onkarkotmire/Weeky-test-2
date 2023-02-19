import './Navbar.css'

import React from 'react'

export default function Navbar() {
  return (

    <div className='Nav-box-main'>
    <div className="nav-box-1">
    <div className='contact-box'>
    <div className="mobileno">
    <i class="fa-solid fa-phone-flip"></i>
    <p>0509418224</p>
    </div>
    <div className="email">
    <i class="fa-solid fa-envelope"></i>
    <p>enquiry@urbansciencemep.com</p>
    </div>
    </div>
    </div>
    <div className='Nav-box-2'>
      <img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="error"  className='icon-image'/>
      <div className='item-list'>
        <ul className='ul'>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
      </div>
      <button>Enquire Now</button>
      </div>
    </div>
  )
}
