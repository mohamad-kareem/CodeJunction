import React from 'react'
import "./userprofile.css"
import ProfileImage from '../ProfileImage/ProfileImage'
import InputForm2 from '../InputForm2/InputForm2'
const UserProfile = ({profile}) => {
  return (
    
    <div className="user-profile-container">
      <div className='profile-image'  style={{display:profile ? 'block' : 'none'}}>
      <ProfileImage/>
      </div>
      <div className="profile-user">
        <InputForm2/>

        </div>
    </div>
  )
}

export default UserProfile
