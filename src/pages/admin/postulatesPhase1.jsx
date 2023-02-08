import React, { useState } from "react";
import LayoutAdmin from "../../components/Layout/adminLayout";
import { Button, Modal, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";


import "../../styles/postulatesPhase1.css";

const PostulatesPhase1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            name="email"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
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
        <div className="postulateContainer">
          <div className="headPostulate">
            <h1>Lista de Postulantes</h1>
            <Button type="primary" ghost onClick={showModal}>
              Agregar un nuevo usuario
            </Button>
          </div>
        </div>
      </LayoutAdmin>
    </>
  );
};

export default PostulatesPhase1;
