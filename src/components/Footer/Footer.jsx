import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt=''/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem ea illo aperiam, aspernatur eius veritatis maxime sequi a tempore molestias! Asperiores, nobis corrupti consequuntur quaerat magnam distinctio est accusamus!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPAÑIA</h2>
                    <ul>
                        <li>Inicio</li>
                        <li>Sobre Nosotros</li>
                        <li>Entregas</li>
                        <li>Políticas de Privacidad</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>ENTRE EN CONTACTO</h2>
                    <ul>
                        <li>+57 305 375 2168</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className='footer-copyright'>
                Copyright 2024 @ Tomato.com - Todos los Derechos Reservados.
            </p>
        </div>
    )
}

export default Footer