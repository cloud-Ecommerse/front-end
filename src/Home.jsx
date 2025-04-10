import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Display from './Display.jsx';
import Top_selling from './Top_selling.jsx';
import Footer from './Footer.jsx';
import { BrowserRouter } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    
      < Hero />
      < Display />
      < Top_selling />
      < Footer />
    </>
  );
}

export default App