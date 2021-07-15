import React, {Component} from 'react';
class PropItUp extends Component{
    render(){
     const{firstName, lastName, age , hair} = this.props;
     return(
         <div>
            <h1>{firstName} {lastName}</h1>
            <p>Age : {age}</p>
            <p>Hair Color: {hairColor}</p>
         </div>
     )
    }
}