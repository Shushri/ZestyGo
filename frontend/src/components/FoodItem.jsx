import React, { useState } from "react";
import { assets } from "../assets/assets";

const FoodItem = ({ id, name, price, image, description }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Food Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* Add / Counter Buttons */}
        {itemCount === 0 ? (
          <img
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
            alt="add"
            className="absolute bottom-3 right-3 w-[35px] cursor-pointer hover:scale-110 transition-transform"
          />
        ) : (
          <div className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-full flex items-center gap-2 shadow-md">
            <img
              onClick={() => setItemCount((prev) => Math.max(prev - 1, 0))}
              src={assets.remove_icon_red}
              alt="remove"
              className="w-[24px] cursor-pointer hover:scale-110 transition-transform"
            />
            <p className="font-semibold text-[tomato]">{itemCount}</p>
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt="add"
              className="w-[24px] cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        )}
      </div>

      {/* Food Details */}
      <div className="p-4">
        {/* Title + Rating */}
        <div className="flex justify-between items-center mb-1">
          <p className="text-lg font-semibold text-[#2c2c2c]">{name}</p>
          <img src={assets.rating_starts} alt="rating" className="w-[80px]" />
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-2">
          {description}
        </p>

        {/* Price */}
        <p className="text-[tomato] font-bold text-lg">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
