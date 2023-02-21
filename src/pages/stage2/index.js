import { Button } from "antd";
import React from "react";
import Layout from "../../components/Layout/Layout";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Requirements = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="container-stage2">
        <h4>Desarrollador Web</h4>
        <div className="requirement">
          <h4>Requerimientos</h4>
          <p className="requirement-text">
            Eget mollis mauris vivamus eget cursus tincidunt mauris nisi.
            Adipiscing sit dolor blandit et mattis. Sagittis non ultrices
            viverra non ac tempor. Posuere felis at ultricies purus libero diam.
            Non non urna tellus vehicula auctor ut massa malesuada. Nulla
            fermentum in donec mi maecenas iaculis amet mauris est. lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <h4>Criterio de evaluación</h4>
          <p>
            Eget mollis mauris vivamus eget cursus tincidunt mauris nisi.
            Adipiscing sit dolor blandit et mattis. Sagittis non ultrices
            viverra non ac tempor. Posuere felis at ultricies purus libero diam.
            Non non urna tellus vehicula auctor ut massa malesuada. Nulla
            fermentum
          </p>
          <table className="table">
            <tr style={{ background: "rgba(0, 0, 0, 0.06)" }}>
              <th className="table-cell">Categoria</th>
              <th className="table-cell">Criterio</th>
              <th className="table-cell">Ponderación</th>
            </tr>
            <tr>
              <td className="table-cell">Eget mollis</td>
              <td className="table-cell">Eget mollis</td>
              <td className="table-cell">Eget mollis</td>
            </tr>
            <tr>
              <td className="table-cell">Eget mollis</td>
              <td className="table-cell">Eget mollis</td>
              <td className="table-cell">Eget mollis</td>
            </tr>
            <tr>
              <td className="table-cell">Eget mollis</td>
              <td className="table-cell">Eget mollis</td>
              <td className="table-cell">Eget mollis</td>
            </tr>
            <tr>
              <td className="table-cell">Eget mollis</td>
              <td className="table-cell">Eget mollis</td>
              <td className="table-cell">Eget mollis</td>
            </tr>
          </table>
          <h4>Tests</h4>
          <p>
            Eget mollis mauris vivamus eget cursus tincidunt mauris nisi.
            Adipiscing sit dolor blandit et mattis. Sagittis non ultrices
            viverra non ac tempor. Posuere felis at ultricies purus libero diam.
            Non non urna tellus vehicula auctor ut massa malesuada. Nulla
            fermentum
          </p>
          <div className="project-url">
            <input placeholder="project-url" />
            <Button className="button-test-stage2" type="primary">
              Iniciar tests
            </Button>
          </div>
          <div className="stage2-test">
            <div>
              <div className="dot" />
              Descripción de test
            </div>
            <div>
              <div className="dot" />
              Descripción de test
            </div>
            <div>
              <div className="dot" />
              Descripción de test
            </div>
            <div>
              <div className="dot" />
              Descripción de test
            </div>
          </div>
          <h4>Envío de proyecto</h4>
          <p>
            Eget mollis mauris vivamus eget cursus tincidunt mauris nisi.
            Adipiscing sit dolor blandit et mattis.
          </p>
          <p>
            · Brindar acceso a Bsale-IO a tu repositorio privado de GitHub
            <br />· Registra la URL de tu proyecto en el siguiente campo
          </p>
          <div className="github-repo-url">
            <input placeholder="github-repo-url" />
            <Button className="button-send-stage2" type="primary">
              Enviar
            </Button>
          </div>
          <Button
            className="button-next-stage2"
            type="primary"
            onClick={() => navigate("/stage3/codeReview")}
          >
            Siguiente
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Requirements;
