import React from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import toast from "react-hot-toast";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SaveIcon from '@mui/icons-material/Save';


const EditorNavigator = () => {
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
        <div className="row">
            <div id='icon'>{<SaveIcon/>}</div>
            <div id='title'>Save Code</div>
        </div>
        <div className="row">
            <div id='icon'>{<SmartToyIcon/>}</div>
            <div id='title'>Ask ChatGPT</div>
        </div>
    </div>
  )
}

export default EditorNavigator
