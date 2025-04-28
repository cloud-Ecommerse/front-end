import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Display from './product-management/display';
import TopSelling from './product-management/top-selling';
import Footer from './components/footer';
import SignIn from './authentication/log-in';
import SignUp from './authentication/sign-up';

import Profile from './profile-management/update-profile';
import ProductDetail from "./product-management/product-detail";
import Hero from './components/hero'; // <-- You forgot this import

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    // Initialize animations
    AOS.init({ duration: 1000 });
  }, []);

  
   
    
    

  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/home" element={<><Hero /></>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product-details" element={<ProductDetail />} />
        <Route path="/new-arrivals" element={<Display />} />
        <Route path="/top-selling" element={<TopSelling />} />
        
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



/*import ProductList from './product-management/product';

function App() {
  return (
    <div className="App">
      <h1>My E-commerce App</h1>
      <ProductList /> 
    </div>
  );
}

export default App;*/
