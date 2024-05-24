import React, { useState } from 'react'
import style from './Products.module.css'
import Product from '../../components/Product/Product'

const Products = ({ products, addToCard }) => {

  // 
  // 
  // Paginate 
  // 

  // const [p, setP] = useState(products.slice(0, 5))
  // const [classItem, setClassItem] = useState(0)

  // const countItem = 5
  // const pageCount = products.length/countItem
  // const arr = [];

  // for(let i = 1; i <= pageCount; i++ ){
  //   arr.push(i)
  // }


  // const paginate = (page) => {
  //   setClassItem(page)
  //   // console.log(page);
  //   if(page === 1) {
  //     let a = products.filter((el) => el.id <= 5)
  //     setP(a);
  //   }

  //   if(page === 2) {
  //     let a = products.filter((el) => el.id <= 10 && el.id > 5)
  //     setP(a);
  //   }

  //   if(page === 3) {
  //     let a = products.filter((el) => el.id <= 15 && el.id > 10)
  //     setP(a);
  //   }


  //   if(page === 4) {
  //     let a = products.filter((el) => el.id <= 20 && el.id > 15)
  //     setP(a);
  //   }
  // }


  return (
    <div>
      <div className={style.products}>
        {
          products.map((product) => {
            return <Product key={product.id} product={product}  addToCard={addToCard} />
          })
        }
      </div>
      <div>
        {
         // arr.map((p) => <button className={p === classItem ? 'a' : ''}  key={p} onClick={() => paginate(p)}>{p}</button>)
        }
      </div>
    </div>
  )
}

export default Products