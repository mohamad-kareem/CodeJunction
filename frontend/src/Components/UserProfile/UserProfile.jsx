import React from 'react'
import "./userprofile.css"
import ProfileImage from '../ProfileImage/ProfileImage'
const UserProfile = ({profile}) => {
  return (
    
    <div className="user-profile-container">
      <div className='profile-image'  style={{display:profile ? 'block' : 'none'}}>
      <ProfileImage/>
      </div>
      <div className="profile-user">
        

        </div>
    </div>
  )
}

export default UserProfile
