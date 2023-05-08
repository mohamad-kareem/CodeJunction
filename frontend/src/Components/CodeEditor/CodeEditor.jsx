import React, { useEffect,useRef, useState } from 'react';
import "./codeeditor.css"
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/blackboard.css';
import 'codemirror/mode/php/php';
import 'codemirror/mode/python/python';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import DoList from '../../SocketConnections/DoList';
import { useLocation } from 'react-router-dom';
/* eslint-disable react-hooks/exhaustive-deps */
const CodeEditor = ({socketRef,roomId,setCode,language,fixedCode ,setFixedCode}) => {
  const location=useLocation()
  const editorRef=useRef(null);
  console.log("corrected codeeee:  ",fixedCode)
  console.log(editorRef.current)
  useEffect(() => {
    async function init() {

     editorRef.current=Codemirror.fromTextArea(document.getElementById('codeEditorCollaboration'), {
      mode: { name: language },
      autoCloseTags: true,
      autoCloseBrackets: true,
      theme:"blackboard",
      lineNumbers: true,
      extraKeys: {
        Enter: "newlineAndIndentContinueMarkdownList"
      },
      
    });

    editorRef.current.on("change",(instance,changes)=>{
      // console.log(changes)
      // console.log(editorRef)
      const {origin}=changes;
      const code=instance.getValue();
        if (origin !=='setValue'){
          socketRef.current.emit(DoList.CODE_CHANGE,{
            roomId,
            code,
          });
      }
      setCode(code)
    })
    }
    init()
  }, [language]);
  useEffect(()=>{
    if (socketRef.current){
      socketRef.current.on(DoList.CODE_CHANGE,({code})=>{
        if (code!==null){
          editorRef.current.setValue(code);
        }
      })
    }
   
  
  },[socketRef.current])

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setValue(fixedCode);
    }
  }, [fixedCode]);
  return (
    <textarea id='codeEditorCollaboration' defaultValue={location.state?.code }></textarea>
  )
}
export default CodeEditor;
