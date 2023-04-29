import React from 'react'
import "./adminpage.css"
import SideBar from '../../Components/SideBar/SideBar'
import BarGrapgh from '../../Components/BarGrapgh/BarGrapgh'
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
const AdminPage = () => {
  return (
    <div className='admin-wrapper'>
        <SideBar/>
        <div className="admin">
        <div className="top-section">
            <h1 className='top-name'>Admin </h1>
        </div>
        <div className="buttom-section">
         <div className="website-info">
            <div className="grapgh">
                <div className="left-bargrapgh">
                  <h1 className='bargrapgh-title'>Usage</h1><br />
                  <p className='bargrapgh-info'> find a summary of API usage for your organization.<br/><br /> All dates and times are UTC-based, and data may <br/> be delayed up to 5 minutes.</p>
                </div>
                <div className="right-bargrapah">
                <BarGrapgh/>
                </div>
            </div>
         </div>

        </div>
        </div>
       
      
    </div>
  )
}

export default AdminPage
