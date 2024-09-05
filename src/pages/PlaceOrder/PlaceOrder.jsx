import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext);

    return (
        <form className="place-order">
            <div className='place-order-left'>
                <p className='title'>Información de envío.</p>
                <div className="multi-fields">
                    <input type="text" placeholder='Nombre' />
                    <input type="text" placeholder='Apellido' />
                </div>
                <input type="email" placeholder='Correo electrónico' />
                <input type="text" placeholder='Dirección' />
                <div className="multi-fields">
                    <input type="text" placeholder='Ciudad' />
                    <input type="text" placeholder='Departamento' />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='Código ZIP' />
                    <input type="text" placeholder='País' />
                </div>
                <input type="text" placeholder='Número telefónico' />
                <div className='place-order-right'>
                    <div className='cart-total'>
                        <h2>Total en el Carrito</h2>
                        <div>
                            <div className='cart-total-details'>
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr/>
                            <div className='cart-total-details'>
                                <p>Envio</p>
                                <p>${getTotalCartAmount()===0?0:2}</p>
                            </div>
                            <hr/>
                            <div className='cart-total-details'>
                                <b>Total</b>
                                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                            </div>
                        </div>
                        <button>PROCEDA A PAGAR</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder