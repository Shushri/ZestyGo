import React, { useContext } from "react";
import { assets } from "../assets/assets";                 // Static images/icons
import { StoreContext } from "../context/StoreContext";    // Global store context

const FoodItem = ({ id, name, price, image, description }) => {
  // Access cart state and actions from context
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  // Get quantity of this item in cart
  const itemCount = cartItems[id] || 0;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      
      {/* Food Image Section */}
      <div className="relative">
        <img
          src={url + "/images/" + image}                     // Load image from backend
          alt={name}
          className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* Add button or quantity counter */}
        {itemCount === 0 ? (
          // Show add button if item not in cart
          <img
            onClick={() => addToCart(id)}                   // Add item to cart
            src={assets.add_icon_white}
            alt="add"
            className="absolute bottom-3 right-3 w-[35px] cursor-pointer hover:scale-110 transition-transform"
          />
        ) : (
          // Show counter if item already in cart
          <div className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-full flex items-center gap-2 shadow-md">
            <img
              onClick={() => removeFromCart(id)}            // Decrease quantity
              src={assets.remove_icon_red}
              alt="remove"
              className="w-[24px] cursor-pointer hover:scale-110 transition-transform"
            />
            <p className="font-semibold text-[tomato]">{itemCount}</p>
            <img
              onClick={() => addToCart(id)}                 // Increase quantity
              src={assets.add_icon_green}
              alt="add"
              className="w-[24px] cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        )}
      </div>

      {/* Food Details Section */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-1">
          <p className="text-lg font-semibold text-[#2c2c2c]">{name}</p>
          <img
            src={assets.rating_starts}
            alt="rating"
            className="w-[80px]"
          />
        </div>

        {/* Food description */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-2">
          {description}
        </p>

        {/* Food price */}
        <p className="text-[tomato] font-bold text-lg">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
