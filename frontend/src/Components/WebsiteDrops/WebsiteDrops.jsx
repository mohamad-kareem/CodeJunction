import React from 'react'
import "./websitedrops.css"
import { motion } from 'framer-motion';
const WebsiteDrops = () => {

  const containerVariants = {
    animate: {
      x: [-10, 0, -10],
      transition: { duration: 1.5, repeat: Infinity },
    },
  };

  return (
     <motion.div className="drop-wrapper " variants={containerVariants}  animate="animate">
    <div className="container">
      <div className="drop">
        <div className="content">
          <h2>01</h2>
          <p>Collaborate and improve code in real-time with live sharing and pair programming.</p>
        </div>
      </div>
      <div className="drop">
        <div className="content">
          <h2>02</h2>
          <p>Automatically analyze code quality, performance, and security with integrated tools.</p>
        </div>
      </div>
      <div className="drop">
        <div className="content">
          <h2>03</h2>
          <p>Add fun and motivation to coding with gamification elements like badges and leaderboards.</p>
        </div>
      </div>
      <div className="drop">
        <div className="content">
          <h2>04</h2>
          <p>Enhance your coding skills and learn from other developers with our code review platform.</p>
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default WebsiteDrops
