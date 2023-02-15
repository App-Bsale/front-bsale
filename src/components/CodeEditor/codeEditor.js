import "../../styles/codeEditor.css";
import Editor from "@monaco-editor/react";
import { useState } from "react";

export const CodeEditor = ({ value }) => {
  const [code, setCode] = useState(value);

  console.log(value);

  return (
    <>
      <div className="editor-container">
        <Editor
          className="editor"
          theme="vs-dark"
          defaultLanguage="javascript"
          value={`${code}`}
          onChange={(e) => setCode(e)}
        />
      </div>
    </>
  );
};
