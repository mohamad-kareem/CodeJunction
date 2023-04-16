import React,{useState} from 'react'
import Logo from '../../Components/Logo/Logo'
import "./codeeditorpage.css"
import Client from '../../Components/Client/Client'
import CodeEditor from '../../Components/CodeEditor/CodeEditor'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import SmartToyIcon from '@mui/icons-material/SmartToy';
const CodeEditorPage = () => {
    const [clients,setClient]=useState([{sockedtid:1,username:"kareem"},{sockedtid:2,username:"nour"},]);

  return (
    <div className='editor-wrapper'>
        <div className="leftside">
           <Logo padding="10px"/>
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
            <CodeEditor/>
        </div>
    </div>
  )
}

export default CodeEditorPage
