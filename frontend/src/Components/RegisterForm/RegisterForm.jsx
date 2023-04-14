import React, {useState}  from 'react'
import InputForm from '../InputForm/InputForm'
import ButtonComponent from '../Button/ButtonComponent';
const Register = () => {
    const [username,setUserName]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault()}
  return (
    <div className='wrapper'>
        <div className='sign-in-up-container'>
            <h2 className='header'>Create account</h2>
            <InputForm
                label="username"
                name="username"
                value={username}/>
            <InputForm
                label="username"
                name="username"
                value={username}/>
            <InputForm
                label="username"
                name="username"
                value={username}/>
            <ButtonComponent color="yellow"size="15px" onClick={handleSubmit}>Register</ButtonComponent> 
        </div>
      
    </div>
  )
}

export default Register
