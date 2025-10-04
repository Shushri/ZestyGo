import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "mobile-app", label: "Mobile App" },
    { id: "contact-us", label: "Contact Us" },
  ];

  return (
    <nav className="px-10 py-6 flex justify-between items-center shadow-sm bg-white">
      {/* Logo */}
      <img className="w-[150px]" src={assets.logo} alt="Logo" />

      {/* Menu Links */}
      <ul className="flex gap-8 list-none text-[#49557e] text-[18px]">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setMenu(item.id)}
            className={`cursor-pointer transition duration-300 
              ${
                menu === item.id
                  ? "underline underline-offset-4 decoration-[tomato] font-semibold"
                  : "hover:underline hover:decoration-[tomato]"
              }`}
          >
            {item.label}
          </li>
        ))}
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
          <img
            src={assets.basket_icon}
            alt="Basket"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition duration-200"
          />
          <span className="absolute -top-1 -right-1 bg-[tomato] w-[10px] h-[10px] rounded-full"></span>
        </div>

        {/* Sign In Button */}
        <button className="text-base border border-[#ff6347] rounded-[50px] cursor-pointer px-5 py-2 bg-transparent hover:bg-[#ff6347] hover:text-white transition duration-300">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
