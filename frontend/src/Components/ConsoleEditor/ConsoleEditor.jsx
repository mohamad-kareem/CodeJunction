import React from 'react';
import './consoleeditor.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';
import toast from "react-hot-toast";
const ConsoleEditor = ({ outputValue ,setShowConsole,showConsole,code,setFixedCode }) => {
  
  const handleHideClick = () => {
    setShowConsole(false);
  };
  const AutoCorrect = async() =>{
    try{
      const token =localStorage.getItem("token");
      const encodedOutputValue = encodeURIComponent(outputValue);
     const response = await axios.post(
      'http://localhost:8000/autocorrect',
        {code,outputValue:encodedOutputValue},
        { 
          headers: {
          'Content-Type':'application/json',
          'Authorization':`Bearer ${token}`
          }
       }
      );
      const correctedCode=response.data.correctedCode;
      
       setFixedCode(correctedCode)
    }catch(error){
        console.log(error);
        toast.success("Try again")
    }
 }
  return (
    <div className={`wrapper-console ${showConsole ? 'visible' : 'hidden'}`}>
      <div className="output-tabs output-tabs-horizontal">
        <div className="left-output">
          <div className="output-tab">Terminal</div>
          <div className="output-tab" onClick={AutoCorrect}>AI</div>
        </div>
        <div className="right-output">
          <div className="output-tab-end" onClick={handleHideClick}>
         <KeyboardArrowDownIcon/>
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
