import React, {useState}  from 'react'
import InputForm from '../InputForm/InputForm'
import ButtonComponent from '../Button/ButtonComponent';
import { Link } from 'react-router-dom';
import "../Css/signInOut.css"
import { faUserSecret,faEnvelope,faKey} from '@fortawesome/free-solid-svg-icons';
const Register = () => {

    const [username,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const HandleUserNameChange=(e)=>setUserName(e.target.value);
    const HandleEmailChange=(e)=>setEmail(e.target.value);
    const HandlePasswordChange=(e)=>setPassword(e.target.value);
console.log(HandleEmailChange)
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
                value={username}
                icon={faUserSecret}
                onChange={HandleUserNameChange}/>
            <InputForm
                label="email"
                name="email"
                value={email}
                icon={faEnvelope}
                onChange={HandleEmailChange}
                />
            <InputForm
                label="password"
                name="password"
                value={password}
                icon={faKey}
                onChange={HandlePasswordChange}/>
            <ButtonComponent color="yellow"size="15px" onClick={handleSubmit}>Register</ButtonComponent> 
            <div className="register-direct">Already have an account?  <Link to="/login">Log in</Link></div>
        </form>
    </div>
      
    </div>
  )
}

export default Register
