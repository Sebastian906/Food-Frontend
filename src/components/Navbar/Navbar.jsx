import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
    return (
        <div className='nav'>
            <img src={assets.logo} alt='' className='logo'/>
            <ul className="navbar-menu">
                <li>Inicio</li>
                <li>Menu</li>
                <li>App Movil</li>
                <li>Contactenos</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt=''/>
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt=''/>
                    <div className="dot"></div>
                </div>
                <button>Iniciar Sesión</button>
            </div>
        </div>
    )
}

export default Navbar