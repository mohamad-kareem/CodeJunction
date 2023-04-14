import React from 'react'
const Parallax=({ backgroundImage, children }) => {
  return (
    <div className="parallax" style={{ backgroundImage: `url(${backgroundImage})` }}>
    {children}
  </div>

  )
}

export default Parallax
