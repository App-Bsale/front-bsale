import { Button } from "antd";
import "../styles/etapa_1.css";
import Navbar from "./Navbar/index";

export const Etapa1 = () => {
  return (
    <>
      <Navbar />
      <div class="container_etapa1">
        <div>
          <h2> Desarrollador Web Junior</h2>
          <h2> Etapa 1: Fundamentos de programación</h2>
        </div>
        <p>
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

        <Button className="button_primary" type="primary">
          Iniciar
        </Button>
      </div>
    </>
  );
};
