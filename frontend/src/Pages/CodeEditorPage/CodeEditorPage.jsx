import React,{useState} from 'react'
import Logo from '../../Components/Logo/Logo'
import "./codeeditorpage.css"
import Client from '../../Components/Client/Client'
const CodeEditorPage = () => {
    const [clients,setClient]=useState([{sockedtid:1,username:"kareem"},{sockedtid:2,username:"nour"}]);

  return (
    <div className='editor-wrapper'>
        <div className="leftside">
            <div className="top">
              <Logo padding="10px"/>
            </div>
            <div className='connections'>
                 <h2>Connected</h2>
                {clients.map((client)=>(
                   <Client key={client.sockedtid} username={client.username}/>
                ))}
            </div>
        </div>
        <div className="rightside"></div>
    </div>
  )
}

export default CodeEditorPage
