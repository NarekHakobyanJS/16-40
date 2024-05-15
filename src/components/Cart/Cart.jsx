import React from 'react'
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <div className='cart-left'>
                <h3>{cart.title}</h3>
                <img src={cart.image} />
            </div>
            <div className='cart-right'>
                <button>-</button>
                <span>{cart.price}</span>
                <button>+</button>
            </div>
        </div>
    )
}

export default Cart