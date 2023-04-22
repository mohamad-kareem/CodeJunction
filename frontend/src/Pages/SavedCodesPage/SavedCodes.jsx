import React from 'react'
import CodesTable from '../../Components/CodesTable/CodesTable'
import SideBar from '../../Components/SideBar/SideBar'
import "./savedcodespage.css"
import Chart from '../../Components/Chart/Chart'
const SavedCodesPage = () => {
  return (
    
    <div className='saved-codes-wrapper'>
        <div className="sidebar-wrapper">
            <SideBar/>
        </div>
        <div className="code-table">
             <Chart/>
            <CodesTable/>
          

        </div>
    </div>
    
  )
}

export default SavedCodesPage
