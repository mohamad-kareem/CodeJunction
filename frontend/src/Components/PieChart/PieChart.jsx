import React from 'react'
import {CircularProgressbar,buildStyles} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
const PieChart = () => {

    const getUsersCount = async () => {
        try {
            const response = await axios.get('http://localhost:8000/getAllUsersNumber', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            });
            return response.data.count;
        }catch (error) {
            console.log(error);
        }
    }; 

  return (
    <div>
      <CircularProgressbar
        value={50} 
        text='40%' 
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
