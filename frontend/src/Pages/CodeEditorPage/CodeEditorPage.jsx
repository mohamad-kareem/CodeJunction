import React,{useEffect, useRef, useState} from 'react'
import Logo from '../../Components/Logo/Logo'
import "./codeeditorpage.css"
import Client from '../../Components/Client/Client'
import CodeEditor from '../../Components/CodeEditor/CodeEditor'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ButtonComponent from '../../Components/Button/ButtonComponent'
import { initSocket } from '../../SocketConnections/socket'
import DoList from  "../../SocketConnections/DoList.js"
import { useLocation,useNavigate,Navigate ,useParams} from 'react-router-dom'
import toast from "react-hot-toast";
import AddIcon from '@mui/icons-material/Add';
const CodeEditorPage = () => {

    const socketRef= useRef(null);
    const location=useLocation()
    const {roomId}=useParams();
    const [clients,setClients]=useState([]);

    const navigate = useNavigate();
    const reactNavigator=useNavigate();

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

            socketRef.current.on(DoList.JOINED, ({ clients, username}) => {
               
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
    },[location.state?.username, reactNavigator, roomId])

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
        reactNavigator("/");
    }
    function handleBackClick() {
        navigate('/');
    }
    
    if (!location.state){
        return   <Navigate to="/"/>
       }  
       
return (
    <div className='editor-wrapper'>
        <div className="leftside">
           <Logo padding="10px" borderBottom={"1px solid rgb(122, 175, 16)"}/>
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
                <div id='icon'>{<SmartToyIcon/>}</div>
                <div id='title'>Ask ChatGPT</div>
           </div>
           </div>
           <div className="buttom">
                <h3>Connected</h3>
                <div className="connections">
                    {clients && clients.map((client) => (
                        <Client key={client.socketId} username={client.username} />
                    ))}
            </div>
            </div>

        </div>
        
            <div className="rightside">
                <div className='code-header'>
                    <div className="options" >
                    <div >{<KeyboardBackspaceIcon className='back-icon' onClick={handleBackClick} />}</div>
                    <div >{<AddIcon className='add-folder'  />}</div>
                    </div>
                    <div>
                    <ButtonComponent width='100px' children={"Save"} margin={"4px"}/>
                    <ButtonComponent width='100px' children={"Run"}/>
                    </div>
                </div>
                <CodeEditor socketRef={socketRef} roomId={roomId}/>
            </div>
      
    </div>
  )
}

export default CodeEditorPage
