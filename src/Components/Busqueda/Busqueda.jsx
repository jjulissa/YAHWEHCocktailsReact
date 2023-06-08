import Buscar from "../../assets/buscar.png"
import { useState } from "react";

export default function Busqueda() { 
    const [buscarText, setBuscarText] = useState(""); 

    const handleClick = (event) => { 
        event.preventDefault();
        console.log(event.target.value);


        fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.value}`)
            .then(res => res.json()) 
            .then(data => console.log(data))
  };

    return (
        <div className="flex gap-5 justify-center items-center pt-2"> 
            <input onChange={handleClick} className="divide-solid border-pink-500 w-3/5 rounded-lg border-4 p-2" input={buscarText} type="search" name="search" id="search" />
            <img className="w-8" src={Buscar} alt="imgBuscar" />
        </div>
    )    
}