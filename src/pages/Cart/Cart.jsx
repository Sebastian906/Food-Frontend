import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const {cartItems, food_list, removeFromCart, getTotalCartAmount, url} = useContext(StoreContext);

    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className='cart-items-title'>
                    <p>Imagen</p>
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
                            <div key={item._id}>
                                <div className='cart-items-title cart-items-item'>
                                    <img src={url+"/images/"+item.image} alt=''/>
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
                            <p>${getTotalCartAmount()===0?0:2}</p>
                        </div>
                        <hr/>
                        <div className='cart-total-details'>
                            <b>Total</b>
                            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/order')}>PROCEDA A LA CAJA</button>
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