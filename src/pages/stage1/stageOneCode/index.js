import Layout from "../../../components/Layout/Layout";
import React, { useState, useEffect } from "react";
import { Button } from "antd";
import "./style.css";
import { CodeEditor } from "../../../components/CodeEditor/codeEditor";
import Editor from "@monaco-editor/react";
import { getApi } from "../../../services";
import { useNavigate } from "react-router-dom";

const StageOneCode = ({
  description,
  editorValue,
  index,
  test1,
  test2,
  test3,
  totalQuestion,
}) => {
  const [codeInputValue, setCodeInputValue] = useState("");
  const [resultTest1, setResultTest1] = useState(false);
  const [resultTest2, setResultTest2] = useState(false);
  const [resultTest3, setResultTest3] = useState(false);
  const [activeTest, setActiveTest] = useState(false);
  const [user, setUser] = useState(null);
  const [isDeseabled, setIsDeseabled] = useState(false);
  const [isUltimate, setIsUltimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log({ index, totalQuestion });
    if (Number(index) + 1 === Number(totalQuestion)) {
      console.log("es la ultima :d");
      setIsUltimate(true);
    }
  }, []);

  useEffect(() => {
    const objectUser = JSON.parse(localStorage.getItem("user"));
    console.log(objectUser);
    setUser(objectUser.user);
  }, []);

  useEffect(() => {
    console.log(codeInputValue);
  }, [codeInputValue]);

  const validateCode = () => {
    console.log({
      code: codeInputValue,
      test1,
      test2,
      test3,
    });
    postApi("api/phase1/run-code", {
      code: codeInputValue,
      test1,
      test2,
      test3,
    }).then((res) => {
      setActiveTest(true);
      setResultTest1(res.test1);
      setResultTest2(res.test2);
      setResultTest3(res.test3);
    });
  };

  const postApi = async (endpoint, data) => {
    console.log(`https://backend-bsale-production.up.railway.app/${endpoint}`);
    const response = await fetch(
      `https://backend-bsale-production.up.railway.app/api/phase1/run-code`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const dataResponse = await response.json();
    console.log(dataResponse);
    return dataResponse;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resultTest1 && resultTest2 && resultTest3) {
      getApi(`api/answer/addScore/${user.uid}`).then((res) => {
        if (res.message) {
          setIsDeseabled(true);
        }
      });
    }
  };

  return (
    <>
      <div className="container-stageOneCode">
        <h4>Desarrollador Web Junior</h4>
        <div className="test">
          <h4>
            Pregunta {index + 1} de {totalQuestion}
          </h4>
          <p className="test-text">{description}</p>
          <div className="editorContainer">
            <Editor
              className="editor"
              theme="vs-dark"
              defaultLanguage="javascript"
              value={`${editorValue}`}
              onChange={(e) => setCodeInputValue(e)}
            />
          </div>
          <Button className="button-test" type="primary" onClick={validateCode}>
            Test
          </Button>
          <div className="description-test">
            <div>
              <input type="radio" checked={resultTest1} />
              {test1}{" "}
              {resultTest1 && activeTest ? (
                <span
                  style={{
                    marginInline: "2rem",
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  Pasó el test
                </span>
              ) : (
                <span
                  style={{
                    marginInline: "2rem",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  No Pasó el test
                </span>
              )}
            </div>
            <div>
              <input type="radio" checked={resultTest2} />
              {test2}
              {resultTest2 && activeTest ? (
                <span
                  style={{
                    marginInline: "2rem",
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  Pasó el test
                </span>
              ) : (
                <span
                  style={{
                    marginInline: "2rem",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  No Pasó el test
                </span>
              )}
            </div>
            <div>
              <input type="radio" checked={resultTest3} />
              {test3}
              {resultTest3 && activeTest ? (
                <span
                  style={{
                    marginInline: "2rem",
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  Pasó el test
                </span>
              ) : (
                <span
                  style={{
                    marginInline: "2rem",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  No Pasó el test
                </span>
              )}
            </div>
          </div>
          <Button
            className="button-send"
            type="primary"
            onClick={handleSubmit}
            disabled={isDeseabled}
          >
            Enviar
          </Button>
          {isUltimate && isDeseabled ? (
            <Button
              className="button-send"
              type="primary"
              onClick={() => navigate("/stage1/StageOneSolutions")}
            >
              Ver solucionario
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default StageOneCode;
