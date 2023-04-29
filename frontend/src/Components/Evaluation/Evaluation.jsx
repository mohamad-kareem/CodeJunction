import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import "./evaluation.css"

const Evaluation = ({ evaluation, HideEvaluation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      HideEvaluation();
    }, 2000);
    return () => clearTimeout(timer);
  }, [HideEvaluation]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 1.4,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      className='evaluation'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      {evaluation}
    </motion.div>
  )
}

export default Evaluation
