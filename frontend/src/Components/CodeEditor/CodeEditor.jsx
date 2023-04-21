import React, { useEffect,useRef } from 'react';
import "./codeeditor.css"
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import DoList from '../../SocketConnections/DoList';

const CodeEditor = ({socketRef,roomId}) => {

  const editorRef=useRef(null);

  useEffect(() => {
    async function init() {

     editorRef.current=Codemirror.fromTextArea(document.getElementById('codeEditorCollaboration'), {
      mode: { name: 'javascript', json: true },
      autoCloseTags: true,
      autoCloseBrackets: true,
      theme:"eclipse",
      lineNumbers: true,
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
    <textarea id='codeEditorCollaboration'></textarea>
  )
}

export default CodeEditor;
