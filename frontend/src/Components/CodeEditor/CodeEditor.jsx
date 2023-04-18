import React, { useEffect } from 'react';
import "./codeeditor.css"
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/elegant.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';

const CodeEditor = () => {
  useEffect(() => {
    const editor = Codemirror.fromTextArea(document.getElementById('codeEditorCollaboration'), {
      mode: { name: 'javascript', json: true },
      theme: 'elegant',
      autoCloseTags: true,
      autoCloseBrackets: true,
      lineNumbers: true,
    });
  
    return () => {
      editor.toTextArea();
    };
  }, []);
  return (
    <textarea id='codeEditorCollaboration'></textarea>
  )
}

export default CodeEditor;
