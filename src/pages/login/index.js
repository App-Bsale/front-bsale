import { Button, Form, Input } from 'antd'
import LogoBsale  from '../../assets/image/logo-bsale.svg'
import "./login.css"
const Login = () => {
    const [form] = Form.useForm();
    return (
        <div className='container'>
            <img src={LogoBsale} alt='bsale' className='logo-login' />
            <h1 className='title-login' >Desafíate!</h1>
            <Form
                form={form}
                layout="vertical"
            >        
                <Form.Item label="Email" >
                    <Input className='input email'/>
                </Form.Item>
                <Form.Item label="Password">
                    <Input className='input password'/>
                </Form.Item>
                <Form.Item>
                    <Button className='button' type="primary">Primary Button</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;
