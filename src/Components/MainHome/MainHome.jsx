import { useContext } from "react"
import {CocktailsContext} from "../../App.js"
import EveryDrinks from '../MainHome/EveryDrinks.jsx'

export default function MainHome() { 

    const {cocktails} = useContext(CocktailsContext)
    console.log(cocktails);

    return ( 
        <main className="flex gap-6 flex-wrap justify-center items-center m-12"> 
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