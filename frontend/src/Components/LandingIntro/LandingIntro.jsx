import React, {useContext}from 'react'
import { useNavigate } from 'react-router-dom'
import "./landingintro.css"
import ButtonComponent from '../Button/ButtonComponent'
import { UserContext } from '../../Context/Context';
import { Intro } from '../Languages/Lang';

const LandingIntro = () => {    

  const userlang=useContext(UserContext)
  const navigate = useNavigate()
  const lan = Intro[userlang.language]

  return (
    <div className='intro-container'>
      <div className='intro-content'>
              <h1>{lan.greet1}<br/>{lan.greet2}</h1>
              <div className='btn-intro'> 
                <ButtonComponent width='130px'size={"15px"} onClick={() => navigate("/register")}>{lan.getstart}</ButtonComponent>
              </div>
      </div>
    </div>

  )
}

export default LandingIntro
