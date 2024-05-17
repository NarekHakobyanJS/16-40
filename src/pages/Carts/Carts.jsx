import React from 'react'
import './Carts.css'
import Cart from '../../components/Cart/Cart'
import OrderForm from '../../components/OrderForm/OrderForm'
const Carts = ({cart, btnsClicks, removeCartItem}) => {
  return (
    <div className='c'>

      <div className='carts-block'>
        {
        cart.length ?
          cart.map((c) => {
            return <Cart cart={c} key={c.id} btnsClicks={btnsClicks} removeCartItem={removeCartItem}/>
          })
          :
          <h1>Cart is Empty</h1>
        }
      </div>
      <div>
        <OrderForm />
      </div>
    </div>
  )
}

export default Carts