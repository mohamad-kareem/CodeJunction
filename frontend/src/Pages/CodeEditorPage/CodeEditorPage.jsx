import React,{useState} from 'react'
import Logo from '../../Components/Logo/Logo'
import "./codeeditorpage.css"
import Client from '../../Components/Client/Client'
import ButtonComponent from '../../Components/Button/ButtonComponent'
import CodeEditor from '../../Components/CodeEditor/CodeEditor'
const CodeEditorPage = () => {
    const [clients,setClient]=useState([{sockedtid:1,username:"kareem"},{sockedtid:2,username:"nour"}]);

  return (
    <div className='editor-wrapper'>
        <div className="leftside">
            <div className="top">
                <Logo padding="10px"/>
                <h3>Connected</h3>
                <div className='connections'>
                    {clients.map((client)=>(
                    <Client key={client.sockedtid} username={client.username}/>
                    ))}
                </div>
            </div>
            <ButtonComponent width='140px' children="Leave room"/>
            <ButtonComponent width='100px' children="Shar"/>
            <ButtonComponent width='100px' children="As"/>

        </div>
        <div className="rightside">
            <CodeEditor/>
        </div>
    </div>
  )
}

export default CodeEditorPage
