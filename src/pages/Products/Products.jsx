import React from 'react'
import style from './Products.module.css'
import Product from '../../components/Product/Product'

const Products = ({ products, addToCard }) => {
  return (
    <div>
      <div className={style.products}>
        {
          products.map((product) => {
            return <Product key={product.id} product={product}  addToCard={addToCard} />
          })
        }
      </div>
    </div>
  )
}

export default Products