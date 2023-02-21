import { Button } from "antd";
import "../../../styles/multipleChoice.css";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import { postApi } from "../../../services/fetchApi";

const MultipleChoice = ({
  description,
  alternatives,
  imageUrl,
  index,
  totalQuestion,
  setIndexQuestion,
  idQuestion,
}) => {
  const [valueInput, setValueInput] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isUltimate, setIsUltimate] = useState(false);

  useEffect(() => {
    console.log({ index, totalQuestion });
    if (Number(index) + 1 === Number(totalQuestion)) {
      console.log("es la ultima :d");
      setIsUltimate(true);
    }
  }, []);
  useEffect(() => {
    const { user } = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    console.log(idQuestion);
    setUserData(user);
  }, []);

  const validateAnswer = () => {
    setShowLoading(true);
    console.log(`api/answer/validateAnswer/${idQuestion}/${userData.uid}`);
    //backend-bsale-production.up.railway.app/api/answer/validateAnswer/63ecfd8978b2c6bd68819709/63eb19eb2935908ab505ebbb
    https: postApi(`api/answer/validateAnswer/${idQuestion}/${userData.uid}`, {
      response: valueInput,
    }).then((response) => {
      if (response.message) {
        setShowLoading(false);
        setIndexQuestion((state) => {
          return state + 1;
        });
      }
    });
  };

  return (
    <>
      <div className="container_multipleChoice">
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

export default MultipleChoice;
