import { Button } from "antd";
import React from "react";
import Layout from "../../../components/Layout/Layout";
import example from "../../../assets/image/solution-example.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";

const StageOneSolutions = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="container-stageOneSolutions">
        <h4>Desarrollador Web Junior</h4>
        <div className="solution">
          <h4>Pregunta 1 de 10 - Solución</h4>
          <div
            style={{
              background: "black",
              width: "576px",
              height: "324px",
              margin: "auto",
              marginBottom: "32px",
            }}
          ></div>
          <p className="solution-text">
            Eget mollis mauris vivamus eget cursus tincidunt mauris nisi.
            Adipiscing sit dolor blandit et mattis. Sagittis non ultrices
            viverra non ac tempor. Posuere felis at ultricies purus libero diam.
            Non non urna tellus vehicula auctor ut massa malesuada. Nulla
            fermentum in donec mi maecenas iaculis amet mauris est.
          </p>
          <img
            src={example}
            alt="tabla normalizada"
            style={{ display: "flex", margin: "auto" }}
          />
          <p className="solution-text">
            Eget mollis mauris vivamus eget cursus tincidunt mauris nisi.
            Adipiscing sit dolor blandit et mattis. Sagittis non ultrices
            viverra non ac tempor. Posuere felis at ultricies purus libero diam.
            Non non urna tellus vehicula auctor ut massa malesuada. Nulla
            fermentum in donec mi maecenas iaculis amet mauris est.
          </p>
          <Button
            className="button-next"
            type="primary"
            onClick={() => navigate("/stage2/requirements")}
          >
            Siguiente
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default StageOneSolutions;
