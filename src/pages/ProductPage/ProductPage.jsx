import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductPage.css'

const ProductPage = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((res) => setProduct(res))
    }, [])


    return (
        <div>

            <div key={product?.id}>
                <h2>{product?.title}</h2>
            </div>

        </div>
    )
}

export default ProductPage