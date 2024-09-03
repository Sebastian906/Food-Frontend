import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu, setMenu] = useState("menu");

    return (
        <div className='navbar'>
            <img src={assets.logo} alt='' className='logo'/>
            <ul className="navbar-menu">
                <li onClick={()=>setMenu("inicio")} className={menu==="inicio"?"active":""}>Inicio</li>
                <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
                <li onClick={()=>setMenu("app-movil")} className={menu==="app-movil"?"active":""}>App Movil</li>
                <li onClick={()=>setMenu("contacto")} className={menu==="contacto"?"active":""}>Contactenos</li>
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