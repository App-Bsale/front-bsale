import { Button, Col, Layout, Row } from "antd";
import React, { useState } from "react";

import { NavLink } from "react-router-dom";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Row style={{ height: "100vh" }}>
          <Col
            span={4}
            style={{
              height: "100%",
              color: "white",
              padding: "1rem",
              paddingBlock: "3rem",
              display: "flex",
              flexDirection: "column",
              rowGap: "1rem;",
            }}
            className="asideDashboard"
          >
            <Row>
              <Button type="text" className="button" block>
                <NavLink to="/admin">Inicio</NavLink>
              </Button>
            </Row>
            <Row style={{ marginBlock: "1rem" }}>
              <Button type="text" className="button" block>
                Crear un usuario
              </Button>
            </Row>

            <Row>
              <Button type="text" className="button" block>
                Desactivar un usuario
              </Button>
            </Row>
          </Col>
          <Col span={20} className="main">
            <h1>¿Qué desea crear?</h1>
            <Row style={{ marginBlock: "1rem" }} className="menuLinks">
              <NavLink to="/admin/form/phase1">Fase 1</NavLink>
              <NavLink to="/admin/form/phase2">Fase 2</NavLink>
            </Row>

            <Row style={{ height: "80vh" }}>{children}</Row>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default LayoutAdmin;
