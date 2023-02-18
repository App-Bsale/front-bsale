import { Button } from "antd";
import "../../../styles/multipleChoice.css";
import Layout from "../../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
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
  const validateAnswer = () => {
    setIndexQuestion((state) => {
      return state + 1;
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
                <input type="radio" key={index} id="answer" name="answer" />
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
      </div>
    </>
  );
};
