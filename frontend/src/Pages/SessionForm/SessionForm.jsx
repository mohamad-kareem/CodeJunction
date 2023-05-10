import React, { useState,useContext } from 'react'
import { UserContext } from '../../Context/Context'
import InputForm from '../../Components/InputForm/InputForm'
import ButtonComponent from '../../Components/Button/ButtonComponent'
import "./sessionform.css"
import Navbar from '../../Components/Navbar/Navbar'
import CopyRights from '../../Components/CopyRight/CopyRight'
import toast from "react-hot-toast";
import { faUserSecret,faKey} from '@fortawesome/free-solid-svg-icons';
import {v4 as uuidV4} from "uuid";
import { useNavigate } from 'react-router-dom'
import { SessionTranslation } from '../../Components/Languages/Lang'
const SessionForm = () => {

    const userlang=useContext(UserContext)
    const lan = SessionTranslation[userlang.language]

    const [roomId,setRoomId]=useState("");
    const [username,setUserName]=useState("")
    const navigate=useNavigate()
    const generateNewId=(e)=>{
        e.preventDefault();
        const id=uuidV4()
        setRoomId(id)
        toast.success("New room generated")
    }
    const Join=()=>{
        if(!roomId || !username){
            toast.error("Fill required fields")
            return;
        }
        navigate(`/editor/${roomId}`,{
            state:{
                username,
            }
        })
    }
    const HandleEnter =(e)=>{
        if (e.code==='Enter'){
            Join();
        }

    }
  return (
    <div className="page-wrapper">
            <Navbar/>
        <div className='session-wrapper'>
            <div className="inner-form">
            <h1>{lan.create}</h1>
              <InputForm
                    label={lan.username}
                    name="username"
                    icon={faUserSecret}
                    value={username}
                    onChange={(e)=>setUserName(e.target.value)}
                    onKeyUp={HandleEnter}
                   
                />
                <InputForm
                    label={lan.roomid}
                    name="Room ID"
                    icon={faKey}
                    value={roomId}
                    onChange={(e)=>setRoomId(e.target.value)}
                    onKeyUp={HandleEnter}
                />
                <ButtonComponent children={lan.join} width='100px' className="join-btn"  onClick={Join}/>
                <span className='generate-container'>{lan.text} <a href="##" className='generate' onClick={generateNewId}>{lan.click}</a> </span>
            </div>
        </div>
        <CopyRights/>
    </div>
  )
}

export default SessionForm
