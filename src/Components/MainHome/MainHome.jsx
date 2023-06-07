import { useContext } from "react"
import {CocktailsContext} from "../../App.js"
import EveryDrinks from '../MainHome/EveryDrinks.jsx'

export default function MainHome() { 

    const {cocktails} = useContext(CocktailsContext)
    console.log(cocktails);

    return ( 
        <main className="grid grid-cols-2 gap-8 m-8 justify-center items-center"> 
            { 
                cocktails.map((trago, i) => { 
                    return <EveryDrinks 
                    img={trago.strDrinkThumb}
                    title={trago.strDrink}
                    description={trago.strCategory}
                    detail={trago.strAlcoholic}
                    />
                })
            }
        </main>
    ) 
}