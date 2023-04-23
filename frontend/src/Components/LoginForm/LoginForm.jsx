import React,{useState} from 'react'
import {faEnvelope,faKey} from '@fortawesome/free-solid-svg-icons';
import InputForm from '../InputForm/InputForm';
import ButtonComponent from '../Button/ButtonComponent';
import { Link } from 'react-router-dom';
import loginImage from "../../assets/ezgif.com-resize.gif"
import { useNavigate } from "react-router-dom";
import "./signInOut.css"
import axios from 'axios';

const LoginForm = () => {

    const navigate = useNavigate();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const HandleEmailChange=(e)=>setEmail(e.target.value);
    const HandlePasswordChange=(e)=>setPassword(e.target.value);


    const HandleSubmit=(e)=>{
        e.preventDefault();
        const data = {
          email: email,
          password: password,
        };
        axios
          .post("http://127.0.0.1:8000/auth/login", data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res);
            localStorage.setItem('token',res.data.token);
            navigate('/home');
          })
          .catch((err) => {
            console.log(err);
          });
    };
    
return (
    <div className='wrapper'>
      <div className='image-container'>
        <img src={loginImage} alt='registration' />
      </div>
      <div className='sign-in-up-container'>
        <form className='inner-form'>
          <h2 className='header'>Sign In</h2>
              <InputForm
                label="email address"
                name="email"
                value={email}
                onChange={HandleEmailChange}
                icon={faEnvelope}
            />
              <InputForm
                label="password"
                name="password"
                type='password'
                value={password}
                onChange={HandlePasswordChange}
                icon={faKey}
            />
            <ButtonComponent color="yellow"size="15px"onClick={HandleSubmit}>Sign in</ButtonComponent> 
            <div className="forget-password"><Link to="">Forget Password</Link></div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
