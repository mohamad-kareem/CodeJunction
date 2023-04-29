import React from 'react'
import "./advice.css"
import robot from "../../assets/robo_small.gif"
import { motion } from 'framer-motion'
const Advice = ({advice,HideAdvice}) => {

  const variants = {
    hidden: { 
        opacity: 0,
        y: "50%"
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 3 }
      },
      exit: {
        opacity: 0,
        y: "50%",
        transition: { duration: 3 }
      }
  }
return (
    <div className='ai-advice' onClick={HideAdvice}>
        <div className='sign-in-up-container'>
          < motion.div 
            className="advice-inner-form" 
            variants={variants}initial="hidden"
            animate="visible"
            exit="exit">
              <div className="advice-flex">
              <img src={robot} className='robot' />
              <br />{ advice} 
              </div>
          </motion.div>
      </div>
    </div>
  )
}

export default Advice
