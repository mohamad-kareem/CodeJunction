import React from 'react'

const InnerDrop = ({Heading,content}) => {
  return (
   <div className="container">
     <div className="drop">
       <div className="content">
         <h2>{Heading}</h2>
         <p>{content}</p>
       </div>
     </div>
   </div>
  )
}

export default InnerDrop
