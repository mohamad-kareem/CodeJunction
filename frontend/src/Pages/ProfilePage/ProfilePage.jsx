import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import UserProfile from '../../Components/UserProfile/UserProfile'
import "./profilepage.css"
const ProfilePage = () => {
  return (
    <div className='profile-wrapper'>
        <div className="sidebar-wrapper">
            <SideBar/>
        </div>
        <div className="profile">
            <UserProfile/>
        </div>
      
    </div>
  )
}

export default ProfilePage
