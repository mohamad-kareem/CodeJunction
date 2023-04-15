import React from 'react'
import "./widget.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
const Widget = () => {
  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>Users</span>
            <span className='active-users'>1778</span>
            <span className='widget-link'>see all users</span>
        </div>
        <div className='right'>
            <div className='percentage'>
               <KeyboardArrowUpIcon/> 50%
            </div>
           <div className='person-icon'> <PersonIcon /></div>
        </div>
         
    </div>
  )
}

export default Widget
