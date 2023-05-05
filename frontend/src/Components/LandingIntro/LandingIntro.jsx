import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./landingintro.css"
import ButtonComponent from '../Button/ButtonComponent'


const LandingIntro = () => {    
  const navigate = useNavigate()
  
  return (
    <div className='intro-container'>
      <div className='intro-content'>
              <h1>Unlock your coding<br/>potential with collaboration</h1>
              <div className='btn-intro'> 
                <ButtonComponent width='130px'size={"15px"} onClick={() => navigate("/register")}>Get Started</ButtonComponent>
              </div>
      </div>
    </div>

  )
}

export default LandingIntro
