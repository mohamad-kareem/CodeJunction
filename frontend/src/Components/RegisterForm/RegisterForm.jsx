import React, {useState,useContext}  from 'react'
import { UserContext } from '../../Context/Context';
import InputForm from '../InputForm/InputForm'
import ButtonComponent from '../Button/ButtonComponent';
import { Link } from 'react-router-dom';
import { faUserSecret,faEnvelope,faKey} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { UserAuthTranslation } from '../Languages/Lang';
const Register = () => {

    const navigate = useNavigate();

    const userlang=useContext(UserContext)
    const lan = UserAuthTranslation[userlang.language]

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
               <h1>{lan.welcome}</h1>
               <br />
               <div className='register-description'>
               <h4>{lan.info1}<br/>{lan.info2}</h4>
               </div>
             
        </div>
     <div className='sign-in-up-container'>
        <form className='inner-form'>
            <h2 className='header'>{lan.account}</h2>
            <InputForm
                label={lan.username}
                name="username"
                value={username}
                icon={faUserSecret}
                onChange={HandleUserNameChange}/>
            <InputForm
                label={lan.emailaddress}
                name="email"
                value={email}
                icon={faEnvelope}
                onChange={HandleEmailChange}
                />
            <InputForm
                label={lan.password}
                name="password"
                value={password}
                icon={faKey}
                type='password'
                onChange={HandlePasswordChange}/>

            <div className = "error">{error}</div>
            <ButtonComponent color="yellow"size="15px" onClick={HandleSubmit}>{lan.submit}</ButtonComponent> 
            <div className="register-direct">{lan.already}?  <Link to="/login">{lan.login}</Link></div>
        </form>
     </div>
    </div>
  )
}

export default Register
