import React,{useEffect, useRef, useState} from 'react'
import Logo from '../../Components/Logo/Logo'
import "./codeeditorpage.css"
import Client from '../../Components/Client/Client'
import CodeEditor from '../../Components/CodeEditor/CodeEditor'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ButtonComponent from '../../Components/Button/ButtonComponent'
import { initSocket } from '../../SocketConnections/socket'
const CodeEditorPage = () => {

    const socketRef= useRef(null);
    useEffect(()=>{
        const webSocket =async () =>{
            socketRef.current =await initSocket();
        }
        webSocket();
    },[])

    const [clients,setClient]=useState([{sockedtid:1,username:"kareem"},{sockedtid:2,username:"nour"},]);

  return (
    <div className='editor-wrapper'>
        <div className="leftside">
           <Logo padding="10px" borderBottom={"1px solid rgb(122, 175, 16)"}/>
            <div className="rows">
            <div className="row">
                <div id='icon'>{< ContentCopyIcon/>}</div>
                <div id='title'>Share Room ID</div>
           </div>
           <div className="row">
                <div id='icon'>{<DoNotDisturbIcon/>}</div>
                <div id='title'>Stop Session</div>
           </div>

           <div className="row">
                <div id='icon'>{<SmartToyIcon/>}</div>
                <div id='title'>Ask ChatGPT</div>
           </div>
           </div>
           <div className="buttom">
                <h3>Connected</h3>
                <div className='connections'>
                    {clients.map((client)=>(
                    <Client key={client.sockedtid} username={client.username}/>
                    ))}
                </div>
            </div>

        </div>
        
            <div className="rightside">
                <div className='code-header'>
                    <ButtonComponent width='100px' children={"Save"} margin={"4px"}/>
                    <ButtonComponent width='100px' children={"Run"}/>
                </div>
                <CodeEditor/>
                
                <div className="code-output">
                    <div className="output-tabs output-tabs-horizontal">
                        <div className="output-tab">console</div>
                        <div className="output-tab">output</div>
                        <div className="output-tab">problems</div>
                    </div>
                    <textarea className="output-textarea"></textarea>
                </div>
            </div>
      
    </div>
  )
}

export default CodeEditorPage
