import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="px-[6vw] py-[4vw] text-center" id="explere-menu">
      {/* 🔹 Heading */}
      <h1 className="text-[3vw] font-extrabold text-[#2c2c2c] mb-2">
        Explore Our <span className="text-[tomato]">Menu</span>
      </h1>
      <div className="w-[80px] h-[4px] bg-[tomato] mx-auto mb-6 rounded-full"></div>

      {/* 🔹 Subtext */}
      <p className="text-[#555] text-[1.1vw] leading-relaxed max-w-[800px] mx-auto mb-8">
        Discover a variety of delicious categories crafted with passion. From
        crispy snacks to comforting meals — pick your favorite and start
        ordering now!
      </p>

      {/* 🔹 Scrollable Category Bar */}
      <div className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-2 no-scrollbar">
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name;
          return (
            <div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className={`flex flex-col items-center min-w-[120px] cursor-pointer 
                          transition-all duration-300 hover:scale-105`}
            >
              {/* Category Image */}
              <div
                className={`w-[100px] h-[100px] rounded-full overflow-hidden shadow-md border-2 
                            ${
                              isActive
                                ? "border-[tomato] scale-105"
                                : "border-gray-200 hover:border-[tomato]"
                            } transition-all`}
              >
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Category Name */}
              <p
                className={`mt-3 text-[1vw] font-semibold transition-colors 
                            ${
                              isActive
                                ? "text-[tomato]"
                                : "text-[#333] hover:text-[tomato]"
                            }`}
              >
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>

      {/* 🔹 Divider */}
      <hr className="h-[2px] mx-[10px] my-[0px] bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
