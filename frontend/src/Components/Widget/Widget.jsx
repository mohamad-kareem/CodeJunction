import React from 'react'
import "./widget.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
const Widget = ({ title, activeUsers, widgetLink, percentage }) => {
  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{title}</span>
            <span className='active-users'>{activeUsers}</span>
            <span className='widget-link'>{widgetLink}</span>
        </div>
        <div className='right'>
            <div className='percentage'>
               <KeyboardArrowUpIcon/> {percentage}
            </div>
           <PersonIcon className='person-icon'/>
        </div>
         
    </div>
  )
}

export default Widget
