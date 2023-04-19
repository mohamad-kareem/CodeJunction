import React from 'react'
import { motion } from 'framer-motion';
const InnerDrop = ({Heading,content}) => {

    const containerVariants = {
        animate: {
          x: [-10, 0, -10],
          transition: { duration: 1.5, repeat: Infinity },
        },
      };
    

    const dropVariants = {
        animate: {
          y: [-10, 0, -10],
          transition: { duration: 1.5, repeat: Infinity, delay: 0.2 },
        },
      };
    
      const contentVariants = {
        animate: {
          y: [-10, 0, -10],
          transition: { duration: 1.5, repeat: Infinity, delay: 0.4 },
        },
      };

  return (
   <motion.div className="container" variants={containerVariants} animate="animate">
     <motion.div className="drop"variants={dropVariants}  animate="animate">
       <motion.div className="content" variants={contentVariants} animate="animate">
         <h2 className='head-drop'>{Heading}</h2>
         <p>{content}</p>
       </motion.div>
     </motion.div>
   </motion.div>
  )
}

export default InnerDrop
