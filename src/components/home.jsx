import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from './header.jsx';
import Hero from './hero.jsx';
import Display from '../product-management/display.jsx';
import TopSelling from '../product-management/top-selling.jsx'; // Updated to camelCase naming
import Footer from './footer.jsx';
import ProductList from "../product-management/product.jsx"; // Included ProductList component

const App = () => { // Capitalized component name for consistency
  return (
    <BrowserRouter> {/* BrowserRouter wraps all components */}
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