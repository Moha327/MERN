import React from 'react'
import axios from 'axios'
import { Link } from '@reach/router';



const ProductList=(props)=> {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/deleteproduct/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        
        <div>
            
            All Products:
            {props.products.map((product)=>{
                return <p> < Link to = {"/products/" + product._id} key={product._id}>{product.title}</Link> 
                <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button></p>

                
            })}
            
         
        </div>
        
    )
}
export default ProductList