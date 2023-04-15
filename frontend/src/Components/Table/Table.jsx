import React from 'react'

const Table = () => {
  return (
    <div className='table-wrapepr'>
      <div className="search">
        <div className="table-header">
            <h2>Users</h2>
            <p>View All</p>
        </div>
        <table>
            <thead>
                <tr>
                    <td>Username</td>
                    <td>email</td>
                    <td>age</td>
                    <td>points</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Darkweb</td>
                    <td>kareem@gmail.com</td>
                    <td>28</td>
                    <td>Github link</td>
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
