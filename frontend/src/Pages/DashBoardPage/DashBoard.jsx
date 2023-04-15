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
       <Widget
          title="Users"
          activeUsers={1234}
          widgetLink="Active coders"
          percentage="75%"
        />
        <Widget
          title="Points"
          activeUsers={155}
          widgetLink="Boost your skills"
        />
        <Widget
           title="Badges"
           activeUsers="Gold"
           widgetLink="Boost your skills"
         
           />
        
       </div>
    </div>
   
  )
}

export default DashBoard
