import React from 'react'
import "./advice.css"
import robot from "../../assets/robo_small.gif"
import { motion } from 'framer-motion'
const Advice = ({advice,HideAdvice}) => {

  const variants = {
    hidden: { 
        opacity: 2,
        y: "100%"
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 2 }
      },
  }
return (
    <div className='ai-advice' onClick={HideAdvice}>
        <div className='sign-in-up-container'>
          < motion.div 
            className="advice-inner-form" 
            variants={variants}
            initial="hidden"
            animate="visible">
              <div className="advice-flex">
              <img src={robot} alt='robot' className='robot' />
              <br />{ advice} 
              </div>
          </motion.div>
      </div>
    </div>
  )
}

export default Advice
