import React from 'react'
import "./adminpage.css"
import SideBar from '../../Components/SideBar/SideBar'
import BarGrapgh from '../../Components/BarGrapgh/BarGrapgh'
import {CircularProgressbar,buildStyles} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import TopNav from '../../Components/TopNav/TopNav'
const AdminPage = () => {
  return (
    <div className='admin-wrapper'>
        <SideBar/>
        <div className="admin">
          <TopNav title={"Admin"}/>
        <div className="buttom-section">
         <div className="website-info">
            <div className="grapgh">
                <div className="left-part">
                  <h1 className='statistics-title'>Usage</h1><br />
                  <p className='statistics-info'> find a summary of API usage for your organization.<br/><br /> All dates and times are UTC-based, and data may <br/> be delayed up to 5 minutes.</p>
                </div>
                <div className="right-bargrapah">
                <BarGrapgh/>
                </div>
            </div>
            <div className="piechart">
                <div className="left-part">
                    <h1 className='statistics-title'>Active Users</h1><br />
                    <p className='statistics-info'>An active user is defined as someone who has logged <br/> into their account and interacted with our platform <br /> within the last 30 days.</p>
                </div>
                <div className="right-piechart">
                   <CircularProgressbar
                     value={50} 
                     text='40%' 
                     strokeWidth={3} 
                     styles={buildStyles({
                        pathColor: "yellow",
                        textColor: "wheat",
                     })}
                    />
                 </div>
            </div>

            <div className="suggestions">

            </div>
           
           
         </div>

        </div>
        </div>
       
      
    </div>
  )
}

export default AdminPage
