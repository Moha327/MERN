import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const AuthorDetail = props => {

    const [author, setAuthor] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + props.id)
            .then(res => setAuthor(res.data))
    }, [props.id])
    return (
        <div>
           
            <h1>{author.name}</h1>
            
            <Link to={"/author/" + author._id + "/edit"}>
                
              Edit
           </Link>
               
        </div>
    )
}

export default AuthorDetail