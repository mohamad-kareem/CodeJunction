import React from 'react'
import "./sidebar.css"
import { SideBarContent } from './SideBarContent'
import Logo from '../Logo/Logo'

const SideBar = () => {


  return (
    <div className='sidebar'>
        <Logo borderBottom="1px solid yellow"  padding="10px"/>
     <ul className='SideBarList'>
        {SideBarContent.map((value,key)=>{
          return(
            <li key={key} 
              className='row'
              onClick={()=>
                {window.location.pathname=value.link}}>
                  <div id='icon'>{value.icon}</div>
                  <div id='title'>{value.title}</div>
            </li>
          )
          })}
      </ul>
    </div>
  )
}

export default SideBar
