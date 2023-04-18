import React, { useEffect,useRef } from 'react';
import "./codeeditor.css"
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/elegant.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import { Socket } from 'socket.io-client';
import DoList from '../../SocketConnections/DoList';

const CodeEditor = (socketRef,roomId) => {
  const editorRef=useRef(null);
  useEffect(() => {
     editorRef.current=Codemirror.fromTextArea(document.getElementById('codeEditorCollaboration'), {
      mode: { name: 'javascript', json: true },
      theme: 'elegant',
      autoCloseTags: true,
      autoCloseBrackets: true,
      lineNumbers: true,
    });
    editorRef.current.on("change",(instance,changes)=>{
      console.log(changes)
      const {origin}=changes;
      const code=instance.getValue();
      if (origin !=='setValue'){
        socketRef.current.emit(DoList.CODE_CHANGE,{
          roomId,
          code,
        });
      }
      console.log(code)
    })
    // editorRef.current.setValue('console.log(hello)')
  }, []);
  return (
    <textarea id='codeEditorCollaboration'></textarea>
  )
}

export default CodeEditor;
