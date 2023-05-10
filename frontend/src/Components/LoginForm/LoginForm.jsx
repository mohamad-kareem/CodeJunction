import React,{useState,useContext}from 'react'
import { UserContext } from '../../Context/Context';
import {faEnvelope,faKey} from '@fortawesome/free-solid-svg-icons';
import InputForm from '../InputForm/InputForm';
import ButtonComponent from '../Button/ButtonComponent';
import { Link } from 'react-router-dom';
import loginImage from "../../assets/ezgif.com-resize.gif"
import { useNavigate } from "react-router-dom";
import "./signInOut.css"
import axios from 'axios';
import { UserAuthTranslation } from '../Languages/Lang';

const LoginForm = () => {

    const navigate = useNavigate();

    const userlang=useContext(UserContext)
    const lan = UserAuthTranslation[userlang.language]

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
            navigate('/activities');
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
          <h2 className='header'>{lan.signin}</h2>
              <InputForm
                label={lan.emailaddress}
                name="email"
                value={email}
                onChange={HandleEmailChange}
                icon={faEnvelope}
            />
              <InputForm
                label={lan.password}
                name="password"
                type='password'
                value={password}
                onChange={HandlePasswordChange}
                icon={faKey}
            />
            <ButtonComponent color="yellow"size="15px"onClick={HandleSubmit}>{lan.submit}</ButtonComponent> 
            <div className="forget-password"><Link to="/forget-password">{lan.forgotpassword}</Link></div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
