import { Button } from "antd";
import Example1 from "../../../assets/image/example1.png";
import Layout from "../../../components/Layout/Layout";

export const StageOneOptions = () => {
  return (
    <>
      <div className="container_multipleChoice">
        <div>
          <h2>Desarrollador Web Junior</h2>
          <h2>Pregunta 1 de 2</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          facilis quidem rerum autem voluptas est accusantium, iste velit, cum,
          earum sit quibusdam animi. Nulla distinctio aut repellat excepturi,
          asperiores enim, illo similique est dolorum labore corporis qui veniam
          rem quam animi accusamus maxime. Cum officia at voluptates, vero
          tempora ipsam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eligendi facilis quidem rerum autem voluptas est accusantium,
          iste velit, cum, earum sit quibusdam animi.
          <img src={Example1} alt="Example1" className="example1" />
        </p>
        <Button className="button_primary" type="primary">
          Iniciar
        </Button>
      </div>
    </>
  );
};
