import React,{useContext} from 'react'
import { UserContext } from '../../Context/Context'
import "./activitiespage.css"
import SideBar from '../../Components/SideBar/SideBar'
import Chart from '../../Components/Chart/Chart'
import PersonalInfo from '../../Components/PersonalInfo/PersonalInfo'
import SavedCodes from '../../Components/SavedCodes/SavedCodes'
import { ActivitiesTranslation } from '../../Components/Languages/Lang'

const ActivitiesPage = () => {

  const userlang=useContext(UserContext)
  const lan = ActivitiesTranslation[userlang.language]

  return (
    <div className='activities-page-wrapper'>
         <SideBar />
        <div className="inner-activities-container">
            <PersonalInfo/>
            <h3 className='codes-header'>{lan.favorite}</h3>
            <div className="flex-wrapper">
              <div className="flex-container">
                 <SavedCodes/>
              </div>
            </div>
            <h3 className='codes-header'>{lan.coding}</h3>
             <div className="statistics">
             <Chart/>
             </div>
        </div>
    </div>
    
  )
}
export default ActivitiesPage
