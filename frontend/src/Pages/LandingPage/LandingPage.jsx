import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import LandingIntro from '../../Components/LandingIntro/LandingIntro'
import Anime from '../../Components/Anime/Anime'
import Footer from '../../Components/Footer/Footer'
import Parallax from '../../Components/Parallax/Parallax'
import parallaxImage from "../../assets/community.png"
const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='intro-section'><LandingIntro/></div>
      <div className='anime-section'><Anime/></div>
      <div className="parallax-image" ><Parallax backgroundImage={parallaxImage}>
      test
        </Parallax>
    </div>
      <Footer/>
      
    </div>
  )
}

export default LandingPage
