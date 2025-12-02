import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

import NavImg from "../img/mainbg.jpg";
import Design from "../img/sec1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FULL HERO SECTION WRAPPER */}
      <div className="relative w-full">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={NavImg}
            className="w-full h-full object-cover opacity-80"
            alt=""
          />
        </div>

        {/* NAVBAR */}
        <nav className="relative z-20 flex items-center justify-between px-6 py-5 text-white">
          <ul className="hidden md:flex gap-6 font-medium">
            <li>SHOP</li>
            <li>NEW</li>
            <li>BESTSELLERS</li>
            <li>SALE</li>
            <li>ABOUT US</li>
            <li>FAQ</li>
          </ul>

          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            <FontAwesomeIcon icon={open ? faTimes : faBars} />
          </button>

          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl tracking-[2px] font-semibold">
            DHARMA
          </h1>

          <div className="hidden md:flex items-center gap-6">
            <input
              type="text"
              placeholder="SEARCH"
              className="bg-transparent border-b border-white w-40 focus:outline-none placeholder-white"
            />
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faHeartRegular} />
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden relative z-20 w-full bg-black bg-opacity-90 p-5 text-white space-y-4">
            <p>SHOP</p>
            <p>NEW</p>
            <p>BESTSELLERS</p>
            <p>SALE</p>
            <p>ABOUT US</p>
            <p>FAQ</p>

            <div className="flex gap-4 text-xl pt-2">
              <FontAwesomeIcon icon={faUser} />
              <FontAwesomeIcon icon={faHeartRegular} />
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
          </div>
        )}

        {/* HERO SECTION */}
        <div className={`relative z-10 w-full px-6 md:px-20 ${open ? "mt-[650px] md:mt-48" : "mt-20 md:mt-48"}`}>
          <div className="grid grid-cols-1 md:grid-cols-[auto_auto_1fr_auto] items-center gap-12 md:gap-20">

            {/* BOX 1 */}
            <div className="text-center">
              <p className="border border-white px-2 py-1 text-white">FURNITURE</p>
              <p className="text-2xl mt-2 leading-6 text-white font">
                SILENT <br /> POETRY
              </p>
            </div>

            {/* BOX 2 */}
            <div className="text-center">
              <p className="border border-white px-2 py-1 text-white">TEXTILES</p>
              <p className="text-2xl mt-2 leading-6 text-white font">
                SOFT <br /> WHISPER
              </p>
            </div>

            {/* CENTER PRODUCT BOX */}
            <div className="relative border border-white w-[260px] h-[360px] mx-auto mb-20">
              <p className="absolute top-3 left-3 border border-white px-2 py-1 text-white">
                TEXTILES
              </p>

              <img src={Design} className="mt-14  mx-auto w-[85%]" alt="" />

              <div className="absolute bottom-0 left-0 w-full bg-white text-black p-3">
                <p className="font-semibold text-[#7C7269]">
                  CLOUD SOFT CUSHION
                </p>
                <p className="text-sm text-[#7C7269]">
                  The perfect touch of every coziness
                </p>
              </div>
            </div>

            {/* BOX 4 */}
            <div className="text-center md:ml-auto">
              <p className="border border-white px-2 py-1 text-white">DECOR</p>
              <p className="text-2xl mt-2 leading-8 text-white font">
                TIMELESS <br /> STORIES
              </p>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;
