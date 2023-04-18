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
import DoList from  "../../SocketConnections/DoList.js"
import { useLocation,useNavigate,Navigate ,useParams} from 'react-router-dom'
import toast from "react-hot-toast";
const CodeEditorPage = () => {

    const socketRef= useRef(null);
    const location=useLocation()
    const {roomId}=useParams();
    const reactNavigator=useNavigate();
    const [clients,setClients]=useState([]);

    useEffect(()=>{
        const webSocket =async () =>{
            socketRef.current =await initSocket();

            socketRef.current.on('connect_error', handleErrors);
            socketRef.current.on('connect_fail', handleErrors);

            function handleErrors(e) {
                console.log('socket error', e);
                toast.error('Socket connection failed, try again later.');
                reactNavigator('/');
              }

            socketRef.current.emit(DoList.JOIN, {
                roomId,
                username:location.state?.username,
            });

            socketRef.current.on(DoList.JOINED, ({ clients, username, sockedtId }) => {
               
                if (username !== location.state?.username) {
                  toast.success(`${username} joined the room`);
                  console.log(`${username} joined`);
                }
                setClients(clients);
              });
            socketRef.current.on(DoList.DISCONNECTED,({sockedtId,username})=>{
                toast.success(`${username} left the room `)
                setClients((prev)=>{
                    return prev.filter((client) => client.sockedtId!==sockedtId)
                })
            })

        }
        webSocket();
        return () =>{
            socketRef.current.disconnect();
            socketRef.current.off(DoList.JOINED);
            socketRef.current.off(DoList.DISCONNECTED)
        }
    },[])


    
    if (!location.state){
        return   <Navigate to="/"/>
       }  
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
                <CodeEditor socketRef={socketRef} roomId={roomId}/>
                
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
