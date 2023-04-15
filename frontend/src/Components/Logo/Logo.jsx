import React from 'react'
import "./logo.css"
const Logo = ({ padding , borderBottom}) => {
    const LogoStyle = { padding , borderBottom};
  return (
    <div className='logo-container' style={LogoStyle}>
        <div className="logo">
            <span className='partLogo'>Code</span>Junction
        </div>
    </div>
  )
}

export default Logo
