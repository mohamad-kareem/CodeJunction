import React, { useEffect,useRef } from 'react';
import "./codeeditor.css"
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/elegant.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';

const CodeEditor = () => {
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
    })
  
  }, []);
  return (
    <textarea id='codeEditorCollaboration'></textarea>
  )
}

export default CodeEditor;
