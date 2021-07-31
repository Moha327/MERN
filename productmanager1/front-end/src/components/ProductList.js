import React from 'react'

import { Link } from '@reach/router';



const ProductList=(props)=> {
    return (
        <div>
            
            All Products:
            {props.products.map((product)=>{
                return <p> < Link to = {"/products/" + product._id} key={product._id}>{product.title}</Link> </p>
            })}
            
         
        </div>
    )
}

export default ProductList
