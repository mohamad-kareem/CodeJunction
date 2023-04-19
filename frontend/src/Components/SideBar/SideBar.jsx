import React from 'react'
import "./sidebar.css"
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SourceIcon from '@mui/icons-material/Source';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const SideBar = ({setCode,setRanking,setProfile}) => {


  return (
    <div className='sidebar'>
        <Logo borderBottom="1px solid rgb(122, 175, 16)"  padding="10px"/>
        
        <div className="SideBarList">  
          <Link  to="/home" className='row'>
            <div id='icon'>{<HomeIcon/>}</div>
            <div id='title'>{"home"}</div>
          </Link>
          
          <div className="row" onClick={()=>{
              setRanking(true);
              setCode(false);
              setProfile(false);
              }}>
              <div id='icon'>{< EmojiEventsIcon/>}</div>
              <div id='title'>{"ranking"}</div>
          </div>

          <div className="row" onClick={()=>{
              setRanking(false);
              setCode(true);
              setProfile(false);
              }} >
              <div id='icon'>{< SourceIcon/>}</div>
              <div id='title'>code</div>
          </div>

          <div className="row" onClick={()=>{
              setRanking(false);
              setCode(false);
              setProfile(true);
              }} >
              <div id='icon'>{< AccountCircleIcon/>}</div>
              <div id='title'>Profile</div>
          </div>

          <div className="row">
            <div id='icon'>{< GitHubIcon/>}</div>
            <div id='title'>GitHub</div>
          </div>
        
        </div>
    </div>
  )
}

export default SideBar
