import React from "react";
import fimg1 from "../img/last1.png";
import fimg2 from "../img/last2.png";

const Lastsection = () => {
  return (
    <>
      <div className="flex max-md:flex-col w-full">

        {/* LEFT SECTION */}
        <div className="relative w-[50%] max-md:w-full">
          <img src={fimg1} className="w-full h-full object-cover" />

          {/* Heading */}
          <p className="
            absolute bottom-20 left-8
            text-white text-[40px] 
            max-md:text-[28px] 
            max-sm:text-[22px]
          ">
            Serene Corners
          </p>

          {/* Subtext */}
          <p className="
            absolute bottom-12 left-8
            text-white text-[20px] 
            max-md:text-[16px] 
            max-sm:text-[14px]
          ">
            Soft textures and warm light create a peaceful retreat
          </p>

          {/* RIGHT SIDE BUTTON */}
          <div className="
            absolute bottom-8 right-8
            max-md:bottom-4 max-md:right-6
            max-sm:bottom-3 max-sm:right-4
          ">
            <p className="text-white text-[15px] max-sm:text-[13px]">LEARN MORE</p>
            <div className="w-24 h-0.5 bg-white"></div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative w-[50%] max-md:w-full">
          <img src={fimg2} className="w-full h-full object-cover" />

          {/* Heading */}
          <p className="
            absolute bottom-20 left-8
            text-white text-[40px] 
            max-md:text-[28px] 
            max-sm:text-[22px]
          ">
            Dining Memories
          </p>

          {/* Subtext */}
          <p className="
            absolute bottom-12 left-8
            text-white text-[20px] 
            max-md:text-[16px] 
            max-sm:text-[14px]
          ">
            Elegant details turn everyday meals into special moments
          </p>

          {/* RIGHT SIDE BUTTON */}
          <div className="
            absolute bottom-8 right-8
            max-md:bottom-4 max-md:right-6
            max-sm:bottom-3 max-sm:right-4
          ">
            <p className="text-white text-[15px] max-sm:text-[13px]">LEARN MORE</p>
            <div className="w-24 h-0.5 bg-white"></div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Lastsection;
