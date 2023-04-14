import React,{useState} from 'react'
import {faEnvelope,faKey} from '@fortawesome/free-solid-svg-icons';
import InputBox from '../InputForm/InputForm';
import ButtonComponent from '../Button/ButtonComponent';
import { Link } from 'react-router-dom';
import loginImage from "../../assets/ezgif.com-resize.gif"

const LoginForm = () => {
  return (
    <div className='wrapper'>
    <div className='image-container'>
            <img src={loginImage} alt='registration' />
    </div>
  <div className='sign-in-up-container'>
    <form className='sign-in-out-inner-form'>
      <h2 className='header'>Sign In</h2>
          <InputBox
            label="email address"
            name="email"
            value={email}
            onChange={HandleEmailChange}
            icon={faEnvelope}
         />
          <InputBox
            label="password"
            name="password"
            value={password}
            onChange={HandlePasswordChange}
            icon={faKey}
         />
         <ButtonComponent color="yellow"size="15px">Sign in</ButtonComponent> 
         <div className="forget-password"><Link to="">Forget Password</Link></div>
    </form>
 </div>
</div>
  )
}

export default LoginForm
