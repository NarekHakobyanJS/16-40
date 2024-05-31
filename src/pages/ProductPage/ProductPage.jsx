import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductPage.css'
import { instance } from '../../App'

const ProductPage = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        instance.get(`/products/${id}`)
            .then((res) => setProduct(res.data))
    }, [])

  return (
    <div>
        <h2>{product.title}</h2>
        <img src={product.image} />
    </div>
  )
}

export default ProductPage