import Layout from '../../components/Layout/Layout'
import React from 'react'
import { Button } from 'antd'
import './style.css'


const StageOneCode = () => {
    return (
        <Layout>
            <div className='container-stageOneCode'>
                <h4>Desarrollador Web Junior</h4>
                <div className='test'>
                    <h4>Pregunta 6 de 10</h4>
                    <p className='test-text'>
                        Eget mollis mauris vivamus eget cursus tincidunt mauris nisi. 
                        Adipiscing sit dolor blandit et mattis. Sagittis non ultrices
                        viverra non ac tempor. Posuere felis at ultricies purus libero diam.
                        Non non urna tellus vehicula auctor ut massa malesuada. Nulla fermentum
                        in donec mi maecenas iaculis amet mauris est.
                    </p>
                    <div style={{background:'black', width:'800px', height: '270px', margin: 'auto'}}>
                    </div>
                    <Button className='button-test' type="primary" >Test</Button>
                    <div className='description-test'>
                        <div>
                            <input type='radio' />Descripción de test
                        </div>
                        <div>
                            <input type='radio' />Descripción de test
                        </div>
                        <div>
                            <input type='radio' />Descripción de test
                        </div>
                        <div>
                            <input type='radio' />Descripción de test
                        </div>
                    </div>
                    <Button className='button-send' type="primary" >Enviar</Button>
                </div>
            </div>
        </Layout>
    )
}

export default StageOneCode