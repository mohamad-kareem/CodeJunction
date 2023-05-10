import React, { useState,useContext } from 'react';
import { UserContext } from '../../Context/Context';
import './sidebar.css';
import Logo from '../Logo/Logo';
import HomeIcon from '@mui/icons-material/Home';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GridViewIcon from '@mui/icons-material/GridView';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { NavLink } from 'react-router-dom';
import { SideBarTranslation } from '../Languages/Lang';

 const SideBar = () => {
  const [showTitle, setShowTitle] = useState(true);
  const [showLogo, setShowLogo] = useState(true);

  const userlang=useContext(UserContext)
  const lan = SideBarTranslation[userlang.language]


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
         <div id="title">{showTitle && lan.dashboard}</div>
        </div>

        <NavLink to="/home" className="row">
          <div id="icon">{<HomeIcon />}</div>
          <div id="title">{showTitle && lan.home}</div>
        </NavLink>

        <NavLink to="/ranking" className="row" activeclassname="active">
          <div id="icon">{<EmojiEventsIcon />}</div>
          <div id="title">{showTitle && lan.ranking}</div>
        </NavLink>

        <NavLink to="/session" className="row" activeclassname="active">
          <div id="icon">{<KeyboardIcon />}</div>
          <div id="title">{showTitle && lan.startsession}</div>
        </NavLink>


        <NavLink to="/activities" className="row" activeclassname="active">
          <div id="icon">{<WorkHistoryIcon />}</div>
          <div id="title">{showTitle && lan.activities}</div>
        </NavLink>

        <NavLink to="/profile" className="row" activeclassname="active">
          <div id="icon">{<AccountCircleIcon />}</div>
          <div id="title">{showTitle && lan.profile}</div>
        </NavLink>

        <NavLink to="/admin" className="row" activeclassname="active">
          <div id="icon">{<BarChartIcon />}</div>
          <div id="title">{showTitle && lan.statistics}</div>
        </NavLink>
      </div>
     </div>
   </div>
  );
};

export default SideBar;
