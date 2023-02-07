import Layout from '../../components/Layout/Layout'
import React from 'react'
import { Button } from 'antd'


const StageOneCode = () => {
    return (
        <Layout>
            <div>
                <h4>Desarrollador Web Junior</h4>
                <h4>Pregunta 6 de 10</h4>
                <div>
                    <p>
                        Eget mollis mauris vivamus eget cursus tincidunt mauris nisi. 
                        Adipiscing sit dolor blandit et mattis. Sagittis non ultrices
                        viverra non ac tempor. Posuere felis at ultricies purus libero diam.
                        Non non urna tellus vehicula auctor ut massa malesuada. Nulla fermentum
                        in donec mi maecenas iaculis amet mauris est.
                    </p>
                    <div style={{background:'black', width:'800px', height: '270px'}}>
                    </div>
                    <div>
                        <input type='radio' />Descripción de test
                        <input type='radio' />Descripción de test
                        <input type='radio' />Descripción de test
                        <input type='radio' />Descripción de test
                    </div>
                    <Button type="primary" >Enviar</Button>
                </div>
            </div>
        </Layout>
    )
}

export default StageOneCode