import Header from './header.jsx';
import Hero from './hero.jsx';
import Display from '../product-management/display.jsx';
import Top_selling from '../product-management/top-selling.jsx';
import Footer from './footer.jsx';
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