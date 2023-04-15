import React from 'react'
import "./table.css"
const Table = () => {
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
                <tr>
                    <td>#1</td>
                    <td>Darkweb</td>
                    <td>kareem@gmail.com</td>
                    <td>28</td>
                    <td>https://github.com/mohamad-kareem</td>
                    <td> 1200</td>
                </tr>
            </tbody>
        </table>
      </div>
      <div></div>
    </div>
  )
}

export default Table
