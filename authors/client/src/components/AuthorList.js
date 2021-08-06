import axios from 'axios'
import { Link } from '@reach/router';



const AuthorList=(props)=> {
    const { removeFromDom } = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
    }
    return (
        
        <div>
            
            All Products:
            {props.authors.map((author)=>{
                return <p> < Link to = {"/authors/" + author._id} key={author._id}>{author.name}</Link> 
                <button onClick={(e)=>{deleteAuthor(author._id)}}>
                        Delete
                    </button></p>   

                
            })}
            
         
        </div>
        
    )
}
export default AuthorList