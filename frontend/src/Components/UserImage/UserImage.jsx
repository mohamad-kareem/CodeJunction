import React from 'react'

const UserImage = () => {
    const handleImageChange = (e) => {
        
    }
  return (
    <>
    <label htmlFor="image-input">
           <img src={url || image} className={`pic ${className}`} alt="empty-pic" />
    </label>
         <input
           id="image-input"
           type="file"
           onChange={handleImageChange}
           style={{ display: 'none' }}
         />
 </>
  )
}

export default UserImage
