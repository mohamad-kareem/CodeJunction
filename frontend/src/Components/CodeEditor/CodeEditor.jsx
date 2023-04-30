import React, { useEffect,useRef } from 'react';
import "./codeeditor.css"
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/blackboard.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import DoList from '../../SocketConnections/DoList';
import { useLocation } from 'react-router-dom';

const CodeEditor = ({socketRef,roomId,setCode}) => {
  const location=useLocation()
  const editorRef=useRef(null);

  useEffect(() => {
    async function init() {

     editorRef.current=Codemirror.fromTextArea(document.getElementById('codeEditorCollaboration'), {
      mode: { name: 'javascript', json: true },
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
      console.log("here",code)
    })
    }
    init()
  }, []);
  useEffect(()=>{
    if (socketRef.current){
      socketRef.current.on(DoList.CODE_CHANGE,({code})=>{
        // console.log("rec",code)
        if (code!==null){
          editorRef.current.setValue(code);
        }
      })
    }
   
  
  },[socketRef.current])
  return (
    <textarea id='codeEditorCollaboration' defaultValue={location.state?.code}></textarea>
  )
}

export default CodeEditor;
