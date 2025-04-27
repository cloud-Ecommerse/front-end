import Header from './header.jsx';
import Hero from './Hero.jsx';
import Display from '../product-management/display.jsx';
import Top_selling from '../product-management/top-selling.jsx';
import Footer from './footer.jsx';
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ProductList from "./product-management/product";
const app = ()=> {
   
  return (
    <>
      
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
     
      <ProductList />
 
      < Hero />
      < Display />
      < Top_selling />
      < Footer />
    </>
  );
}

export default app;