import React from 'react'

const ProfileImage = () => {
  return (
    <div className='image-wrapper'>
        <div className="inner-image-container">
            <input 
            accept='image/*'
            type='file'
             />
        </div>
      
    </div>
  )
}

export default ProfileImage
