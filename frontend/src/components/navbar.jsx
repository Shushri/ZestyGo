import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const logout = () => {
    
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-40 px-10 py-5 flex justify-between items-center bg-white shadow-md">
      
      {/* Logo */}
      <Link to="/">
        <p className="text-[#ff6347] text-3xl font-semibold">
  ZestyGo
</p>


      </Link>

      {/* Menu */}
      <ul className="flex gap-8 text-[#49557e] text-[18px] font-medium">
        {["home", "menu", "mobile-app", "contact-us"].map((item) => (
          <li
            key={item}
            onClick={() => setMenu(item)}
            className={`cursor-pointer transition-all duration-300 ${
              menu === item
                ? "underline underline-offset-4 decoration-[tomato] text-black"
                : "hover:underline hover:decoration-[tomato]"
            }`}
          >
            {item === "home" && <Link to="/">Home</Link>}
            {item === "menu" && <a href="#explore-menu">Menu</a>}
            {item === "mobile-app" && <a href="#App-download">Mobile App</a>}
            {item === "contact-us" && <a href="#Footer">Contact Us</a>}
          </li>
        ))}
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-6 relative">
        
        {/* Search */}
        <img
          src={assets.search_icon}
          alt="search"
          className="w-6 cursor-pointer hover:scale-110 transition"
        />

        {/* Cart */}
        <div className="relative">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              alt="cart"
              className="w-6 cursor-pointer hover:scale-110 transition"
            />
          </Link>
          {getTotalCartAmount() > 0 && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[tomato] rounded-full"></span>
          )}
        </div>

        {/* Auth */}
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="px-6 py-2 border border-[#ff6347] rounded-full text-[#ff6347]
                       hover:bg-[#ff6347] hover:text-white transition-all duration-300"
          >
            Sign In
          </button>
        ) : (
          <div className="relative">
            <img
              src={assets.profile_icon}
              alt="profile"
              className="w-5 cursor-pointer"
              onClick={() => setShowProfile(!showProfile)}
            />

            {/* Dropdown */}
            {showProfile && (
              <ul className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-lg border text-sm overflow-hidden">
                <li onClick={()=>navigate('/myorders')} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <img src={assets.bag_icon} className="w-4" alt="" />
                  <p >Orders</p>
                </li>
                <hr />
                <li
                  onClick={logout}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-500 cursor-pointer"
                >
                  <img src={assets.logout_icon} className="w-4" alt="" />
                  <p>Logout</p>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
