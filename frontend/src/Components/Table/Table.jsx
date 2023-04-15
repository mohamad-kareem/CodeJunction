import React ,{useState} from 'react'
import "./table.css"
const Table = () => {

    const [users, setUsers] = useState([]);
  return (
    <div className='table-wrapper'>
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
                    <td>Age</td>
                    <td className='git'>Github</td>
                    <td>Points</td>
                </tr>
            </thead>
            <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>#{user.rank}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td ><a href={user.github}>View</a></td>
                <td>{user.points}</td>
              </tr>
            ))}
            </tbody>
        </table>
      </div>
      <div></div>
    </div>
  )
}

export default Table
