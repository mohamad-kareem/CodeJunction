import React from 'react'
import Register from '../../Components/RegisterForm/RegisterForm'
import Navbar from '../../Components/Navbar/Navbar'
import CopyRights from '../../Components/CopyRight/CopyRight'
import Bubbles from '../../Components/bubbles/Bubbles'
const RegisterPage = () => {
  return (
    <div>
     <Navbar/>
     <div className="content-wrapper">
     <Register/>
     <CopyRights marginTop={30} paddingBottom={30}/>
     </div>
     <Bubbles/>
    </div>
  )
}

export default RegisterPage
