import React from 'react'
import "./landingintro.css"
import ButtonComponent from '../Button/ButtonComponent'

const LandingIntro = () => {
    const handleClick = () => {
        window.location.href = "/register";
      }
    
  return (
    <div className='intro-container'>
    <div className='intro-content'>
            <h1>Unlock your coding<br/>  potential with collaboration </h1>
             <div className='btn-intro'> <ButtonComponent width='100px'size={"10px"} onClick={handleClick}>Get Started</ButtonComponent></div>
        </div>
    </div>

  )
}

export default LandingIntro
