import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-[8vw] py-[5vw] mt-[5vw] border-t border-gray-800" id="Footer">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        
        {/* 1️⃣ Brand Section */}
        <div>
          <h1 className="text-[2rem] font-extrabold text-[tomato] mb-3">Tomato</h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[320px]">
            Your favorite meals delivered fresh and fast. Explore a world of flavors with Tomato —
            where every bite is made with love and quality ingredients.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="font-semibold text-[tomato] mb-3 text-lg uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            <li className="hover:text-[tomato] cursor-pointer transition-colors">Home</li>
            <li className="hover:text-[tomato] cursor-pointer transition-colors">Menu</li>
            <li className="hover:text-[tomato] cursor-pointer transition-colors">About</li>
            <li className="hover:text-[tomato] cursor-pointer transition-colors">Contact Us</li>
          </ul>
        </div>

        {/* 3️⃣ Contact Section */}
        <div>
          <h3 className="font-semibold text-[tomato] mb-3 text-lg uppercase tracking-wide">
            Contact Us
          </h3>
          <p className="text-gray-300 text-sm mb-1">
            📞 <span className="text-gray-400">+91 98765 43210</span>
          </p>
          <p className="text-gray-300 text-sm">
            📧 <span className="text-gray-400">support@tomato.com</span>
          </p>
        </div>

        {/* 4️⃣ Social Media */}
        <div>
          <h3 className="font-semibold text-[tomato] mb-3 text-lg uppercase tracking-wide">
            Follow Us
          </h3>
          <div className="flex items-center gap-4">
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              className="w-[28px] cursor-pointer hover:scale-110 transition-transform brightness-200"
            />
            <img
              src={assets.twitter_icon}
              alt="Twitter"
              className="w-[28px] cursor-pointer hover:scale-110 transition-transform brightness-200"
            />
            <img
              src={assets.linkedin_icon}
              alt="LinkedIn"
              className="w-[28px] cursor-pointer hover:scale-110 transition-transform brightness-200"
            />
          </div>
        </div>
      </div>

      {/* 5️⃣ Footer Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} <span className="text-[tomato] font-semibold">Tomato</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
