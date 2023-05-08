import React, {useState}  from 'react'
import InputForm from '../InputForm/InputForm'
import ButtonComponent from '../Button/ButtonComponent';
import { Link } from 'react-router-dom';
import { faUserSecret,faEnvelope,faKey} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import registerImage from "../../assets/gif.gif" ;
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
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
        return emailRegex.test(email);
    }

    const validatePassword=(password)=> {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        if (validateEmail(email)){
          if(validatePassword(password)){
            const data = {
              username:username,
              email: email,
              password: password
            };
    
              axios.post("http://127.0.0.1:8000/auth/register",data,{
              headers: {
                'Content-Type': 'application/json'
              }
              })
              .then((res) => {
                  console.log(res)
                  navigate("/login")  
            }
              ).catch((err) => {
                  console.log(err);
              })
          }
    else(setError("Your password is malformed"))
        }
    else(setError("Your email is malformed"))
    }

  return (
    <div className='wrapper'>
       <div className='greet-container'>
               <h1>Welcome to  Code Junction </h1>
               <br />
               <div className='register-description'>
               <h4>Experience our real time collabration<br/>code editor AI based.</h4>
               </div>
             
        </div>
     <div className='sign-in-up-container'>
        <form className='inner-form'>
            <h2 className='header'>Create an account</h2>
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
                type='password'
                onChange={HandlePasswordChange}/>

            <div className = "error">{error}</div>
            <ButtonComponent color="yellow"size="15px" onClick={HandleSubmit}>Register</ButtonComponent> 
            <div className="register-direct">Already have an account?  <Link to="/login">Log in</Link></div>
        </form>
     </div>
    </div>
  )
}

export default Register
