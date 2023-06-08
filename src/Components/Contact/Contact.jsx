import edificio from "../../assets/edificio.png"
import gmail from "../../assets/gmail.png"
import telefono from "../../assets/llamar.png"
import reloj from "../../assets/reloj.png"

export default function Contact() { 

    return (
        <section className="flex justify-center items-center p-5"> 
        <main className="flex gap-7 justify-between items-center m-3 w-9/12 border-4 rounded-xl"> 
            <section className="w-2/4 flex flex-col gap-6 pl-12"> 
                <h1>Contact Us</h1>
                <p>Feel free to contact us any time. We will get back to you as soon as we can!!!</p>

                <form action="" className="flex flex-col gap-6">
                    <input className="border-4 rounded-xl p-1 border-pink-500" type="text" name="name" id="name" placeholder="Name" />
                    <input className="border-4 rounded-xl p-1 border-pink-500"  type="email" name="email" id="email" placeholder="Email" /> 
                    <textarea className="border-4 rounded-xl p-1 border-pink-500"  name="message" id="message" cols="30" rows="10" placeholder="Message"/>
                    <button className="p-4 w-full rounded-full bg-black text-white" type="submit">Send</button>
                </form>
            </section>

            <aside className="w-1/5 bg-pink-500 h-screen flex justify-center items-end	"> 
                <img className="w-14 pb-5" src={reloj} alt="reloj" />
            </aside>

            <div className="bg-slate-300 p-10 absolute top-[90%] right-[13.9%] h-2/6 flex flex-col gap-5"> 
                <h1>Info</h1>
                <div className="flex gap-4">
                    <img className="w-5" src={gmail} alt="fotoGmail" />
                    <p>info@cocktailsYahweh.com</p>
                </div>
                <div className="flex gap-4">
                    <img className="w-5" src={telefono} alt="telefono" />
                    <p>+34123456789</p>
                </div>
                <div className="flex gap-4">
                    <img className="w-5" src={edificio} alt="direccion" />
                    <p>San-Telmo 123, Moreno</p>
                </div>
            </div>

        </main>
        </section>
    )
    
}