import React from 'react'
import "./homepage.css"
import SideBar from '../../Components/SideBar/SideBar'
import Chart from '../../Components/Chart/Chart'
import PersonalInfo from '../../Components/PersonalInfo/PersonalInfo'
import SavedCodes from '../../Components/SavedCodes/SavedCodes'

const HomePage = () => {
  return (
    <div className='home-page-wrapper'>
         <SideBar />
        <div className="inner-home-container">
            <PersonalInfo/>
            <h3 className='codes-header'>Favorate Codes</h3>
            <div className="flex-wrapper">
              <div className="flex-container">
                 <SavedCodes/>
              </div>
            </div>
             <div className="statistics">
             <Chart/>
             </div>
        </div>
    </div>
    
  )
}
export default HomePage
