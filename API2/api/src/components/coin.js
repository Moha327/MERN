import React ,{useState,useEffect} from "react";
import axios from 'axios';
const Example = (props) => {
    const [pokemon, setPeople] = useState([]);
 const rem = (e) => {   
   
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
            .then((res) =>{
                console.log(res.data.results)
                setPeople(res.data.results)
            })
           
 };
 
    return (
        
        <div>
           
                <button onClick={ rem}> get pokemons</button>
              
                {
                pokemon.map((x, index) => (
                    <div key={ index }>
                        <p>{ index } { x.name }</p>
                    </div>
                ) )
            }
        </div>
    );
};
export default Example;