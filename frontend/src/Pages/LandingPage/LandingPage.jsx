import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import LandingIntro from '../../Components/LandingIntro/LandingIntro'
import Anime from '../../Components/Anime/Anime'
import Footer from '../../Components/Footer/Footer'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='intro-section'><LandingIntro/></div>
      <div className='anime-section'><Anime/></div>
      <Footer/>
      
    </div>
  )
}

export default LandingPage
