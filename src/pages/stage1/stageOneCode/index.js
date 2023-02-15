import Layout from "../../../components/Layout/Layout";
import React from "react";
import { Button } from "antd";
import "./style.css";
import { CodeEditor } from "../../../components/CodeEditor/codeEditor";

const StageOneCode = ({
  description,
  editorValue,
  index,
  test1,
  test2,
  test3,
  totalQuestion,
}) => {
  return (
    <>
      <div className="container-stageOneCode">
        <h4>Desarrollador Web Junior</h4>
        <div className="test">
          <h4>
            Pregunta {index + 1} de {totalQuestion}
          </h4>
          <p className="test-text">{description}</p>
          <CodeEditor value={editorValue} />
          <Button className="button-test" type="primary">
            Test
          </Button>
          <div className="description-test">
            <div>
              <input type="radio" />
              {test1}
            </div>
            <div>
              <input type="radio" />
              {test2}
            </div>
            <div>
              <input type="radio" />
              {test3}
            </div>
          </div>
          <Button className="button-send" type="primary">
            Enviar
          </Button>
        </div>
      </div>
    </>
  );
};

export default StageOneCode;
