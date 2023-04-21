import React ,{useState,useEffect} from 'react'
import "./rankingtable.css"
import Widget from '../Widget/Widget';
import PersonIcon from '@mui/icons-material/Person';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import axios from 'axios';
const RankingTable = () => {
   
  const [users, setUsers] = useState([]);
  useEffect(() => {

    axios.get('http://localhost:8000/allusers/ranking')
        .then(response => {
          const usersWithRank = response.data.map((user, index) => ({ ...user, rank: index + 1 }));
          setUsers(usersWithRank);
        })
        .catch(error => console.log(error));
  }, []);

  return (
    <div className='table-wrapper' >
      <div className="widgets-container">
      <Widget
          title="Users"
          activeUsers={1234}
          widgetLink="Active coders"
          percentage="75%"
          icon={PersonIcon}
        />
        <Widget
          title="Points"
          activeUsers={155}
          widgetLink="Boost your skills"
          icon={ScoreboardIcon}
        />
        <Widget
          title="Badges"
          activeUsers="Gold"
          widgetLink="Boost your skills"
          icon={MilitaryTechIcon}
          />
      </div>    
      <div className="all-users">
        {/* <div className="table-header">
            <h2>Users</h2>
            <p>View All</p>
        </div> */}
        <table>
            <thead>
                <tr>
                    <td>Rank</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Points</td>
                </tr>
            </thead>
            <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>#{user.rank}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.points}</td>
              </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default RankingTable
