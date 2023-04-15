import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import "./dashboard.css"
import Widget from '../../Components/Widget/Widget'
const DashBoard = () => {
  return (
    
    <div className='dashboard-wrapper'>
   
       <div className='sidebar-wrapper'>
          <SideBar/>
       </div>
       <div className='widget-container'>
        <Widget/>
        <Widget/>
        <Widget/>
        <Widget/>
       </div>
    </div>
   
  )
}

export default DashBoard
