import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

    const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);

    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className='cart-items-title'>
                    <p>Items</p>
                    <p>Nombre</p>
                    <p>Precio</p>
                    <p>Cantidad</p>
                    <p>Total</p>
                    <p>Eliminar</p>
                </div>
                <br/>
                <hr/>
                {food_list.map((item,index)=>{
                    if(cartItems[item._id]>0) {
                        return (
                            <div>
                                <div className='cart-items-title cart-items-item'>
                                    <img src={item.image} alt=''/>
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                                    <hr/>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='cart-bottom'>
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
                            <p>${2}</p>
                        </div>
                        <hr/>
                        <div className='cart-total-details'>
                            <b>Total</b>
                            <b>${getTotalCartAmount()+2}</b>
                        </div>
                    </div>
                    <button>PROCEDA A LA CAJA</button>
                </div>
                <div className='cart-promocode'>
                    <div>
                        <p>Si tiene un código de promoción, Ingreselo aquí.</p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder='Código de promoción' />
                            <button>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart