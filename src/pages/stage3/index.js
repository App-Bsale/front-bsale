import { Button } from "antd";
import Navbar from "../../components/Navbar";
import "../../styles/stage_3.css";
import Example3 from "../../assets/image/example1.png";
import { useNavigate } from "react-router-dom";

const ContinuousImprovement = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div class="container_stage3">
        <div>
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
          elit. Eligendi facilis quidem rerum autem voluptas est accusantium,
          iste velit, cum, earum sit quibusdam animi. Nulla distinctio aut
          repellat excepturi, asperiores enim, illo similique est dolorum labore
          corporis qui veniam rem quam animi accusamus maxime. Cum officia at
          voluptates, vero tempora ipsam.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eligendi facilis quidem rerum autem voluptas est
          accusantium, iste velit, cum, earum sit quibusdam animi. Nulla
          distinctio aut repellat excepturi, asperiores enim, illo similique est
          dolorum labore corporis qui veniam rem quam animi accusamus maxime.
          Cum officia at voluptates, vero tempora ipsam. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Eligendi facilis quidem rerum autem
          voluptas est accusantium, iste velit, cum, earum sit quibusdam animi.
          Nulla distinctio aut repellat excepturi, asperiores enim, illo
          similique est dolorum labore corporis qui veniam rem quam animi
          accusamus maxime. Cum officia at voluptates, vero tempora ipsam.
        </p>

        <Button
          className="button_primary"
          type="primary"
          onClick={() => navigate("/stage3/evaluation")}
        >
          Iniciar
        </Button>
      </div>
    </>
  );
};

export default ContinuousImprovement;
