import React from 'react'
import InputForm from '../../Components/InputForm/InputForm'
import ButtonComponent from '../../Components/Button/ButtonComponent'
import "./sessionform.css"
import Navbar from '../../Components/Navbar/Navbar'
import CopyRights from '../../Components/CopyRight/CopyRight'
import { faUserSecret,faKey} from '@fortawesome/free-solid-svg-icons';
import {v4 as uuidV4} from "uuid";
const SessionForm = () => {
    const generateNewId=(e)=>{
        e.preventDefault();
        const id=uuidV4()
        console.log(id)
    }
  return (
    <div className="page-wrapper">
            <Navbar/>
        <div className='session-wrapper'>
            <div className="inner-form">
            <h1>War Room</h1>
              <InputForm
                    label="username"
                    name="username"
                    icon={faUserSecret}
                />
                <InputForm
                    label="ID ROOM"
                    name="ID ROOM"
                    icon={faKey}
                />
                <ButtonComponent children={"Join"} width='100px' className="join-btn"/>
                <span className='generate-container'>Generate room ID  <a href="" className='generate' onClick={generateNewId}>Click Here</a> </span>
            </div>
        </div>
        <CopyRights/>
    </div>
  )
}

export default SessionForm
