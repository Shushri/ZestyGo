import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="bg-gradient-to-b from-[#fff5f0] to-white py-[6vw] text-center mt-[4vw] rounded-3xl shadow-md" id="App-download">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#2c2c2c] mb-4">
        For a Better Experience, Download <span className="text-[tomato] font-bold">Tomato</span> App
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 text-sm md:text-base mb-6">
        Order food faster, track your orders in real-time, and enjoy exclusive app-only offers!
      </p>

      {/* App Store Buttons */}
      <div className="flex justify-center items-center gap-6 flex-wrap">
        <img
          src={assets.play_store}
          alt="Play Store"
          className="w-[150px] md:w-[180px] cursor-pointer hover:scale-105 transition-transform duration-300"
        />
        <img
          src={assets.app_store}
          alt="App Store"
          className="w-[150px] md:w-[180px] cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Decorative Line */}
      <div className="mt-8 w-[60%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
  );
};

export default AppDownload;
