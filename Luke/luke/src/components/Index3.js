import React, { useState, useEffect} from 'react'

import axios from 'axios'

export const Planets = (props) => {
    const [toadd,setToadd]=useState('')
    useEffect(()=>{
        axios.get("https://swapi.dev/api/planets/"+props.id)
        .then((res)=>setToadd(res.data))
        .catch((err)=>console.log(err))
    },[props.id])
    return (
        <div>
            <h1>name is :{toadd.name}</h1>
            <h2>climate is :{toadd.climate}</h2>
            <h2>terrain is : {toadd.terrain}</h2>
            <h2>surface_water color: {toadd.surface_water}</h2>
            <h2> population color : {toadd.population}</h2>
            
        </div>
    )
}
export default Planets;