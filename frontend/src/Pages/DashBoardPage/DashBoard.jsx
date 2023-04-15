import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import "./dashboard.css"
import Widget from '../../Components/Widget/Widget'
import PersonIcon from '@mui/icons-material/Person';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
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
          icon={PersonIcon}
        />
        <Widget
          title="Points"
          activeUsers={155}
          widgetLink="Boost your skills"
          icon={ScoreboardIcon}
        />
        <Widget
           title="Badges"
           activeUsers="Gold"
           widgetLink="Boost your skills"
           icon={MilitaryTechIcon}
         
           />
        
       </div>
    </div>
   
  )
}

export default DashBoard
