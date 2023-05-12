import React,{useContext} from 'react'
import { UserContext } from '../../Context/Context';
import {useParams} from 'react-router-dom'
import toast from "react-hot-toast";
import axios from 'axios'
import { EditorNavTranslation } from '../Languages/Lang';
import copy from '../../icons/copy.png'
import chat from '../../icons/chat.png'
import save from '../../icons/floppy.png'
import robot from '../../icons/robot.png'
import evaluate from '../../icons/evaluate.png'

const EditorNavigator = ({ code,setShowAdvice,setAdvice,setEvaluation,setShowEvaluation,isChatOpen={isChatOpen},setIsChatOpen={setIsChatOpen}}) => {

    const {roomId}=useParams();

    const userlang=useContext(UserContext)
    const lan = EditorNavTranslation[userlang.language]

    async function copyRoomId() {
        console.log('Copying room ID...');
            try{
                await navigator.clipboard.writeText(roomId);
                toast.success('Room ID has been copied') 
            }
            catch(err){
                toast.error("could not copy ID");
                console.error(err)
            }
    }
    
     const handleSaveCode = async () => {
        try{
            const token = localStorage.getItem("token");
            await axios.put(
              "http://localhost:8000/updateCode/",
              { roomId, code },
              { headers: { Authorization: `Bearer ${token}` } }
            );
            toast.success("code saved successfully");        
        }catch(error){
            console.error(error);
            toast.success("was not saved");
        }
     }
     
     const handleAnalyzeCode = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(
                'http://localhost:8000/analyze',
                { code },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            const score = response.data.answer;
            let message = `${lan.msg1} ${score} ${lan.msg2}. `;
    
            if (score === 0) {
                message += `${lan.score0}`;
            } else if (score === 1) {
                message += `${lan.score1}`;
            } else if (score === 2) {
                message += `${lan.score2}`;
            } else if (score === 3) {
                message += `${lan.score3}`;
            } else if (score === 4) {
                message += `${lan.score4}`;
            } else if (score === 5) {
                message += `${lan.score5}`;
            } else if (score === -1) {
                message += `${lan.score6}`;
            } else if (score === -2) {
                message += `${lan.score7}`;
            } 
            setEvaluation(message);
            setShowEvaluation(true);
        } catch (error) {
            console.error(error);
            toast.success("Try again");
        }
    };
    
    
     const handleAdviceCode = async () => {
        try{
            const token = localStorage.getItem("token");
            const response = await axios.post(
                'http://localhost:8000/advice',
                { code },
                { headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                } 
                }
            );
            console.log(response.data.answer);
     const advice=response.data.answer
      setAdvice(advice)
      setShowAdvice(true)
     await axios.put(
        'http://localhost:8000/updateDailyValue',
        { value: 0.25 },
        { 
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          } 
        }
      );
    } catch (error) {
      console.error(error);
      toast.success("try again");
    };
     };
    const handleChatClick = () => {
        setIsChatOpen(!isChatOpen);
      };
     
  return (
    <div className="rows">
        <div className="row" onClick={copyRoomId}>
            <div id='icon' className='copy'><img src={copy} alt="copy" /></div>
            <div id='title'>{lan.shareroomid}</div>
        </div>
        <div className="row" onClick={handleChatClick}>
            <div id='icon'><img src={chat} alt="chat" /></div>
            <div id='title'>{lan.chat}</div>
        </div>
        <div className="row"onClick={handleSaveCode}>
            <div id='icon'><img src={save} alt="save" /></div>
            <div id='title'>{lan.savecode}</div>
        </div>
        <div className="row" onClick={handleAnalyzeCode}>
            <div id='icon'><img src={evaluate} alt="save" /></div>
            <div id='title'>{lan.evaluate}</div>
        </div>
        <div className="row"onClick={handleAdviceCode}>
            <div id='icon'><img src={robot} alt="save" /></div>
            <div id='title'>{lan.AiAdvice}</div>
        </div>
    </div>
  )
}

export default EditorNavigator
