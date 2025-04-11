import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Hero from './components/hero';
import Display from './product-management/display';
import TopSelling from './product-management/top-selling';
import Footer from './components/footer';
import SignIn from './authentication/log-in';
import SignUp from './authentication/sign-up';
import Cart from './cart/cart-detail';
import Profile from './profile-management/update-profile';
import listAllUser from './api/user/listAllUser';

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    // Initialize animations
    AOS.init();
    AOS.refresh({ duration: 1000 });
    

    // Fetch user list only once on mount
    // listAllUser();
    // console.log("Home page loaded");
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Display />
            <TopSelling />
          </>
        } />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/new-arrivals" element={<Display />} />
        <Route path="/top-selling" element={<TopSelling />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
