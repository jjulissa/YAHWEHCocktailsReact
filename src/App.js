import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState,  useEffect, createContext } from "react";
import Header from "./Components/Header/Header.jsx"
import Home from "./Components/Home/Home.jsx"
import Menu from "./Components/Menu/Menu.jsx"
import About from "./Components/About/About.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import Footer from "./Components/Footer/Footer.jsx"


import './App.css';

export const CocktailsContext = createContext() 

function App() { 

  const [cocktails, setCocktails] = useState([])

  useEffect(() => { 
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s") 
    .then(res => res.json()) 
    .then(data => { setCocktails(data.drinks)
    })
  },[])

  return (
    <div className="App font-mono"> 
      <CocktailsContext.Provider value={{cocktails}}> 
        <BrowserRouter>
          <Header /> 
            <Routes> 
              <Route path="/" element={<Home/>} />
              <Route path="Menu" element={<Menu/>} />
              <Route path="About" element={<About/>} />
              <Route path="Contact" element={<Contact/>} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </CocktailsContext.Provider>
    </div>
  );
}

export default App;
