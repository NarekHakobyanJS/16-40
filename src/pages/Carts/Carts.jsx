import React from 'react'
import './Carts.css'
import Cart from '../../components/Cart/Cart'

const Carts = ({cart}) => {
  return (
    <div>

      <div className='carts-block'>
        {
          cart.map((c) => {
            return <Cart cart={c} key={c.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Carts