<<<<<<< HEAD:src/pages/admin/index.js
import { Button, Col, Layout, Row } from "antd";
import React from "react";
import "./style.css";
// import { NavLink } from "react-router-dom";
=======
import React, { useState } from "react";
import { Button, Col, Layout, Modal, Row, Select } from "antd";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
>>>>>>> 7c2ef9e20dad9dfecc4cb065fb09061cb0938123:src/pages/admin/index.jsx
import LayoutAdmin from "../../components/Layout/adminLayout";
import FormQuestionBasic from "../../components/forms/FormQuestionBasic";

const AdminDashboard = () => {
  const [isModalQuestion, setIsModalOpenQuestion] = useState(false);
  const [valueSelectType, setValueSelectType] = useState("");

  const showModal = () => {
    setIsModalOpenQuestion(true);
  };

  const handleOk = () => {
    setIsModalOpenQuestion(false);
  };

  const handleCancel = () => {
    setIsModalOpenQuestion(false);
  };
  return (
    <>
      <LayoutAdmin>
        <Layout>
          <Modal
            title="Elige que tipo de pregunta deseas crear"
            open={isModalQuestion}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Row className="questionSelectionContainer">
              <Select
                onChange={(e) => setValueSelectType(e)}
                placeholder="tipo de pregunta"
                style={{ width: 220 }}
                // disabled
                options={[
                  {
                    value: "Pregunta Básica",
                    label: "Pregunta Básica",
                  },
                  {
                    value: "Pregunta con Código + Test",
                    label: "Pregunta con Código + Test",
                  },
                ]}
              />
            </Row>
            <Row className="formQuestion">
              {valueSelectType.trim() === "Pregunta Básica" && (
                <FormQuestionBasic />
              )}
              {valueSelectType.trim() === "Pregunta con Código + Test" && (
                <h1>hello jiji</h1>
              )}
            </Row>
          </Modal>
          <Row className="cardPhase">
            <Col>
              <h3>Fase 1</h3>
            </Col>
            <Col className="buttonActions">
              <Button type="primary" ghost>
                <Link to="/admin/phase1/postulates"> Ver Postulantes</Link>
              </Button>
              <Button type="primary" onClick={showModal}>
                Crear preguntas
              </Button>
              <Button type="ghost">
                <Link to="/admin/phase1/questions">Ver preguntas</Link>
              </Button>
            </Col>
          </Row>
          <Row className="cardPhase">
            <Col>
              <h3>Fase 2</h3>
            </Col>
            <Col className="buttonActions">
              <Button type="primary" ghost>
                Ver Postulantes
              </Button>
              <Button type="primary">Crear preguntas</Button>
            </Col>
          </Row>
        </Layout>
      </LayoutAdmin>
    </>
  );
};

export default AdminDashboard;
