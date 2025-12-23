import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <aside
      className="
        min-h-screen bg-gray-100 p-2 md:p-4
        w-14 md:w-56
        transition-all duration-300
      "
    >
      <nav className="flex flex-col gap-4">
        
        {/* ADD */}
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `
            flex items-center md:items-start
            justify-center md:justify-start
            gap-0 md:gap-3
            p-2 rounded-md transition
            ${isActive ? "bg-orange-600 text-white" : "hover:bg-gray-200"}
            `
          }
        >
          <img src={assets.add_icon} alt="Add item" className="w-5 h-5" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        {/* LIST */}
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `
            flex items-center md:items-start
            justify-center md:justify-start
            gap-0 md:gap-3
            p-2 rounded-md transition
            ${isActive ? "bg-orange-600 text-white" : "hover:bg-gray-200"}
            `
          }
        >
          <img src={assets.order_icon} alt="List items" className="w-5 h-5" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        {/* ORDERS */}
        <NavLink
          to="/order"
          className={({ isActive }) =>
            `
            flex items-center md:items-start
            justify-center md:justify-start
            gap-0 md:gap-3
            p-2 rounded-md transition
            ${isActive ? "bg-orange-600 text-white" : "hover:bg-gray-200"}
            `
          }
        >
          <img src={assets.order_icon} alt="Orders" className="w-5 h-5" />
          <p className="hidden md:block">Orders</p>
        </NavLink>

      </nav>
    </aside>
  );
};

export default Sidebar;
