import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Update = props  => {
    const { id } = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/updateproduct/' + props.id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [props.id])
    const Update = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateproduct/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={Update}>
                <p>
                    <label>Title</label><br />
                    <input type="String" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="Number" 
                    name="Price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="String" 
                    name="Description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update