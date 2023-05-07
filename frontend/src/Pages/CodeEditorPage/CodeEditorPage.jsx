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
import ConsoleEditor from '../../Components/ConsoleEditor/ConsoleEditor'
import Advice from '../../Components/Advice/Advice'
import Evaluation from '../../Components/Evaluation/Evaluation'
import axios from 'axios'

const CodeEditorPage = () => {
    const [code,setCode]=useState("");
    const socketRef= useRef(null);
    const location=useLocation()
    const {roomId}=useParams();
    const [clients,setClients]=useState([]);
    const [ShowFolder, setShowFolder] = useState(false);
    const navigate = useNavigate();
    const connectionNavigator=useNavigate();
    const [showAdvice, setShowAdvice] = useState(false);
    const [advice,setadvice]=useState("")
    const [evaluation,setEvaluation]=useState("")
    const [showEvaluation,setShowEvaluation]=useState(false)
	const [outputValue, setOutputValue] = useState("");
    const [showConsole,setShowConsole]=useState(true)
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleRunClick = async () => {
		const encodedParams = new URLSearchParams();
        encodedParams.set('LanguageChoice', '8');
        encodedParams.set('Program', code);
		const options = {
            method: 'POST',
            url: 'https://code-compiler.p.rapidapi.com/v2',
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'X-RapidAPI-Key': 'f7a0f6300bmsh11332db38f5807ep1fc052jsn7ad184d0acda',
              'X-RapidAPI-Host': 'code-compiler.p.rapidapi.com'
            },
            data: encodedParams,
          };

		try {
			const response = await axios.request(options);
			console.log(response);
			const output = response.data.Result;
			if (output ) {
				setOutputValue(output);
                setShowConsole(true)
			} else {
				setOutputValue(response.data.Errors)
                setShowConsole(true);
			}
		} catch (error) {
			console.error(error);
		}
	};
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
                window.location.reload();
            })

            socketRef.current.on(DoList.RECEIVE_MESSAGE, ({ username, message }) => {
                setMessages((prev) => [...prev, { username, message }]);
                {isChatOpen && (
                toast.success(` send a message`))}
            });

        }
        webSocket();
        return () =>{
            socketRef.current.disconnect();
            socketRef.current.off(DoList.JOINED);
            socketRef.current.off(DoList.DISCONNECTED)
        }
    },[location.state?.username, connectionNavigator, roomId])


    const handleSendMessage = () => {
        if (message.trim() !== "") {
            socketRef.current.emit(DoList.SEND_MESSAGE, {
                roomId,
                username: location.state?.username,
                message,
            });
            setMessages((prev) => [...prev, { username: "You", message }]);
            setMessage("");
        }
    };
   
    function handleBackClick() {
        navigate(-1);
    }

    const showfolder = () => {
        setShowFolder(!ShowFolder);
        
    };
    const HideAdvice = ()=>{
        setShowAdvice(!showAdvice)
    }
    const HideEvaluation=()=>{
        setShowEvaluation(!showEvaluation)
    }

    if (!location.state){
        return   <Navigate to="/"/>
       }  
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };
    
return (
    <div className='editor-wrapper'>
        <div className="leftside">
           <Logo padding="10px" borderBottom={"1px solid rgb(122, 175, 16)"}/>
           <EditorNavigator  setShowAdvice={setShowAdvice} code={code} setAdvice={setadvice} setEvaluation={setEvaluation} setShowEvaluation={setShowEvaluation} setIsChatOpen={setIsChatOpen} isChatOpen={isChatOpen}/>
           <div>
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
                    <div >{<ArrowBackIcon  className='back-icon' onClick={handleBackClick} />}</div>
                    <div >
                        {<CreateNewFolderIcon className='add-folder' onClick={showfolder} />}
                        {ShowFolder ? (<CreateFolder HideFolder={showfolder} />) : null}
                    </div>
                    </div>
                    <div>
                    <ButtonComponent width='100px' children={"Run"} onClick={handleRunClick} />
                    </div>
                </div>
                <div>
                  {showEvaluation ? <Evaluation evaluation={evaluation} HideEvaluation={HideEvaluation} />:null}  
                </div>
                <div>
                    
                {showAdvice? <Advice advice={advice}  HideAdvice={HideAdvice }/> : null}
                </div>
                {isChatOpen && (
                <div className="chat-wrapper">
                    <div className="chat-container">
                        <textarea name="messages" id="messages" cols="1" rows="1" value={messages.map((m) => `${m.username}: ${m.message}`).join("\n")} readOnly ></textarea>
                        <span><input type="text" className='chat-input'  value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={handleKeyDown} /></span>
                        <button className='chat-button' onClick={handleSendMessage}>send</button>
                    </div>
                </div>)}
                <CodeEditor socketRef={socketRef} roomId={roomId} setCode={setCode}/>
               
         
                <ConsoleEditor outputValue={outputValue} showConsole={showConsole} setShowConsole={setShowConsole}/>
            </div>
    </div>
  )
}

export default CodeEditorPage
