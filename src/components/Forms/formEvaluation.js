import { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/stage_3.css";
import { FaStar } from "react-icons/fa";

const FormularioEvaluation = () => {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = (value) => {
    setHoverValue(undefined);
  };

  const colors = {
    orange: "#FF5B00",
    grey: "#677294",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { label_1, label_2 } = data;
    const newObjet = {
      label_1: label_1,
      label_2: label_2,
      stars: currentValue,
    };
    console.log(newObjet);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="stars">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={65}
              style={{
                margin: 8,
                cursor: "pointer",
              }}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
      <div className="state">
        <div>En desacuerdo</div>
        <div>Parcialmente de acuerdo</div>
        <div>Totalmente de acuerdo</div>
      </div>
      <div className="container_inputs">
        <label>¿Qué consideras que hiciste bien?</label>
        <input
          className="inputs"
          type="text"
          placeholder="Escribe tu respuesta de manera clara"
          {...register("label_1", { required: true })}
        />
        {errors.label_1?.type === "required" && (
          <p>Debes responder la pregunta</p>
        )}
      </div>
      <div className="container_inputs">
        <label>¿Qué consideras que puedes mejorar?</label>
        <input
          className="inputs"
          type="text"
          placeholder="Escribe tu respuesta de manera clara"
          {...register("label_2", { required: true })}
        />
        {errors.label_2?.type === "required" && (
          <p>Debes responder la pregunta</p>
        )}
      </div>
      <div className="button_evaluation">
        <input type="submit" value="Siguiente" className="next" />
      </div>
    </form>
  );
};

export default FormularioEvaluation;
