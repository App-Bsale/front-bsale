import React, { useState, useEffect, useContext } from "react";
import LayoutAdmin from "../../components/Layout/adminLayout";
import { Button, Modal, Form, Input, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { getApi, putApi } from "../../services/fetchApi";
import { PhaseContext } from "../../hooks/PhaseContext";
import { Toaster } from "react-hot-toast";

import "../../styles/postulatesPhase1.css";
import { notifyError, notifySuccess } from "../../components/Alerts";

const PostulantesPhase1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [userSearch, setUserSearch] = useState(null);
  const [form] = Form.useForm();
  const { phaseOneGlobal, setPhaseOneGlobal } = useContext(PhaseContext);

  const onSubmit = (values) => {
    try {
      console.log({ values });
      getApi(`api/auth/searchUser/${values.email}`).then((res) => {
        setUsersData([{ ...res }]);
        handleCancel();
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getApi("api/auth").then((res) => {
      console.log(res);
      setUsersData(res);
    });
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const addUserToPhase = (email) => {
    putApi("api/phase1/addUser", {
      idPhase: phaseOneGlobal.id,
      email: email,
    }).then((res) => {
      if (res.message === "El usuario ya existe en esta fase") {
        notifyError(res.message);
      } else {
        notifySuccess(res.message);
      }
    });
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          title="Agregar un usuario a la Fase 1"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            form={form}
            name="email"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Porfavor, escribe el email." },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Buscar
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}

      <LayoutAdmin>
        <Toaster />

        <div className="postulateContainer">
          <div className="headPostulate">
            <h1>Lista de Postulantes</h1>
            <Button type="primary" ghost onClick={showModal}>
              Agregar un nuevo usuario
            </Button>
          </div>
          {usersData.map((user) => {
            return (
              <Row className="cardPhase">
                <Col>
                  <h3>{user.email}</h3>
                </Col>
                <Col className="buttonActions">
                  <Button
                    type="primary"
                    onClick={() => addUserToPhase(user.email)}
                  >
                    Agregar a la Fase 1
                  </Button>
                </Col>
              </Row>
            );
          })}
        </div>
      </LayoutAdmin>
    </>
  );
};

export default PostulatesPhase1;
