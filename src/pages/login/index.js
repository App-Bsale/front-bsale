import { Alert, Button, Form, Input, Space } from "antd";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoBsale from "../../assets/image/logo-bsale.svg";
import { SessionContext } from "../../context/SessionContext";
import { UsersFetcher } from "../../services/users_fetcher";
import "./login.css";

const Login = () => {
  const [form] = Form.useForm();
  const [messageError, setMessageError] = useState("");
  const [visible, setVisible] = useState(false);

  const ctx = useContext(SessionContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = sessionStorage.getItem("tokenUser");
  //   if (token) {
  //     ctx.signIn(token);
  //   }
  // }, [ctx]);

  // useEffect(() => {
  //   if (ctx.session.token) {
  //     navigate("/assignedChallenge");
  //   }
  // }, [ctx.session.token, navigate]);

  const onSubmit = async (values) => {
    try {
      const user = await UsersFetcher.login(values);
      if (user.token) {
        ctx.signIn(user.token, user.user, "user-normal");
        sessionStorage.setItem("tokenUser", user.token);
        console.log(ctx.session)
        navigate("/assignedChallenge")
      } else if (user.message) {
        setMessageError(user.message);
        setVisible(true);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="container-login">
      <img src={LogoBsale} alt="bsale" className="logo-login" />
      <h1 className="title-login">Desafíate!</h1>
      {visible && (
        <Space direction="vertical" style={{ width: "50%" }}>
          <Alert
            message="Warning"
            description={`${messageError}`}
            afterClose={() => {
              setVisible(false);
            }}
            // banner
            closable
            type="warning"
            showIcon
          />
        </Space>
      )}
      <Form
        form={form}
        name="control-hooks"
        onFinish={onSubmit}
        layout="vertical"
      >
        <Form.Item
          style={{ width: "100%" }}
          rules={[{ required: true }]}
          label="Email"
          name="email"
        >
          <Input className="input email" />
        </Form.Item>
        <Form.Item
          style={{ width: "100%" }}
          rules={[{ required: true }]}
          label="Password"
          name="password"
        >
          <Input className="input password" type="password" />
        </Form.Item>
        <Form.Item>
          <Button className="button" type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
