import React from 'react';
import { menu_list } from '../assets/assets';

const ExploreMenu = () => {
  return (
    <div className="px-[6vw] py-[4vw] text-center">
      {/* Section Heading */}
      <h1 className="text-[3vw] font-extrabold text-[#2c2c2c] mb-2">
        Explore Our <span className="text-[tomato]">Menu</span>
      </h1>

      {/* Underline Accent */}
      <div className="w-[80px] h-[4px] bg-[tomato] mx-auto mb-6 rounded-full"></div>

      {/* Section Subtext */}
      <p className="text-[#555] text-[1.1vw] leading-relaxed max-w-[800px] mx-auto mb-10">
        Craving something delicious? Browse our menu packed with handcrafted dishes made from the freshest ingredients.
        From comforting classics to global flavors — we bring every bite hot, fresh, and full of flavor right to your table.
      </p>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center bg-white shadow-md rounded-2xl p-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <div className="w-[120px] h-[120px] overflow-hidden rounded-full mb-3">
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <p className="text-[1.2vw] font-semibold text-[#333] group-hover:text-[tomato] transition-colors duration-300">
              {item.menu_name}
            </p>

            <span className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
