import React,{useState} from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import "./dashboard.css"
import RankingTable from '../../Components/RankingTable/RankingTable';
import CodesTable from '../../Components/CodesTable/CodesTable';
import UserProfile from '../../Components/UserProfile/UserProfile';
const DashBoard = () => {
  const [code ,setCode]=useState(false);
  const [ranking ,setRanking]=useState(false);
  const [profile ,setProfile]=useState(false);
  return (
  
    <div className='dashboard-wrapper'>
       <div className='sidebar-wrapper'>
            <SideBar setCode={setCode} setRanking={setRanking} setProfile={setProfile}/>
       </div>
       <div className='middle-container'>
         <div className="table">
           <RankingTable ranking={ranking}/>
           <CodesTable code={code}/>
           <UserProfile profile={profile}/>
         </div> 
       </div>
     


    </div>
   
  )
}

export default DashBoard
