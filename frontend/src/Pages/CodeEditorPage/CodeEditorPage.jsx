import React,{useEffect, useRef, useState} from 'react'
import Logo from '../../Components/Logo/Logo'
import "./codeeditorpage.css"
import Client from '../../Components/Client/Client'
import CodeEditor from '../../Components/CodeEditor/CodeEditor'
import EditorNavigator from '../../Components/EditorNavigator/EditorNavigator'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ButtonComponent from '../../Components/Button/ButtonComponent'
import { initSocket } from '../../SocketConnections/socket'
import DoList from  "../../SocketConnections/DoList.js"
import { useLocation,useNavigate,Navigate ,useParams} from 'react-router-dom'
import toast from "react-hot-toast";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CreateFolder from '../../Components/CreateFolder/CreateFolder'

const CodeEditorPage = () => {

    const socketRef= useRef(null);
    const location=useLocation()
    const {roomId}=useParams();
    const [clients,setClients]=useState([]);
    const [ShowFolder, setShowFolder] = useState(false);

    const navigate = useNavigate();
    const connectionNavigator=useNavigate();

    useEffect(()=>{
        const webSocket =async () =>{

            socketRef.current =await initSocket();

            socketRef.current.on('connect_error', handleErrors);
            socketRef.current.on('connect_fail', handleErrors);

            function handleErrors(e) {
                console.log('socket error', e);
                toast.error('Socket connection failed, try again later.');
                connectionNavigator('/');
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
    },[location.state?.username, connectionNavigator, roomId])

   
    function handleBackClick() {
        navigate('/');
    }

    const showup = () => {
        setShowFolder(!ShowFolder);
    };


    if (!location.state){
        return   <Navigate to="/"/>
       }  
       
return (
    <div className='editor-wrapper'>
        <div className="leftside">
           <Logo padding="10px" borderBottom={"1px solid rgb(122, 175, 16)"}/>
           <EditorNavigator/>
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
                    <div >{<ArrowBackIcon  className='back-icon' onClick={handleBackClick} />}</div>
                    <div >
                        {<CreateNewFolderIcon className='add-folder' onClick={showup} />}
                        {ShowFolder ? (<CreateFolder HideFolder={showup} />) : null}
                    </div>
                    </div>
                    <div>
                    <ButtonComponent width='100px' children={"Run"}/>
                    </div>
                </div>
                <CodeEditor socketRef={socketRef} roomId={roomId}/>
            </div>
    </div>
  )
}

export default CodeEditorPage
