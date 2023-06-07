import { Link } from "react-router-dom";

export default function EveryDrinks({img, title, description, detail}) { 

    return ( 
        <Link to="Menu"> 
            <main className="flex gap-4 items-center "> 
                <img className="w-60 rounded-lg" src={img} alt="img" />
                <div>
                    <h1 className="font-black text-2xl">{title}</h1>
                    <div className="flex gap-2 pt-4">
                        <p>{description }</p>
                        <p>{ detail}</p>
                    </div>
                </div>
            </main>
        </Link>
    )
}