import React, {useState}  from 'react'
import InputForm from '../InputForm/InputForm'
import ButtonComponent from '../Button/ButtonComponent';
import { Link } from 'react-router-dom';
import "../Css/signInOut.css"
import { faUserSecret,faEnvelope,faKey} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import registerImage from "../../assets/gif.gif" ;
const Register = () => {

    const [username,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[error,setError]=useState("");


    const HandleUserNameChange=(e)=>setUserName(e.target.value);
    const HandleEmailChange=(e)=>setEmail(e.target.value);
    const HandlePasswordChange=(e)=>setPassword(e.target.value);
    console.log(HandleEmailChange,HandlePasswordChange,HandleUserNameChange)

    const validateEmail=(email) =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);}

    const validatePassword=(password)=> {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateEmail(email)){
          if(validatePassword(password)){
            const data = {
              username:username,
              email: email,
              password: password
            };
    
              axios.post("",data,{
              headers: {
                'Content-Type': 'application/json'
              }
              })
              .then((res) => {
                  console.log(res)
                  window.location.href="../../Pages/LandingPage/LandingPage.jsx"  
            }
              ).catch((err) => {
                  console.log(err);
              })
    }else(setError("Your password is malformed"))
    }else(setError("Your email is malformed"))
    }

  return (
    <div className='wrapper'>
       <div className='image-container'>
                <img src={registerImage} alt='registration' />
        </div>
     <div className='sign-in-up-container'>
        <form className='inner-form'>
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

            <div className = "error">{error}</div>
            <ButtonComponent color="yellow"size="15px" onClick={handleSubmit}>Register</ButtonComponent> 
            <div className="register-direct">Already have an account?  <Link to="/login">Log in</Link></div>
        </form>
    </div>
      
    </div>
  )
}

export default Register
