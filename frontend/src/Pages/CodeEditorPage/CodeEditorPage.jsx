import React,{useEffect, useRef, useState} from 'react'
import Logo from '../../Components/Logo/Logo'
import "./codeeditorpage.css"
import Client from '../../Components/Client/Client'
import CodeEditor from '../../Components/CodeEditor/CodeEditor'
import EditorNavigator from '../../Components/EditorNavigator/EditorNavigator'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ButtonComponent from '../../Components/Button/ButtonComponent'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
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
    const [language, setLanguage] = useState('Language');
    const [fixedCode,setFixedCode]=useState("")
    
    const languageChoices = {
        python: '5',
        php: '8',
        javascript: '17',
        ruby:'12',
      };

    const handleRunClick = async (language) => {
		const encodedParams = new URLSearchParams();
        encodedParams.set('LanguageChoice', languageChoices[language]);
        encodedParams.set('Program', code);
		const options = {
            method: 'POST',
            url: 'https://code-compiler.p.rapidapi.com/v2',
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'X-RapidAPI-Key': '27592b9488msh6c58c67cbb4a1f7p1607b5jsn364d129f6813',
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
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(event.target.value);
        localStorage.setItem("language", selectedLanguage);
        
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
                    <div >{<KeyboardBackspaceIcon  className='back-icon' onClick={handleBackClick} />}</div>
                    <div >
                        {<CreateNewFolderIcon className='add-folder' onClick={showfolder} />}
                        {ShowFolder ? (<CreateFolder HideFolder={showfolder} />) : null}
                    </div>
                    <div className="choose-lan" > 
                        <select value={language} onChange={handleLanguageChange} >
                            <option  disabled>Language</option>
                            <option value="php" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;php</option>
                            <option value="python">&nbsp;&nbsp;&nbsp;python</option>
                            <option value="javascript">javascript</option>
                            <option value="ruby">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ruby</option>
                        </select>
                    </div>
                    </div>
                    <div className='run-buttom-container'>
                    <PlayCircleFilledWhiteIcon  className='run-button'  onClick={() => handleRunClick(language)} />
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
                <CodeEditor socketRef={socketRef} roomId={roomId} setCode={setCode} language={language} fixedCode={fixedCode} setFixedCode={setFixedCode}/>
               
         
                <ConsoleEditor outputValue={outputValue} showConsole={showConsole} setShowConsole={setShowConsole} code={code} setFixedCode={setFixedCode}/>
            </div>
    </div>
  )
}

export default CodeEditorPage
