import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
const deleteComp =(props)=> {
    const { removeFromDom } = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
    }
    return (
        <div>
            {props.products.map((author, idx) => {
                return <p key={idx}>
                    <Link to={"/" + author._id}>
                        {author.name}
                    |</Link>
                    <button onClick={(e)=>{deleteAuthor(author._id)}}>
                        Delete
                    </button>
                    
                </p>
            })}
        </div>
    )
}
export default deleteComp