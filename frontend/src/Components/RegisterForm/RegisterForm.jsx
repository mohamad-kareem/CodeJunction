import React, {useState}  from 'react'
import InputForm from '../InputForm/InputForm'
const Register = () => {
    const [username,setUserName]=useState("");
  return (
    <div className='wrapper'>
        <div className='sign-in-up-container'>
            <h2 className='header'>Create account</h2>
            <InputForm
                label="username"
                name="username"
                value={username}/>
            
        </div>
      
    </div>
  )
}

export default Register
