import React, {useState} from 'react';
import {navigate} from '@reach/router';


const AuthorForm = (props) => {
    const {initialName, onSubmitProp} = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name});
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <form>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </form>
                <button type="submit">Submit</button>
            </form>
            <button onClick={()=> navigate("/")}>Cancel</button>
        </div>
    )
}
export default AuthorForm