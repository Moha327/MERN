import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [lastname,setLastname]=useState("");
    const [confpassword,setConfpassword]=useState("");
   

    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username,lastname, email, password,confpassword };
        
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div id="input">
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div id="input">
                <label>LastName: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div id="input">
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div id="input">
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div id="input">
                <label>ConfPassword: </label>
                <input type="text" onChange={ (e) => setConfpassword(e.target.value) } />
            </div>
          
        </form>
        <p>First name:{username}</p>
        <p>Laste name:{lastname}</p>
        <p>Email:{email}</p>
        <p>Password:{password}</p>
        <p>Confirmation Password:{confpassword}</p>
       
        </div>


    );
};
    
export default UserForm;