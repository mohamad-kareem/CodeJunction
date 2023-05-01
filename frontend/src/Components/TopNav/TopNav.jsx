import React from 'react'
import "./top.css"
const TopNav = ({title}) => {
  return (
    <div className="top-section">
        <div className="top-title">
            <h1 className='top-name'>{title}</h1>
        </div>
  </div>
  )
}

export default TopNav
