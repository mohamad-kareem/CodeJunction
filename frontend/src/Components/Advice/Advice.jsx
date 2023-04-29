import React from 'react'
import "./advice.css"
import robot from "../../assets/robo_small.gif"
const Advice = ({advice,HideAdvice}) => {

const variants = {
  hidden: { 
    opacity: 0,
    y: "50%"
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    y: "50%",
    transition: { duration: 0.5 }
  }
}

  return (
    <div className='ai-advice'>
        <div className='sign-in-up-container'>
        <div className="advice-inner-form">
            <div className="advice-flex">
            <img src={robot} className='robot' onClick={HideAdvice}/>
            <br />{ advice} 
            </div>
       
      </div>
      </div>
    </div>
  )
}

export default Advice
