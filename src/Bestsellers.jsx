import React from 'react'
import img1 from '../img/best1.png'
import img2 from '../img/best2.png'
import img3 from '../img/best3.png'
import img4 from '../img/best4.png'
import img5 from '../img/best5.png'
import img6 from '../img/best6.png'

const Bestsellers = () => {
    return (
        <>
            <div className="bg-[#FFF9EB] pb-5">

                {/* Heading + Button */}
                <div className="flex justify-between px-10 py-10 
                                max-md:flex-col max-md:text-center max-md:gap-3">

                    <p className="text-[#84755F] font text-[40px]">Bestsellers</p>

                    <button className="bg-[#331A07] px-10 py-2 text-white 
                                       max-md:w-fit max-md:mx-auto">
                        SHOP ALL
                    </button>
                </div>

                {/* Boxes (Responsive Only for Mobile & Tablet) */}
                <div className="flex gap-4 flex-wrap justify-center">

                    {/* BOX 1 */}
                    <div className="border ms-10 my-10 w-60 pb-4 
                                    max-md:ms-0 max-md:w-40 max-sm:w-full max-sm:mx-4">
                        <div className="flex justify-between">
                            <p className="px-3 py-2 text-[#7B7466]">ERATH TONE BOWLS</p>
                            <p className="px-3 py-2 text-[#7B7466]">$80</p>
                        </div>
                        <img src={img1} className="px-10" alt="" />
                        <p className="text-[#7B7466] border w-38 mx-3 px-2">
                            KITCHEN&DINNIG
                        </p>
                    </div>

                    {/* BOX 2 */}
                    <div className="border my-10 w-60 pb-4 
                                    max-md:w-40 max-sm:w-full max-sm:mx-4">
                        <div className="flex justify-between">
                            <p className="px-3 py-2 text-[#7B7466]">ERATH TONE BOWLS</p>
                            <p className="px-3 py-2 text-[#7B7466]">$80</p>
                        </div>
                        <img src={img2} className="px-10" alt="" />
                        <p className="text-[#7B7466] border w-38 mx-3 mt-5 px-2">
                            KITCHEN&DINNIG
                        </p>
                    </div>

                    {/* BOX 3 → No change for laptop */}
                    <div className="border my-10 w-60 h-60 pb-4 
                                    max-md:h-auto max-md:w-40 max-sm:w-full max-sm:mx-4">
                        <div className="flex justify-between">
                            <p className="px-3 py-2 text-[#7B7466]">ERATH TONE BOWLS</p>
                            <p className="px-3 py-2 text-[#7B7466]">$80</p>
                        </div>
                        <img src={img3} className="px-10" alt="" />
                        <p className="text-[#7B7466] border w-38 mx-3 px-2">
                            KITCHEN&DINNIG
                        </p>
                    </div>

                    {/* BOX 4 → No change for laptop */}
                    <div className="border my-10 w-60 h-60 pb-4 
                                    max-md:h-auto max-md:w-40 max-sm:w-full max-sm:mx-4">
                        <div className="flex justify-between">
                            <p className="px-3 py-2 text-[#7B7466]">ERATH TONE BOWLS</p>
                            <p className="px-3 py-2 text-[#7B7466]">$80</p>
                        </div>
                        <img src={img4} className="px-10 mt-7" alt="" />
                        <p className="text-[#7B7466] border w-38 mx-3 px-2">
                            KITCHEN&DINNIG
                        </p>
                    </div>

                    {/* BOX 5 */}
                    <div className="border my-10 w-60 pb-4 
                                    max-md:w-40 max-sm:w-full max-sm:mx-4">
                        <div className="flex justify-between">
                            <p className="px-3 py-2 text-[#7B7466]">ERATH TONE BOWLS</p>
                            <p className="px-3 py-2 text-[#7B7466]">$80</p>
                        </div>
                        <img src={img5} className="px-10 my-12" alt="" />
                        <p className="text-[#7B7466] border w-38 mx-3 px-2">
                            KITCHEN&DINNIG
                        </p>
                    </div>

                    {/* BOX 6 */}
                    <div className="border my-10 me-10 w-60 pb-4 
                                    max-md:w-40 max-sm:w-full max-sm:mx-4">
                        <div className="flex justify-between">
                            <p className="px-3 py-2 text-[#7B7466]">ERATH TONE BOWLS</p>
                            <p className="px-3 py-2 text-[#7B7466]">$80</p>
                        </div>
                        <img src={img6} className="px-10 my-14" alt="" />
                        <p className="text-[#7B7466] border w-38 mx-3 px-2">
                            KITCHEN&DINNIG
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Bestsellers
