import { navigate } from '@reach/router'
import React, { useState } from 'react'

export const Page2 = () => {
    const [name,setName]=useState("people")
    const[id,setId]=useState(1)
    const handler = (e) =>{
        e.preventDefault();
        navigate(`/${name}/${id}`)
    }
    return (
        <div>
               <form onSubmit={handler}>
                <select onChange={(e)=>setName(e.target.value)}>
                    <option value="people">Person</option>
                    <option value="Planets">Planets</option>
                    <option value="Spaceships">Spaceships</option>
                    <option value="Vehicles">Vehicles</option>
                    <option value="people">people</option>
                    <option value="Films ">Films </option>
                    <option value="Species">Species</option>
                </select>
                <input type="number" onChange={(e)=>setId(e.target.value)}/>
                <input type="submit" value="Search"/>
            </form>
           
        </div>
    )
}
export default Page2;