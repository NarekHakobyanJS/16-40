import React, { useState } from 'react'
import './Cart.css';

const Cart = ({ cart, btnsClicks, removeCartItem }) => {
    const [cartCount, setCartCount] = useState(cart.count);


    const minus = () => {
        if (cartCount > 1) {
            setCartCount(cartCount - 1)
        }
        btnsClicks(cartCount, cart.id)
    }

    const plus = () => {
        setCartCount(cartCount + 1)
        btnsClicks(cartCount, cart.id)
    }


    const removeItem = (id) => {
        removeCartItem(id)
    }

    return (
        <>
            <div className='cart'>
                
                <div className='cart-left'>
                    <h3>{cart.title}</h3>
                    <img src={cart.image} />
                </div>
                <div className='cart-right'>
                    <span>count : <b>{cart.count}</b></span>
                    <button onClick={minus}>-</button>
                    <span>{cart.initprice}</span>
                    <button onClick={plus}>+</button>
                </div>
                <button onClick={() => removeItem(cart.id)}>X</button>
            </div>
        </>
    )
}

export default Cart