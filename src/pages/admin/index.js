import React, { useEffect, useState, useContext } from "react";
import { Button, Col, Layout, Modal, Row, Select } from "antd";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import LayoutAdmin from "../../components/Layout/adminLayout";
import FormQuestionBasic from "../../components/Forms/FormQuestionBasic";
import { getApi } from "../../services";

import { PhaseContext } from "../../hooks/PhaseContext";
import FormQuestionCode from "../../components/Forms/FormCode";
import { useThemeContext } from "../../context/ThemeContext";
// import FormQuestionCode from "../../components/forms/FormQuestionCode";

// import { PhaseContext } from "../../hooks/PhaseContext";

const AdminDashboard = () => {
  const [isModalQuestion, setIsModalOpenQuestion] = useState(false);
  const [valueSelectType, setValueSelectType] = useState("");
  // const { phaseOneGlobal, setPhaseOneGlobal } = useContext(PhaseContext);
  // console.log(phaseOneGlobal);

  useEffect(() => {
    getApi("api/phase1").then((res) => {
      console.log(res);
      // setPhaseOneGlobal(res[0]);
    });
  }, []);

  const showModal = () => {
    setIsModalOpenQuestion(true);
  };

  const handleOk = () => {
    setIsModalOpenQuestion(false);
  };

  const handleCancel = () => {
    setIsModalOpenQuestion(false);
  };

  const { contextTheme, setContextTheme } = useThemeContext();

  return (
    <>
      <LayoutAdmin>
        <Layout id={contextTheme}>
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
                // <FormQuestionCode
                //   description={"hadad"}
                //   editorValue={"afdgadh"}
                // />
                <FormQuestionCode />
              )}
            </Row>
          </Modal>
          <Col className="main" id={contextTheme}>
            <h1>¿Qué desea crear?</h1>
            <Row style={{ marginBlock: "1rem" }} className="menuLinks">
              <NavLink to="/admin/form/phase1">Fase 1</NavLink>
              <NavLink to="/admin/form/phase2">Fase 2</NavLink>
            </Row>
          </Col>
          <Row className="cardPhase" id={contextTheme}>
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
          <Row className="cardPhase" id={contextTheme}>
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
