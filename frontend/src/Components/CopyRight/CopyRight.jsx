import React from 'react'
import "./copyright.css"

const CopyRights = ({marginTop,paddingBottom}) => {

  const currentYear = new Date().getFullYear();

  return (
    <div className="copyrights" style={{marginTop,paddingBottom}}>
      <p>© {currentYear} CodeJunction B.V. All rights reserved.</p>
    </div>  )
}

export default CopyRights
