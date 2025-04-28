<<<<<<< HEAD
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
=======
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from './header.jsx';
import Hero from './hero.jsx';
import Display from '../product-management/display.jsx';
import TopSelling from '../product-management/top-selling.jsx'; // Changed to camelCase naming
import Footer from './footer.jsx';
import ProductList from "../product-management/product.jsx"; // Fixed path if needed

const App = () => { // Capitalized component name for consistency
  return (
    <BrowserRouter> {/* Moved BrowserRouter to wrap all components */}
      <Header />
      <ProductList />
      <Hero />
      <Display />
      <TopSelling /> {/* Updated component name in JSX */}
      <Footer />
    </BrowserRouter>
  );
}

export default App; // Capitalized export name
>>>>>>> d40cb0c (update)
