import React ,{useContext}from 'react'
import { UserContext } from '../../Context/Context'
import "./adminpage.css"
import SideBar from '../../Components/SideBar/SideBar'
import BarGrapgh from '../../Components/BarGrapgh/BarGrapgh'
import TopNav from '../../Components/TopNav/TopNav'
import PieChart from '../../Components/PieChart/PieChart'
import { AdminTranslation } from '../../Components/Languages/Lang'
const AdminPage = () => {

  const userlang=useContext(UserContext)
  const lan = AdminTranslation[userlang.language]

  return (
    <div className='admin-wrapper'>
        <SideBar/>
        <div className="admin">
          <TopNav title={lan.admin}/>
        <div className="buttom-section">
         <div className="website-info">
            <div className="grapgh">
                <div className="left-part">
                  <h1 className='statistics-title'>{lan.usage}</h1><br />
                  <p className='statistics-info'> {lan.text1}<br/><br /> {lan.text2} <br/> {lan.text3}</p>
                </div>
                <div className="right-bargrapah">
                <BarGrapgh/>
                </div>
            </div>
            <div className="piechart">
                <div className="left-part">
                    <h1 className='statistics-title'>{lan.active}</h1><br />
                    <p className='statistics-info'>{lan.text4} <br/> {lan.text5} <br />{lan.text6}</p>
                </div>
                <div className="right-piechart">
                   <PieChart/>
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
