import React, { useContext, useState } from 'react'
import style from './Products.module.css'
import Product from '../../components/Product/Product'
import MyContext from '../../MyContext'

const Products = () => {

  const { products, addToCard } = useContext(MyContext)
  return (
    <div>
      <div className={style.products}>
        {
          products.map((product) => {
            return <Product
              key={product.id}
              product={product}
              addToCard={addToCard}
            />
          })
        }
      </div>
    </div>
  )
}

export default Products