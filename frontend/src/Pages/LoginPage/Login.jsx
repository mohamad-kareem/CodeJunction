import React from 'react'
import CopyRight from '../../Components/CopyRight/CopyRight';
import Navbar from '../../Components/Navbar/Navbar';
import LoginForm from '../../Components/LoginForm/LoginForm';
const LoginPage = () => {
  return (
    <div>
        <Navbar/>
        <LoginForm/>
        <CopyRight marginTop={130}/>
     
    </div>
  )
}

export default LoginPage