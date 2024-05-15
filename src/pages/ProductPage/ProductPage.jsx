import React from 'react'
import { useParams } from 'react-router-dom'
import './ProductPage.css'

const ProductPage = ({products}) => {

    const {id} = useParams()

    let product = products.filter((elem) => elem.id === +id)

  return (
    <div>
        {
            product.map((p) => {
                return (
                    <div key={p.id}>
                        <h2>{p.title}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductPage