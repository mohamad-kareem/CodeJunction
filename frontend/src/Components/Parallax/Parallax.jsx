import React from 'react'
const Parallax=({ backgroundImage }) => {
  return (
    <div className="parallax" style={{ backgroundImage: `url(${backgroundImage})` }}>
    
  </div>

  )
}

export default Parallax
