import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("menu");

    return (
        <div className='navbar'>
            <img src={assets.logo} alt='' className='logo'/>
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>setMenu("inicio")} className={menu==="inicio"?"active":""}>Inicio</Link>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
                <a href='#app-download' onClick={()=>setMenu("app-movil")} className={menu==="app-movil"?"active":""}>App Movil</a>
                <a href='#footer' onClick={()=>setMenu("contacto")} className={menu==="contacto"?"active":""}>Contactenos</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt=''/>
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt=''/>
                    <div className="dot"></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Iniciar Sesión</button>
            </div>
        </div>
    )
}

export default Navbar