import React, {useState}  from 'react'
import InputForm from '../InputForm/InputForm'
import ButtonComponent from '../Button/ButtonComponent';
import "../Css/signInOut.css"
const Register = () => {
    const [username,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className='wrapper'>
     <div className='sign-in-up-container'>
        <form className='sign-in-out-inner-form'>
            <h2 className='header'>Create account</h2>
            <InputForm
                label="username"
                name="username"
                value={username}/>
            <InputForm
                label="email"
                name="email"
                value={email}/>
            <InputForm
                label="password"
                name="password"
                value={password}/>
            <ButtonComponent color="yellow"size="15px" onClick={handleSubmit}>Register</ButtonComponent> 
        </form>
    </div>
      
    </div>
  )
}

export default Register
