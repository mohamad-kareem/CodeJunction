import React from 'react'
import InputForm from '../../Components/InputForm/InputForm'
import ButtonComponent from '../../Components/Button/ButtonComponent'
import "./sessionform.css"
import Navbar from '../../Components/Navbar/Navbar'
import Logo from '../../Components/Logo/Logo'
import CopyRights from '../../Components/CopyRight/CopyRight'
const SessionForm = () => {
  return (
    <div className="page-wrapper">
            <Navbar/>
        <div className='session-wrapper'>
            <div className="inner-form">
            <h1>War Room</h1>
                <InputForm
                label="ID ROOM"
                name="ID ROOM"
                />
                <InputForm
                label="username"
                name="username"
                />
                <ButtonComponent children={"Join"} width='100px' className="join-btn"/>
                <span className='generate-container'>Generate room ID &nbsp; <a href="" className='generate'>Click Here</a> </span>
            </div>
        </div>
        <CopyRights/>
    </div>
  )
}

export default SessionForm
