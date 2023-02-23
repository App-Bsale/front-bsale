import React, { useEffect, useState} from "react";
import {
  Button,
  Input,
  Layout,
  Modal,
  Space,
  Switch,
  Table,
} from "antd";
import LayoutAdmin from "../../components/Layout/adminLayout";
import { UsersFetcher } from "../../services/users_fetcher";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

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
      await UsersFetcher.post(creatingUser);
      setIsEditingUser(false);
      getAllUsers();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleActiveChange = async (record, value) => {
    const body = {
      uid: record.uid,
      status: value,
    };
    try {
      console.log(body);
      await UsersFetcher.update(body);
      getAllUsers();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsEditingUser(false);
  };

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
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked={record.status}
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
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <div
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}
            >
              <h1 style={{ color: "#e54e24", marginLeft: "16px" }}>All users</h1>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginRight: "8px",
                }}
              >
                <Button type="primary" htmlType="submit">
                  <Link to="/admin/tableDataEvaluationUsers">
                    Results Stage 3
                  </Link>
                </Button>
                <Button
                  onClick={(e) => setIsEditingUser(true)}
                  type="primary"
                  htmlType="submit"
                >
                  Crear Usuario
                </Button>
              </div>
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
          </div>
        </Layout>
      </LayoutAdmin>
    </>
  );
};

export default UsersAdmin;
