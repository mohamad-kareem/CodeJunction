import React from 'react'
import Logo from '../../Components/Logo/Logo'
import "./codeeditorpage.css"
const CodeEditorPage = () => {
  return (
    <div className='editor-wrapper'>
        <div className="leftside">
            <div className="top">
              <Logo padding="10px"/>
            </div>
            <div className='connections'>
                 <h2>Connected</h2>
                 
            </div>
        </div>
        <div className="rightside"></div>
    </div>
  )
}

export default CodeEditorPage
