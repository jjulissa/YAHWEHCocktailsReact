import { Link } from "react-router-dom";

export default function NavLinkHead() { 

    return (
        <div className="flex gap-8 justify-center items-center">
            <Link className="hover:bg-pink-500 rounded-md p-1" to="/">Home</Link>
            <Link className="hover:bg-pink-500 rounded-md p-1" to="Menu">Menu</Link>
            <Link className="hover:bg-pink-500 rounded-md p-1" to="About">About</Link>
            <Link className="hover:bg-pink-500 rounded-md p-1" to="Contact">Contact</Link>
        </div>

    )
    
}