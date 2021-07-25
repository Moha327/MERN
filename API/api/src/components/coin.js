import React ,{useState,useEffect} from "react";
const Example = (props) => {
    const [pokemon, setPeople] = useState([]);
 const rem = (e) => {   
   
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then((x) => setPeople(x.results))
           
 };
 
    return (
        
        <div>
           
                <button onClick={ rem}> get pokemons</button>
              
                {
                pokemon.map((pokemon, index) => (
                    <div key={ index }>
                        <p>{ pokemon.name }</p>
                    </div>
                ) )
            }
        </div>
    );
};
export default Example;