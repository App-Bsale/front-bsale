import React from "react";
import LayoutAdmin from "../../components/Layout/adminLayout";
import { Button } from "antd";
// import { Link } from "react-router-dom";
import "../../styles/postulatesPhase1.css";

const PostulatesPhase1 = () => {
  return (
    <LayoutAdmin>
      <div className="postulateContainer">
        <div className="headPostulate">
          <h1>Lista de Postulantes</h1>
          <Button type="primary" ghost>
            Agregar un nuevo usuario
          </Button>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default PostulatesPhase1;
