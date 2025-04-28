import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from './header.jsx';
import Hero from './hero.jsx';
import Display from '../product-management/display.jsx';
<<<<<<< HEAD
import TopSelling from '../product-management/top-selling.jsx'; // Updated to camelCase naming
import Footer from './footer.jsx';
import ProductList from "../product-management/product.jsx"; // Included ProductList component

const App = () => { // Capitalized component name for consistency
  return (
    <BrowserRouter> {/* BrowserRouter wraps all components */}
=======
import TopSelling from '../product-management/top-selling.jsx'; // Changed to camelCase naming
import Footer from './footer.jsx';
import ProductList from "../product-management/product.jsx"; // Fixed path if needed

const App = () => { // Capitalized component name for consistency
  return (
    <BrowserRouter> {/* Moved BrowserRouter to wrap all components */}
>>>>>>> d40cb0c33546f156fffa4fb05d79ada8c23e1594
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