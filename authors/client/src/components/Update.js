import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Update = props  => {
    const { id } = props;
    const [name, setName] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/updateauthors/' + props.id)
            .then(res => {
                setName(res.data.name);
            })
    }, [props.id])
    const Update = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateauthors/' + id, {
            name
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={Update}>
                <p>
                    <label>Edit</label><br />
                    <input type="String" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input type="submit" />
                
            </form>
            
        </div>
    )
}
export default Update