import { Button } from 'antd'
import LogoBsale from '../../assets/image/logo-bsale.svg'
import './navbar.css'

const Navbar = () => {
return(
    <>
        <nav className='navbar'>
            <div className='wrapper'>
            <div className='container'>
                <img className='logo' src={LogoBsale} alt="logo-navbar"/>
                <div className='text'>Desafíate!</div>    
            </div>
            <Button className='button' type="primary">Log out</Button>
            </div>
        </nav>
    </>
)
}

export default Navbar