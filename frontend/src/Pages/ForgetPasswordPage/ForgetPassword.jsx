import React,{useState,useContext} from 'react'
import { UserContext } from '../../Context/Context';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import InputForm from '../../Components/InputForm/InputForm';
import ButtonComponent from '../../Components/Button/ButtonComponent';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import loginImage from "../../assets/ezgif.com-resize.gif"
import { ForgotPasswordTranslation } from '../../Components/Languages/Lang';
const ForgetPassword = () => {

    const userlang=useContext(UserContext)
    const lan = ForgotPasswordTranslation[userlang.language]

    const [email,setEmail]=useState("");

    const HandleEmailChange=(e)=>setEmail(e.target.value);

    const HandleSubmit=(e)=>{
        e.preventDefault();
        axios
          .post("http://127.0.0.1:8000/auth/forget-password-notification",{ email: email }, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
    };

  return (
    <>
        <Navbar/>
        <div className='wrapper'>
        <div className='image-container'>
            <img src={loginImage} alt='registration' />
        </div>
        <div className='sign-in-up-container'>
            <form className='inner-form'>
                <h2 className='header'>{lan.forgotpassword}</h2><br />
                <InputForm
                    label={lan.email}
                    name="email"
                    value={email}
                    onChange={HandleEmailChange}
                    icon={faEnvelope}
                />
                <ButtonComponent color="yellow"size="15px" onClick={HandleSubmit}>{lan.resetpassword}</ButtonComponent> 
            </form>
        </div>
        </div>
    </>
  )
}

export default ForgetPassword
