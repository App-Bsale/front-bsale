import "../styles/codeEditor.css";
import Editor from "@monaco-editor/react";
import { useState } from "react";

export const CodeEditor = () => {
  const [code, setCode] = useState("");

  return (
    <>
      <div className="editor-container">
        <Editor
          className="editor"
          theme="vs-dark"
          defaultLanguage="javascript"
          value="Ingresa tu codigo aquí"
          onChange={(e) => setCode(e)}
        />
      </div>
    </>
  );
};
