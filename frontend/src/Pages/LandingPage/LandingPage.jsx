import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import LandingIntro from '../../Components/LandingIntro/LandingIntro'
import Anime from '../../Components/Anime/Anime'
const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='intro-section'><LandingIntro/></div>
      <div className='anime-section'><Anime/></div>
      
    </div>
  )
}

export default LandingPage
