import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <nav className="px-10 py-6 flex justify-between items-center shadow-sm bg-white">
      {/* Logo */}
      <Link to="/">
        <img className="w-[150px]" src={assets.logo} alt="Logo" />
      </Link>

      {/* Menu Links */}
      <ul className="flex gap-8 list-none text-[#49557e] text-[18px]">
        <Link to='/'
          
          onClick={() => setMenu("home")}
          className={`cursor-pointer transition duration-300 ${
            menu === "home"
              ? "underline underline-offset-4 decoration-[tomato] font-semibold"
              : "hover:underline hover:decoration-[tomato]"
          }`}
        >
          Home
        </Link>

        <a href="#explere-menu"
          onClick={() => setMenu("menu")}
          className={`cursor-pointer transition duration-300 ${
            menu === "menu"
              ? "underline underline-offset-4 decoration-[tomato] font-semibold"
              : "hover:underline hover:decoration-[tomato]"
          }`}
        >
          Menu
        </a>

        <a href="#App-download"
          onClick={() => setMenu("mobile-app")}
          className={`cursor-pointer transition duration-300 ${
            menu === "mobile-app"
              ? "underline underline-offset-4 decoration-[tomato] font-semibold"
              : "hover:underline hover:decoration-[tomato]"
          }`}
        >
          Mobile App
        </a>

        <a href="#Footer"
          onClick={() => setMenu("contact-us")}
          className={`cursor-pointer transition duration-300 ${
            menu === "contact-us"
              ? "underline underline-offset-4 decoration-[tomato] font-semibold"
              : "hover:underline hover:decoration-[tomato]"
          }`}
        >
          Contact Us
        </a>
      </ul>

      {/* Right Section */}
      <div className="flex gap-6 items-center relative">
        {/* Search Icon */}
        <img
          src={assets.search_icon}
          alt="Search"
          className="w-6 h-6 cursor-pointer hover:scale-110 transition duration-200"
        />

        {/* Basket Icon with Badge */}
        <div className="relative">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              alt="Basket"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition duration-200"
            />
          </Link>
          {getTotalCartAmount()>2?<span className="absolute -top-1 -right-1 bg-[tomato] w-[10px] h-[10px] rounded-full"></span>:<></>}
          
        </div>

        {/* Sign In Button */}
        <button onClick={()=>setShowLogin(true )} className="text-base border border-[#ff6347] rounded-[50px] cursor-pointer px-5 py-2 bg-transparent hover:bg-[#ff6347] hover:text-white transition duration-300">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
