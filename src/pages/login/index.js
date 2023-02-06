import { Button, Form, Input } from "antd";
import LogoBsale from "../../assets/image/logo-bsale.svg";
import { LoginUsersFetcher } from "../../services/login_users_fetcher";
import "./login.css";
const Login = () => {
  const [form] = Form.useForm();

  const onSubmit =  (values) => {
    try {
      LoginUsersFetcher.login(values);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="container">
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
          <Input className="input password" />
        </Form.Item>
        <Form.Item>
          <Button className="button" type="primary" htmlType="submit">
            Primary Button
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
