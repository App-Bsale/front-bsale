import { Button } from "antd";
import "../../../styles/multipleChoice.css";
import Layout from "../../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";
import { postApi } from "../../../services/fetchApi";
import useSessionReducer from "../../../hooks/useSessionReducer";
// import Example1 from "../assets/image/example1.png";

export const MultipleChoice = ({
  description,
  alternatives,
  imageUrl,
  index,
  totalQuestion,
  setIndexQuestion,
}) => {
  const navigate = useNavigate();
  const [valueInput, setValueInput] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const data = useSessionReducer();

  const validateAnswer = (idQuestion) => {
    setShowLoading(true);
    console.log(data);
    // postApi(`api/answer/validateAnswer/${"ehje"}/${"ehje"}`);
    // setIndexQuestion((state) => {
    //   return state + 1;
    // });
  };

  return (
    <>
      <div className="container_multipleChoice ">
        <div>
          <h2>Desarrollador Web Junior</h2>
          <h2>
            Pregunta {index + 1} de {totalQuestion}
          </h2>
        </div>
        <p>{description}</p>
        <div className="imageContainer ">
          <img src={imageUrl} alt="Example1" />
        </div>
        <div className="alternativesContainer ">
          {alternatives.map((item, index) => {
            return (
              <div className="inputRadioSelect">
                <input
                  type="radio"
                  key={index}
                  id="answer"
                  name="answer"
                  onClick={() => setValueInput(item.option)}
                />
                <p>{item.option}</p>
              </div>
            );
          })}
        </div>
        <Button
          className="button_primary"
          type="primary"
          onClick={validateAnswer}
        >
          Enviar
        </Button>
        {showLoading && <PacmanLoader color="#ff5b00" />}
      </div>
    </>
  );
};
