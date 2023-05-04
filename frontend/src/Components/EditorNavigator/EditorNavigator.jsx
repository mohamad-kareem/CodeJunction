import React from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import toast from "react-hot-toast";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SaveIcon from '@mui/icons-material/Save';
import GavelIcon from '@mui/icons-material/Gavel';
import axios from 'axios'

const EditorNavigator = ({ code,setShowAdvice,setAdvice,setEvaluation,setShowEvaluation}) => {

    const {roomId}=useParams();
    const connectionNavigator=useNavigate();

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
    function leaveRoom (){
        connectionNavigator("/");
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
            let message = `You got ${score} points. `;
    
            if (score === 0) {
                message += "you got zero points.Please try again.";
            } else if (score === 1) {
                message += "You can do better.";
            } else if (score === 2) {
                message += "You can just practice more.";
            } else if (score === 3) {
                message += "Good job!";
            } else if (score === 4) {
                message += "Great job!";
            } else if (score === 5) {
                message += "Excellent work!";
            } else {
                message += "Congrats!";
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
     
  return (
    <div className="rows">
        <div className="row" onClick={copyRoomId}>
            <div id='icon' className='copy'>{< ContentCopyIcon/>}</div>
            <div id='title'>Share Room ID</div>
        </div>
        <div className="row" onClick={leaveRoom}>
            <div id='icon'>{<DoNotDisturbIcon/>}</div>
            <div id='title'>Stop Session</div>
        </div>
        <div className="row"onClick={handleSaveCode}>
            <div id='icon'>{<SaveIcon/>}</div>
            <div id='title'>Save Code</div>
        </div>
        <div className="row" onClick={handleAnalyzeCode}>
            <div id='icon'>{<GavelIcon />}</div>
            <div id='title'>Evaluate</div>
        </div>
        <div className="row"onClick={handleAdviceCode}>
            <div id='icon'>{<SmartToyIcon/>}</div>
            <div id='title'>AI Advice</div>
        </div>
    </div>
  )
}

export default EditorNavigator
