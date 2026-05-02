
import { useState } from "react"

export function Input({type,placeholder})
{

    const [name,setname]=useState("Kendal")


    return(
        <input value={name} type={type} placeholder={placeholder}/>

    )

}