import { Button, Col, Layout, Row } from "antd";
import React from "react";

import { NavLink } from "react-router-dom";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Row style={{ height: "100vh" }}>
          <Col
            span={4}
            style={{
              color: "white",
              padding: "1rem",
              paddingBlock: "3rem",
              display: "flex",
              flexDirection: "column",
              rowGap: "1rem;",
              alignItems: "center",
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
                <NavLink to="/admin/users">Usuarios</NavLink>
              </Button>
            </Row>


          </Col>
          <Col span={20} className="main">
            <Row style={{ height: "inherit" }}>{children}</Row>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default LayoutAdmin;
