import React, { useState } from 'react'
import middleComputer  from "../../assets/computers1.png"
import leftPerson from "../../assets/left.png"
import rightPerson from "../../assets/right.png"
import {motion} from "framer-motion"
import "./anime.css"

const Anime = () => {
    const [move,setMove]=useState(false);
  return (
    <div className='anime-container'>
    <div className='anime'>
    <motion.div
     initial={{x: -400}}
     animate={{x:move?-40:80}} 
     >
      <img src={rightPerson} alt='registration' />
      </motion.div>

    <div>
      <img src={middleComputer} alt='registration' />
    </div>

    <motion.div 
    initial={{x: 850}}
    animate={{x:move?600:-70}} 
    >
      <img src={leftPerson} alt='registration' />
      </motion.div>
    </div>

  </div>
  )
}

export default Anime
