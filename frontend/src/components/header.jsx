import React from "react";

const Header = () => {
  return (
    <div className='relative h-[34vw] m-[30px] rounded-[20px] overflow-hidden bg-[url("/header_img.png")] bg-center bg-cover flex items-center'>
      {/* Gradient Overlay for better contrast */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent'></div>

      {/* Text Content */}
      <div className='relative z-10 flex flex-col gap-[1.5vw] max-w-[45%] pl-[6vw]'>
        <h1 className='text-white font-extrabold text-[4.2vw] leading-tight drop-shadow-lg tracking-tight'>
          Savor the <span className='text-[tomato]'>taste of happiness</span>
        </h1>

        <p className='text-white/90 text-[1.1vw] leading-relaxed font-light'>
          Discover a world of flavor crafted by expert chefs — from sizzling street eats to comforting homestyle dishes.
          Every bite is made with passion, packed with freshness, and delivered hot and fast to your doorstep.
        </p>

        <div className='mt-4 flex gap-4'>
          <button className='px-7 py-3 bg-[tomato] text-white font-semibold text-[1.1vw] rounded-full hover:bg-[#ff7f66] transition-all duration-300 shadow-lg hover:scale-105'>
            View Menu
          </button>
          <button className='px-7 py-3 border border-white text-white font-medium text-[1.1vw] rounded-full hover:bg-white hover:text-[tomato] transition-all duration-300 shadow-md hover:scale-105'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
