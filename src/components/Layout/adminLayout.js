import { Button, Col, Layout, Row } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";
import DarkMode from "../DarkMode/darkMode";

const LayoutAdmin = ({ children }) => {
  const { contextTheme, setContextTheme } = useThemeContext();

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
          <Col span={20} className="container-main" id={contextTheme}>
            <DarkMode />
            <Row style={{ height: "inherit" }}>{children}</Row>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default LayoutAdmin;
