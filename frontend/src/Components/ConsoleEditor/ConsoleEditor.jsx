import React from 'react';
import './consoleeditor.css';

const ConsoleEditor = ({ outputValue ,setShowConsole,showConsole }) => {
  
console.log( "why",outputValue)
  const handleHideClick = () => {
    setShowConsole(false);

  };
  return (
    <div className={`wrapper-console ${showConsole ? 'visible' : 'hidden'}`}>
      <div className="output-tabs output-tabs-horizontal">
        <div className="left-output">
          <div className="output-tab">Terminal</div>
          <div className="output-tab">AI</div>
        </div>
        <div className="right-output">
          <div className="output-tab" onClick={handleHideClick}>
            Hide
          </div>
        </div>
      </div>
      <div className="result">
        <textarea className="output-result" defaultValue={outputValue}></textarea>
      </div>
    </div>
  );
};

export default ConsoleEditor;
