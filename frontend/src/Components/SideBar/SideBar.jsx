import React from 'react'
import "./sidebar.css"
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const SideBar = () => {

  return (
    <div className='sidebar'>
        <Logo borderBottom="1px solid wheat"  padding="10px"/>
        
        <div className="SideBarList">  
            <Link  to="/landing" className='row'>
              <div id='icon'>{<HomeIcon/>}</div>
              <div id='title'>{"Landing page"}</div>
            </Link>
          
          
             <Link to="/ranking"  className='row'>
              <div id='icon'>{< EmojiEventsIcon/>}</div>
              <div id='title'>{"ranking"}</div>
              </Link>
        
            <Link to="/home" className="row" >
              <div id='icon'>{<HomeIcon/>}</div>
              <div id='title'>home</div>
            </Link>

            <Link to="/profile"  className="row">
              <div id='icon'>{< AccountCircleIcon/>}</div>
              <div id='title'>Profile</div>
            </Link>

          <div className="row">
            <div id='icon'>{< GitHubIcon/>}</div>
            <div id='title'>GitHub</div>
          </div>
        
        </div>
    </div>
  )
}

export default SideBar
