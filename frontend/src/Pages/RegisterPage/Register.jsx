import React from 'react'
import Register from '../../Components/RegisterForm/RegisterForm'
import Navbar from '../../Components/Navbar/Navbar'
import CopyRights from '../../Components/CopyRight/CopyRight'
const RegisterPage = () => {
  return (
    <div>
     <Navbar/>
     <Register/>
     <CopyRights marginTop={30} paddingBottom={30}/>
    </div>
  )
}

export default RegisterPage
