import React, { useState, useEffect } from 'react'
import {CircularProgressbar,buildStyles} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import axios from 'axios'
const PieChart = () => {
    const [usersCount, setUsersCount] = useState(null);
    useEffect(() => {
        const getUsersCount = async () => {
            try {
                const response = await axios.get('http://localhost:8000/getAllUsersNumber', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                });
                setUsersCount(response.data.count);
            }catch (error) {
                console.log(error);
            }
        }; 
        getUsersCount();
    }, []);
  return (
    <div>
      <CircularProgressbar
        value={usersCount}
        text={`${usersCount}%`}
        strokeWidth={3} 
        styles={buildStyles({
        pathColor: "yellow",
        textColor: "wheat",
        })}
      />
    </div>
  )
}

export default PieChart
