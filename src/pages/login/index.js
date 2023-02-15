import { Button, Form, Input } from "antd";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoBsale from "../../assets/image/logo-bsale.svg";
import { SessionContext } from "../../context/SessionContext";
import { UsersFetcher } from "../../services/users_fetcher";
import "./login.css";

const Login = () => {
  const [form] = Form.useForm();

  const ctx = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("tokenUser");
    if (token) {
      ctx.signIn(token);
    }
  }, [ctx]);

  useEffect(() => {
    console.log(ctx.session.token);
    if (ctx.session.token) {
      navigate("/assignedChallenge");
    }
  }, [ctx.session.token, navigate]);

  const onSubmit = async (values) => {
    try {
      const user = await UsersFetcher.login(values);
      if (user.token) {
        ctx.signIn(user.token);
        sessionStorage.setItem("tokenUser", user.token);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="container-login">
      <img src={LogoBsale} alt="bsale" className="logo-login" />
      <h1 className="title-login">Desafíate!</h1>
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
