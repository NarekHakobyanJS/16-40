import React, { useContext } from 'react'
import './Carts.css'
import Cart from '../../components/Cart/Cart'
import OrderForm from '../../components/OrderForm/OrderForm'
import MyContext from '../../MyContext'
const Carts = () => {

  const { btnsClicks, removeCartItem} = useContext(MyContext)

  let cart = JSON.parse(localStorage.getItem('cartStore'))

  return (
    <div className='c'>

      <div className='carts-block'>
        {
        cart.length ?
          cart.map((c) => {
            return <Cart 
              key={c.id}
              cart={c} 
              btnsClicks={btnsClicks} 
              removeCartItem={removeCartItem}/>
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