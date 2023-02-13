import { Button } from "antd";
import Navbar from "../../components/Navbar";
import "../../styles/results.css";

const Results = () => {
  return (
    <>
      <Navbar />
      <div className="container_multipleChoice">
        <div>
          <h2>Desarrollador Web Junior</h2>
          <h2>Resumen de resultados</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          facilis quidem rerum autem voluptas est accusantium, iste velit, cum,
          earum sit quibusdam animi. Nulla distinctio aut repellat excepturi,
          asperiores enim, illo similique est dolorum labore corporis qui veniam
          rem quam animi accusamus maxime.
        </p>
        <Button className="button_primary" type="primary">
          Iniciar
        </Button>
      </div>
    </>
  );
};

export default Results;
