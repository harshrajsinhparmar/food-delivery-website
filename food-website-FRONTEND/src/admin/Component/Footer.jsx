import React from 'react';
import { GiFoodTruck } from "react-icons/gi";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
  
  <div><footer className="bg-gray-900 text-white py-10 px-200 mt-10 ">
      <div className="max-w-7x1 mx-auto flex  flex-row justify-between items-center gap-30">
        
        <div className="text-yellow-500  flex items-center gap-4">
          <GiFoodTruck className="hover:text-white transition-all duration-300 size-70" />
          <span className="font-bold  text-[100px]">FoodTruck</span>
        </div>

        
        <div className="gap-6 text-center text-[50px]">
          <div className="hover:text-yellow-500 cursor-pointer transition duration-100 text-left"><pre>Help & Support,</pre></div>
     
          <div className="hover:text-yellow-500 cursor-pointer transition duration-100 text-left"><pre>Partner with us,</pre></div>
     
          <div className="hover:text-yellow-500 cursor-pointer transition duration-100 text-left"><pre>Ride with us</pre></div>
        </div>

        
        <div className="flex flex-row gap-50  text-yellow-500 justify-between ">
          <SlSocialLinkedin className="cursor-pointer hover:scale-125 transition-transform size-40" />
          <SlSocialInstagram className="cursor-pointer hover:scale-125 transition-transform size-40" />
          <SlSocialFacebook className="cursor-pointer hover:scale-125 transition-transform size-40" />
          <FaSquareXTwitter className="cursor-pointer hover:scale-125 transition-transform size-40" />
        </div>
      </div>

      
      <div className="mt-8 text-center text-[40px] text-gray-400">
        © {new Date().getFullYear()} FoodTruck. All rights reserved.
      </div>
    </footer>
        </div>

  );
}

export default Footer;
