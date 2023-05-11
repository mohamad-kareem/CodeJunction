import React from 'react'
import "./widget.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Widget = ({ title, activeUsers, widgetLink ,icon}) => {
    const Icon = icon; 
  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{title}</span>
            <span className='active-users'>{activeUsers}</span>
            <span className='widget-link'>{widgetLink}</span>
        </div>
        <div className='right'>
           <Icon className='person-icon'/>
        </div>
         
    </div>
  )
}

export default Widget
