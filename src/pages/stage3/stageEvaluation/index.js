import Navbar from "../../../components/Navbar";
import Example3 from "../../../assets/image/example1.png";
import "../../../styles/stage_3.css";
// import { BgColorsOutlined } from "@ant-design/icons";
import FormularioEvaluation from "../../../components/Forms/formEvaluation";

const Evaluation = () => {
  return (
    <>
      <Navbar />
      <div className="container_stage3">
        <div className="title">
          <h2> Desarrollador Web Junior</h2>
          <h2> Etapa 3: Revisión de código - Mejora continua</h2>
        </div>
        <p>
          <img src={Example3} alt="Example1" className="example3" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          facilis quidem rerum autem voluptas est accusantium, iste velit, cum,
          earum sit quibusdam animi. Nulla distinctio aut repellat excepturi,
          asperiores enim, illo similique est dolorum labore corporis qui veniam
          rem quam animi accusamus maxime. Cum officia at voluptates, vero
          tempora ipsam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <p>
          <img src={Example3} alt="Example1" className="example3" />
          Eligendi facilis quidem rerum autem voluptas est accusantium, iste
          velit, cum, earum sit quibusdam animi. Nulla distinctio aut repellat
          excepturi, asperiores enim, illo similique est dolorum labore corporis
          qui veniam rem quam animi accusamus maxime. Cum officia at voluptates,
          vero tempora ipsam.Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <p>
          Eligendi facilis quidem rerum autem voluptas est accusantium, iste
          velit, cum, earum sit quibusdam animi. Nulla distinctio aut repellat
          excepturi, asperiores enim, illo similique est dolorum labore corporis
          qui veniam rem quam animi accusamus maxime. Cum officia at voluptates,
          vero tempora ipsam.Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <p>
          En base a la explicación provista, ¿consideras que el código de tu
          aplicación nombra correctamente las variables y hace un uso adecuado
          de las mismas?
        </p>

        <div className="container_form">
          <FormularioEvaluation />
        </div>
      </div>
    </>
  );
};

export default Evaluation;
