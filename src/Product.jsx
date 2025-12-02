import React from "react";
import Box1 from "../img/Box1.jpg";
import Box2 from "../img/Box2.jpg";
import Box3 from "../img/Box3.jpg";
import Box4 from "../img/Box4.jpg";
import Box5 from "../img/Box5.jpg";
import Box6 from "../img/Box6.jpg";
import Box7 from "../img/Box7.jpg";

const Product = () => {
  const products = [
    { img: Box1, name: "STONEWARE DINNER PLATES", price: "$85", category: "KITCHEN & DINNING" },
    { img: Box2, name: "ROUNDED OAK SIDE TABLE", price: "$140", category: "FURNITURE" },
    { img: Box3, name: "TERRY TOWEL", price: "$12", category: "TEXTILES" },
    { img: Box4, name: "STONEWARE DINNER PLATES", price: "$85", category: "KITCHEN & DINNING" },
    { img: Box5, name: "IVORY CERAMIC VASE", price: "$85", category: "DECOR" },
    { img: Box6, name: "TEXTURED WOOD SIDEBOARD", price: "$690", category: "FURNITURE" },
    { img: Box7, name: "STONEWARE DINNER PLATES", price: "$85", category: "KITCHEN & DINNING" },
  ];

  return (
    <div className="w-full bg-[#6D4F35] pb-20 pt-[20px] lg:pt-0 overflow-hidden">
      {/* On mobile/tablet, pt-[820px] ensures the section starts below hero; desktop (lg) pt-0 keeps original */}
      <h1 className="text-white px-6 lg:px-12 py-8 text-4xl font">New arrivals</h1>

      {/* ------------------ DESKTOP VIEW (UNCHANGED) ------------------ */}
      <div className="hidden lg:block">

        {/* Row 1 */}
        <div className="flex gap-10 px-10">

          {/* Box 1 */}
          <div>
            <img src={Box1} className="h-72 w-56 object-cover mt-36" alt="" />
            <p className="text-white text-sm mt-2">
              STONEWARE DINNER PLATES <span className="float-right">$85</span>
            </p>
            <p className="text-white text-sm">KITCHEN & DINNING</p>
          </div>

          {/* Box 2 + Box 4 */}
          <div className="flex gap-80">
            <div>
              <img src={Box2} className="h-96 w-56 object-cover mt-12" alt="" />
              <p className="text-white text-sm mt-2">
                ROUNDED OAK SIDE TABLE <span className="float-right">$140</span>
              </p>
              <p className="text-white text-sm">FURNITURE</p>
            </div>

            <div>
              <img src={Box4} className="h-80 w-95 object-cover mt-28" alt="" />
              <p className="text-white text-sm mt-2">
                STONEWARE DINNER PLATES <span className="float-right">$85</span>
              </p>
              <p className="text-white text-sm">KITCHEN & DINNING</p>
            </div>
          </div>

          {/* Box 5 */}
          <div>
            <img src={Box5} className="h-64 w-56 object-cover mt-44" alt="" />
            <p className="text-white text-sm mt-2">
              IVORY CERAMIC VASE <span className="float-right">$85</span>
            </p>
            <p className="text-white text-sm">DECOR</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex gap-6 px-10 mt-10">
          <div>
            <img src={Box3} className="h-72 w-56 object-cover" alt="" />
            <p className="text-white text-sm mt-2">
              TERRY TOWEL <span className="ms-[110px]">$12</span>
            </p>
            <p className="text-white text-sm">TEXTILES</p>
          </div>

          <div className="ml-[200px]">
            <img src={Box6} className="h-72 w-56 object-cover" alt="" />
            <p className="text-white text-sm mt-2">
              TEXTURED WOOD SIDEBOARD <span>$690</span>
            </p>
            <p className="text-white text-sm">FURNITURE</p>
          </div>

          <div>
            <img src={Box7} className="h-72 w-56 object-cover" alt="" />
            <p className="text-white text-sm mt-2">
              STONEWARE DINNER PLATES <span className="ms-4">$85</span>
            </p>
            <p className="text-white text-sm">KITCHEN & DINNING</p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-[#331A07] text-white px-8 py-2 rounded">
            SHOP ALL
          </button>
        </div>
      </div>

      {/* ------------------ MOBILE + TABLET VIEW ------------------ */}
      <div className="lg:hidden px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className="text-white">
              <img src={p.img} className="w-full h-40 object-cover rounded" alt={p.name} />
              <p className="text-sm mt-2 font-semibold">{p.name}</p>
              <p className="text-sm">{p.price}</p>
              <p className="text-xs mt-1">{p.category}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-[#331A07] text-white px-6 py-2 rounded">
            SHOP ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
