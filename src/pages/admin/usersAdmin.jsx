import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  Col,
  Input,
  Layout,
  Modal,
  Row,
  Select,
  Space,
  Switch,
  Table,
} from "antd";
import LayoutAdmin from "../../components/Layout/adminLayout";
import { UsersFetcher } from "../../services/users_fetcher";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { createGlobalStyle } from "styled-components";

const UsersAdmin = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState({});
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [creatingUser, setCreatingUser] = useState({});


  const getAllUsers = () => {
    UsersFetcher.all().then((user) => setAllUsers(user));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handlerDelete = (data) => {
    UsersFetcher.delete(data.uid).then(() => getAllUsers());
  };

  const handlerUpdate = (data) => {
    console.log(data.uid);
    setEditingUser(data);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      console.log(editingUser);
      await UsersFetcher.update(editingUser);
      setIsEditing(false);
      getAllUsers();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSaveUser = async () => {
    try {
      console.log(creatingUser)
      await UsersFetcher.post(creatingUser)
      setIsEditingUser(false);
      getAllUsers();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleActiveChange = (record, value) => {
    console.log(record.uid, record.status, value);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsEditingUser(false);
  };

  console.log(allUsers);

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Id",
      dataIndex: "uid",
      key: "uid",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <Switch
          checked={text}
          onChange={(value) => handleActiveChange(record, value)}
        />
      ),
    },
    {
      title: "Accion",
      key: "x",
      fixed: "right",
      render: (record) => (
        <Space size="middle">
          <EditOutlined
            onClick={() => {
              handlerUpdate(record);
            }}
          />
          <DeleteOutlined
            onClick={() => {
              handlerDelete(record);
            }}
            style={{ color: "red", marginLeft: 12 }}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <LayoutAdmin>
        <Layout>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <h1>All users</h1>
            <Button onClick={(e) => setIsEditingUser(true)} type="primary" htmlType="submit">
              Crear Usuario
            </Button>
          </div>
          <Table dataSource={allUsers} columns={columns} />
          <Modal
            title="Crear Usuario"
            visible={isEditingUser}
            onOk={handleSaveUser}
            onCancel={handleCancel}
          >
            <Input
              prefix={"Nombre:"}
              onChange={(e) => {
                setCreatingUser((pre) => {
                  console.log({ ...pre, name: e.target.value });
                  return { ...pre, name: e.target.value };
                });
              }}
            />
            <Input
              prefix={"Correo:"}
              label="Email"
              onChange={(e) => {
                setCreatingUser((pre) => {
                  return { ...pre, email: e.target.value };
                });
              }}
            />
            <Input
              prefix={"Password:"}
              onChange={(e) => {
                setCreatingUser((pre) => {
                  return { ...pre, password: e.target.value };
                });
              }}
            />
          </Modal>

          <Modal
            title="Actualizar Usuario"
            visible={isEditing}
            onOk={handleSave}
            onCancel={handleCancel}
          >
            <Input
              prefix={"Nombre:"}
              value={editingUser.name}
              onChange={(e) => {
                setEditingUser((pre) => {
                  console.log({ ...pre, name: e.target.value });
                  return { ...pre, name: e.target.value };
                });
              }}
            />
            <Input
              prefix={"Correo:"}
              value={editingUser.email}
              label="Email"
              onChange={(e) => {
                setEditingUser((pre) => {
                  return { ...pre, email: e.target.value };
                });
              }}
            />
            <Input
              prefix={"Password:"}
              value={editingUser.password}
              onChange={(e) => {
                setEditingUser((pre) => {
                  return { ...pre, password: e.target.value };
                });
              }}
            />
          </Modal>
        </Layout>
      </LayoutAdmin>
    </>
  );
};

export default UsersAdmin;
