import React from 'react'
import "./advice.css"
import robot from "../../assets/robo_small.gif"
const Advice = ({advice}) => {
  return (
    <div className='ai-advice'>
        <div className='sign-in-up-container'>
        <div className="advice-inner-form">
            <div className="advice-flex">
            <img src={robot} className='robot'/>
            {advice} 
            </div>
       
      </div>
      </div>
    </div>
  )
}

export default Advice
