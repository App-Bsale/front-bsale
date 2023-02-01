import { Input } from 'antd'
import { Button } from 'antd'
import LogoBsale  from '../../assets/image/logo-bsale.svg'
const Login = () => {
    return (
        <div>
            <img src={LogoBsale} alt='bsale' />
            <h1>Desafíate!</h1>
            <Input style={{border:"2px red solid"}} placeholder="User Name" />
            <Input placeholder="Password" />
            <Button type="primary">Primary Button</Button>
        </div>
    )
}

export default Login