
    import React from "react";
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import Header from './Header';
    import Hero from './Hero';
    import Display from './Display';
    import Top_selling from './Top_selling';
    import Footer from './Footer';
    import SignIn from './logIn'; // Adjust path if necessary
    import SignUp from './SignUp';
    import Cart from './Cart/cart-detail';
    import Profile from './profile-management/update-profile';
    function App() {
      return (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Display />
                <Top_selling />
              </>
            } />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/new-arrivals" element={<Display />} />
            <Route path="/top-selling" element={<Top_selling />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/profile" element={<Profile/>} />
            {/* Add more routes as needed */}
          </Routes>
          <Footer />
        </Router>
      );
    }
    
    export default App;


