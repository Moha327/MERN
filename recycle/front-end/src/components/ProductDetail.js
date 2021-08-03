import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

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
            <Link to={"/product/" + product._id + "/edit"}>
                
              Edit
           </Link>
        </div>
    )
}

export default ProductDetail