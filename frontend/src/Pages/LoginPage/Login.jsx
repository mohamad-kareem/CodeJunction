import React from 'react'
import CopyRight from '../../Components/CopyRight/CopyRight';
import Navbar from '../../Components/Navbar/Navbar';
import LoginForm from '../../Components/LoginForm/LoginForm';
import Bubbles from '../../Components/bubbles/Bubbles';
import "./login.css"
const LoginPage = () => {
  return (
    <div className="login-page">
      <Navbar />
      <div className="content-wrapper">
        <LoginForm />
        <CopyRight marginTop={130} />
      </div>
      <Bubbles />
    </div>
  );
}

export default LoginPage