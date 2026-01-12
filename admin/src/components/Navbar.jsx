import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <nav className="w-full h-16 px-6 flex items-center justify-between bg-white border-b border-gray-200">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <p className="text-[#ff6349] text-3xl font-semibold">
              ZestyGo
            </p>
        
      </div>

      {/* Profile */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600 hidden sm:block">
          
        </span>
        <img
          src={assets.profile_image}
          alt="Profile"
          className="h-9 w-9 rounded-full border border-gray-300 object-cover cursor-pointer hover:ring-2 hover:ring-orange-500 transition"
        />
      </div>

    </nav>
  );
};

export default Navbar;
