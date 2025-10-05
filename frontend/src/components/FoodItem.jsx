import React from "react";
import { assets } from "../assets/assets";

const FoodItem = ({ id, name, price, image, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Food Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Optional "Add to Cart" button on image hover */}
        <button className="absolute bottom-3 right-3 bg-[tomato] text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md hover:bg-[#ff8066] transition-all duration-300">
          Add +
        </button>
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
