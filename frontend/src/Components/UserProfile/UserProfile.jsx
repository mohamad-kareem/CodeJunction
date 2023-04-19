import React from 'react'
import "./userprofile.css"
import ProfileImage from '../ProfileImage/ProfileImage'
import InputForm from '../InputForm/InputForm'
const UserProfile = ({profile}) => {
  return (
    
    <div className="user-profile-container">
      <div className='profile-image'  style={{display:profile ? 'block' : 'none'}}>
      <ProfileImage/>
      </div>
      <div className="profile-user">
          <InputForm/>
          <InputForm/>
          <InputForm/>
          <InputForm/>

        </div>
    </div>
  )
}

export default UserProfile
