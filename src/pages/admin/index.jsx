import { Button, Col, Layout, Row } from "antd";
import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import LayoutAdmin from "../../components/Layout/adminLayout";

const AdminDashboard = () => {
  return (
    <>
      <LayoutAdmin>
        <Layout>
          <Row className="cardPhase">
            <Col>
              <h3>Fase 1</h3>
            </Col>
            <Col className="buttonActions">
              <Button type="primary" ghost>
                Ver Postulantes
              </Button>
              <Button type="primary">Crear preguntas</Button>
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
