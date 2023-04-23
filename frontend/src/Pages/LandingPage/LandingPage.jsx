import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import LandingIntro from '../../Components/LandingIntro/LandingIntro'
import Anime from '../../Components/Anime/Anime'
import Footer from '../../Components/Footer/Footer'
import Parallax from '../../Components/Parallax/Parallax'
import parallaxImage from "../../assets/community.png"
import WebsiteDrops from '../../Components/WebsiteDrops/WebsiteDrops'
import "./landingpage.css"
const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <div className='intro-section'>
          <LandingIntro/>
        </div>
        <div className='anime-section'>
          <Anime/>
        </div>
        <br /><br /><br /><br /><br /><br />
        <div className="parallax-image" ><Parallax backgroundImage={parallaxImage}>
          <div className='trigger'>
            <div className='trigger-content'>
              <h1>Soon... CopilotX <br/>Intergration</h1> 
            </div>
          </div>
          </Parallax>
        </div>
      <br /><br /><br /><br /><br /><br />
      <WebsiteDrops/>
      <br /><br /><br /><br /><br /><br />
        <Footer/>
        <br /><br /><br />
    </div>
  )
}

export default LandingPage
