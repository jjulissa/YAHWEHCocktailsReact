import Buscar from "../../assets/buscar.png"


export default function Busqueda() { 

    return (
        <div className="flex gap-5 justify-center items-center pt-2"> 
            <input className="divide-solid border-rose-500 w-3/5 rounded-lg" type="search" name="search" id="search" />
            <img className="w-8" src={Buscar} alt="imgBuscar" />
        </div>
    )
    
}