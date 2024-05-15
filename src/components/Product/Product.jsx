import React, { useState } from 'react'
import './Product.css'
import { NavLink } from 'react-router-dom'

const Product = ({product}) => {
  const [textLength, setTextLength] = useState(20)

  return (
    <div className='product'>
      <NavLink to={`/products/${product.id}`}>
        <img className='nkar' src={product.image} />
      </NavLink>
        <h3>{product.title.length > textLength ? `${product.title.slice(0, textLength)}...` : product.title}</h3>
        <button className='addToCardBTN'>add to card</button>
    </div>
  )
}

export default Product