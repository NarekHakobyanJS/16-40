import React, { useState } from 'react'
import './Product.css'
import { NavLink } from 'react-router-dom'

const Product = ({product, setCart}) => {
  const [textLength, setTextLength] = useState(20)

  const handleToCart = (item) => {
    setCart((prev) => {
      return [...prev, item]
    })
  }
  return (
    <div className='product'>
      <NavLink to={`/products/${product.id}`}>
        <img className='nkar' src={product.image} />
      </NavLink>
        <h3>{product.title.length > textLength ? `${product.title.slice(0, textLength)}...` : product.title}</h3>
        <button
        onClick={() => handleToCart(product)}
        className='addToCardBTN'>add to card</button>
    </div>
  )
}

export default Product