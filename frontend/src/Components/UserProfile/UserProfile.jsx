import React from 'react'
import "./userprofile.css"
import ProfileImage from '../ProfileImage/ProfileImage'
import InputForm2 from '../InputForm2/InputForm2'
const UserProfile = ({profile}) => {
  return (
    
    <div className="user-profile-container" style={{display:profile ? 'block' : 'none'}}>
      <div className="text">
        Edit Profile
      </div>
      <div>
      <ProfileImage/>
      <InputForm2/>
      </div>
    </div>
  )
}

export default UserProfile