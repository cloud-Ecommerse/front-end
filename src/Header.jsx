import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/logo.png";

import cartIcon from "/src/assets/shopping_cart.svg";
import accountIcon from "/src/assets/account.svg";
import searchIcon from "/src/assets/search.svg";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between flex-wrap gap-4">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="max-w-16 max-h-16 object-contain" />
            <div className="space-x-10">
              <span className="text-3xl font-bold text-blue-600">Cloth Shop</span>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-md font-semibold ${isActive ? "text-blue-800" : "text-black"} hover:text-blue-700`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `text-md font-semibold ${isActive ? "text-blue-800" : "text-black"} hover:text-blue-700`
                }
              >
                Shop
              </NavLink>
              <NavLink
                to="/new-arrivals"
                className={({ isActive }) =>
                  `text-md font-semibold ${isActive ? "text-blue-800" : "text-black"} hover:text-blue-700`
                }
              >
                New Arrival
              </NavLink>
              <NavLink
                to="/top-selling"
                className={({ isActive }) =>
                  `text-md font-semibold ${isActive ? "text-blue-800" : "text-black"} hover:text-blue-700`
                }
              >
                Top Selling
              </NavLink>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <div className="relative w-64">
              <input
                type="search"
                placeholder="Search for products"
                aria-label="Search"
                className="w-full h-12 pl-12 pr-12 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <img
                src={searchIcon}
                alt="Search Icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none"
              />
            </div>

            {/* Auth Buttons */}
            <NavLink
              to="/signin"
              className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-900 transition duration-300"
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-700 transition duration-300"
            >
              Sign up
            </NavLink>

            {/* Cart and Profile */}
            <NavLink
              to="/cart"
              className="p-2 hover:bg-blue-200 rounded-full transition duration-300"
            >
              <img src={cartIcon} alt="Cart Icon" className="h-6 w-6" />
            </NavLink>

            <NavLink
              to="/profile"
              className="p-2 hover:bg-blue-200 rounded-full transition duration-300"
            >
              <img src={accountIcon} alt="Profile Icon" className="h-6 w-6" />
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
