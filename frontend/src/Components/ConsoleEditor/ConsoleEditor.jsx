import React, { useState } from 'react';
import './consoleeditor.css';

const ConsoleEditor = ({ output }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleHideClick = () => {
    setIsVisible(false);
  };

  return (
    <div className={`wrapper-console ${isVisible ? 'visible' : 'hidden'}`}>
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
        <textarea className="output-result" value={output}></textarea>
      </div>
    </div>
  );
};

export default ConsoleEditor;
