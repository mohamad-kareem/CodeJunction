import React, { useState } from 'react';
import './sidebar.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GridViewIcon from '@mui/icons-material/GridView';
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
     
      <div className="SideBarList"> 

        <div className="row row1" onClick={handleHelloClick}>
         <div id='icon'><GridViewIcon/></div>
         <div id="title">{showTitle && "Dash Board"}</div>
        </div>

        <Link to="/landing" className="row">
          <div id="icon">{<HomeIcon />}</div>
          <div id="title">{showTitle && "Home"}</div>
        </Link>

        <Link to="/ranking" className="row">
          <div id="icon">{<EmojiEventsIcon />}</div>
          <div id="title">{showTitle && "ranking"}</div>
        </Link>

        <Link to="/activities" className="row">
          <div id="icon">{<WorkHistoryIcon />}</div>
          <div id="title">{showTitle && "Activities"}</div>
        </Link>

        <Link to="/profile" className="row">
          <div id="icon">{<AccountCircleIcon />}</div>
          <div id="title">{showTitle && "Profile"}</div>
        </Link>

        <Link to="/admin" className="row">
          <div id="icon">{<SupervisorAccountIcon />}</div>
          <div id="title">{showTitle && "Statistics"}</div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
