import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Iniciar Sesión")

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className='login-popup-inputs'>
                    {currState==="Iniciar Sesión"?<></>:<input type="text" placeholder='Nombre' required />}
                    <input type="email" placeholder='Correo' required />
                    <input type="password" placeholder='Contraseña' required />
                </div>
                <button>{currState==="Registrarse"?"Crear Cuenta":"Iniciar Sesión"}</button>
                <div className='login-popup-condition'>
                    <input type="checkbox" required />
                    <p>Al continuar, esta de acuerdo con nuestros terminos y condiciones de privacidad.</p>
                </div>
                {currState==="Iniciar Sesión"
                ?<p>Crear una cuenta nueva? <span onClick={()=>setCurrState("Registrarse")}>Haga click aqui</span></p>
                :<p>Ya tiene una cuenta? <span onClick={()=>setCurrState("Iniciar Sesión")}>Inicie sesión</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup