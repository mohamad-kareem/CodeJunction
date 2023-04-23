import SideBar from '../../Components/SideBar/SideBar'
import "./rankingpage.css"
import RankingTable from '../../Components/RankingTable/RankingTable';
const RankingPage = () => {

  return (
  
    <div className='ranking-wrapper'>
       <div className='sidebar-wrapper'>
            <SideBar />
       </div>
       <div className='ranking-table'>
           <RankingTable />
       </div>
    </div>
   
  )
}

export default RankingPage
