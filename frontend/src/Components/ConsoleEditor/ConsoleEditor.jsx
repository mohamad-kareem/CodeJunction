import React,{useContext} from 'react';
import { UserContext } from '../../Context/Context';
import './consoleeditor.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';
import toast from "react-hot-toast";
import { ConsoleTranslation } from '../Languages/Lang';
const ConsoleEditor = ({ outputValue ,setShowConsole,showConsole,code,setFixedCode }) => {
  
  const userlang=useContext(UserContext)
  const lan = ConsoleTranslation[userlang.language]
  
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
          <div className="output-tab">{lan.terminal}</div>
          <div className="output-tab" onClick={AutoCorrect}>{lan.autocorrect}</div>
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
