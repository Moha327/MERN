import React, { useState, useEffect} from 'react'
import axios from 'axios'

export const Lukee = (props) => {
    const [toadd,setToadd]=useState('')
    useEffect(()=>{
        axios.get("https://swapi.dev/api/people/"+props.id)
        .then((res)=>setToadd(res.data))
        .catch((err)=>console.log(err))
    },[props.id])
    return (
        <div>
            <h1>name is :{toadd.name}</h1>
            <h2>hight is :{toadd.height}</h2>
            <h2>mass is : {toadd.mass}</h2>
            <h2>hair color: {toadd.hair_color}</h2>
            <h2> skin color : {toadd.skin_color}</h2>
            
        </div>
    )
}
export default Lukee;