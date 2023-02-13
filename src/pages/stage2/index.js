import { Button } from 'antd'
import React from 'react'
import Layout from '../components/Layout/Layout'

const Requirements = () => {
    return (
        <Layout>
            <div>
                <h4>Desarrollador Web</h4>
                <div>
                    <h4>Requerimientos</h4>
                    <div style={{ background: 'black', width: '576px', height: '324px', margin: 'auto', marginBottom: '32px' }}>
                    </div>
                    <p>
                        Eget mollis mauris vivamus eget cursus tincidunt mauris nisi.
                        Adipiscing sit dolor blandit et mattis. Sagittis non ultrices
                        viverra non ac tempor. Posuere felis at ultricies purus libero diam.
                        Non non urna tellus vehicula auctor ut massa malesuada. Nulla fermentum
                        in donec mi maecenas iaculis amet mauris est.
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br/>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    {/* <img src={example} alt='tabla normalizada' style={{ display: 'flex', margin: 'auto' }} /> */}
                    <h4>Criterio de evaluación</h4>
                    <p>
                        Eget mollis mauris vivamus eget cursus tincidunt mauris nisi.
                        Adipiscing sit dolor blandit et mattis. Sagittis non ultrices
                        viverra non ac tempor. Posuere felis at ultricies purus libero diam.
                        Non non urna tellus vehicula auctor ut massa malesuada. Nulla fermentum
                    </p>
                    <h4>Tests</h4>
                    <p>
                        Eget mollis mauris vivamus eget cursus tincidunt mauris nisi.
                        Adipiscing sit dolor blandit et mattis. Sagittis non ultrices
                        viverra non ac tempor. Posuere felis at ultricies purus libero diam.
                        Non non urna tellus vehicula auctor ut massa malesuada. Nulla fermentum
                    </p>
                    <Button type="primary" >Iniciar tests</Button>
                </div>
            </div>
        </Layout>
    )
}

export default Requirements