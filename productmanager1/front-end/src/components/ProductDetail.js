import React, { useEffect, useState } from 'react'
import axios from 'axios';


const ProductDetail = props => {

    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [props.id])
    return (
        <div>
            <h1>Title: {product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default ProductDetail

