import NavLink from "../NavLinkHead/NavLinkHead.jsx" 
import LogoCocktails from "../../assets/LogoCocktails.png"

export default function Header() { 

    return (
        <header className="flex flex-col gap-4 pt-5"> 
            <div className="flex justify-around">
                <h1>Cocktails<span className="text-pink-500 font-black text-2xl">YAHWEH</span></h1>
                <NavLink />
            </div> 
            <div className="flex justify-center items-center">
                <img className="w-full h-96" src={LogoCocktails} alt="head" />
            </div>
        </header>
    )
    
}

