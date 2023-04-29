import React from 'react'
import "./adminpage.css"
import SideBar from '../../Components/SideBar/SideBar'
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
            <div className="left-bargrapah">

            </div>
            <div className="right-piechart">
                
            </div>
         </div>

        </div>
        </div>
       
      
    </div>
  )
}

export default AdminPage
