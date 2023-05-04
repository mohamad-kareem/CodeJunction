import React, { useState } from 'react';
import './sidebar.css';
import Logo from '../Logo/Logo';
import HomeIcon from '@mui/icons-material/Home';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GridViewIcon from '@mui/icons-material/GridView';
import { NavLink } from 'react-router-dom';
import ButtonComponent from '../Button/ButtonComponent';
const SideBar = () => {
  const [showTitle, setShowTitle] = useState(true);
  const [showLogo, setShowLogo] = useState(true);

  const handleHelloClick = () => {
    setShowTitle(!showTitle);
    setShowLogo(!showLogo);
  };

  return (
    <div className="sidebar">
      {showLogo && <Logo borderBottom="1px solid wheat" padding="10px" />}
     <div className="sidebar-content">

    
      <div className="SideBarList"> 

        <div className="row row1" onClick={handleHelloClick}>
         <div id='icon'><GridViewIcon/></div>
         <div id="title">{showTitle && "Dash Board"}</div>
        </div>

        <NavLink to="/landing" className="row">
          <div id="icon">{<HomeIcon />}</div>
          <div id="title">{showTitle && "Home"}</div>
        </NavLink>

        <NavLink to="/ranking" className="row"activeClassName="active">
          <div id="icon">{<EmojiEventsIcon />}</div>
          <div id="title">{showTitle && "ranking"}</div>
        </NavLink>
        

        <NavLink to="/activities" className="row"activeClassName="active">
          <div id="icon">{<WorkHistoryIcon />}</div>
          <div id="title">{showTitle && "Activities"}</div>
        </NavLink>

        <NavLink to="/profile" className="row"activeClassName="active">
          <div id="icon">{<AccountCircleIcon />}</div>
          <div id="title">{showTitle && "Profile"}</div>
        </NavLink>

        <NavLink to="/admin" className="row"activeClassName="active">
          <div id="icon">{<SupervisorAccountIcon />}</div>
          <div id="title">{showTitle && "Statistics"}</div>
        </NavLink>
      </div>
     </div>
   </div>
  );
};

export default SideBar;
