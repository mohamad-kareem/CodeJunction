import React from 'react'
import "./userprofile.css"
import ProfileImage from '../ProfileImage/ProfileImage'
const UserProfile = ({profile}) => {
  return (
    <div className='profile-image'  style={{display:profile ? 'block' : 'none'}}>
     <ProfileImage/>
    </div>
  )
}

export default UserProfile
