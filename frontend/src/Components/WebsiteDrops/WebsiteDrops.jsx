import React from 'react'
import "./websitedrops.css"
import { motion } from 'framer-motion';
import InnerDrop from './InnerDrop';
const WebsiteDrops = () => {

  const containerVariants = {
    animate: {
      x: [-10, 0, -10],
      transition: { duration: 1.5, repeat: Infinity },
    },
  };

  return (
     <motion.div className="drop-wrapper " variants={containerVariants}  animate="animate">
   <InnerDrop  Heading="01" content="Collaborate and improve code in real-time with live sharing and pair programming."/>
     </motion.div>
  )
}

export default WebsiteDrops
