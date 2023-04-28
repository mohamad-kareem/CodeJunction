import React from 'react'
import "./console_editor.css"
const Console_Editor = ({output}) => {
    
    return (
        <div className='wrapper-console'>
          <div className="output-tabs output-tabs-horizontal">
            <div className="left-output">
                <div className="output-tab">Terminal</div>
                <div className="output-tab">AI</div>
            </div>
            <div className="right-output">
                <div className="output-tab">Hide</div>
            </div>
          </div>
          <div className="result">
            <textarea className='output-result' Value={output} ></textarea>
          </div>
        </div>
      )
    }

export default Console_Editor