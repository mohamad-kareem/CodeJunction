import React from 'react'
import "./logo.css"
const Logo = ({ padding }) => {
    const LogoStyle = { padding };
  return (
    <div className='logo-container' style={LogoStyle}>
        <div className="logo">
            <span className='partLogo'>Code</span>Junction
        </div>
    </div>
  )
}

export default Logo
