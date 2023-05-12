import React, { useState,useContext } from 'react';
import { UserContext } from '../../Context/Context';
import './sidebar.css';
import Logo from '../Logo/Logo';
import layout from '../../icons/layout.png'
import home from '../../icons/house.png'
import rank from '../../icons/trophy.png'
import session from '../../icons/presentation.png'
import user from '../../icons/user.png'
import statistics from '../../icons/analysis.png'
import activity from '../../icons/sociology.png'


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
         <div id='icon'><img src={layout} alt="layout" /></div>
         <div id="title">{showTitle && lan.dashboard}</div>
        </div>

        <NavLink to="/home" className="row">
          <div id="icon"><img src={home} alt="home" /></div>
          <div id="title">{showTitle && lan.home}</div>
        </NavLink>

        <NavLink to="/ranking" className="row" activeclassname="active">
          <div id="icon"><img src={rank} alt="rank" /></div>
          <div id="title">{showTitle && lan.ranking}</div>
        </NavLink>

        <NavLink to="/session" className="row" activeclassname="active">
          <div id="icon"><img src={session} alt="session" /></div>
          <div id="title">{showTitle && lan.startsession}</div>
        </NavLink>


        <NavLink to="/activities" className="row" activeclassname="active">
          <div id="icon"><img src={activity} alt="activity" /></div>
          <div id="title">{showTitle && lan.activities}</div>
        </NavLink>

        <NavLink to="/profile" className="row" activeclassname="active">
          <div id="icon"><img src={user} alt="user" /></div>
          <div id="title">{showTitle && lan.profile}</div>
        </NavLink>

        <NavLink to="/admin" className="row" activeclassname="active">
          <div id="icon"><img src={statistics} alt="statistics" /></div>
          <div id="title">{showTitle && lan.statistics}</div>
        </NavLink>
      </div>
     </div>
   </div>
  );
};

export default SideBar;
