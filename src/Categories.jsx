import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
    return (
        <>
            <div className='bg-[#E3D3BB] h-full w-full py-10'>

                {/* Icon */}
                <div className='text-[40px] text-[#3b2412] text-center'>
                    <FontAwesomeIcon icon={faDove} />
                </div>

                {/* Subtitle */}
                <p className='text-[#755E4F] text-[30px] mb-5 text-center'>
                    Popular categories
                </p>

                {/* Desktop Layout (UNCHANGED) */}
                <div className='hidden lg:block'>
                    <p className='font text-[50px] text-center text-[#BAA384]'>FURNITURE</p>
                    <p className='font text-[50px] ms-165 mt-[-15px] text-[#BAA384]'>DECOR</p>
                    <p className='font text-[50px] ms-145 mt-[-15px] text-black'>TEXTTILES</p>
                    <p className='font text-[50px] ms-180 mt-[-15px] text-[#BAA384]'>LIGHTING</p>
                    <p className='font text-[50px] ms-135 mt-[-15px] text-[#BAA384]'>KITCHEN</p>
                    <p className='font text-[50px] ms-155 mt-[-15px] text-[#BAA384]'>OUTDOOR</p>
                </div>

                {/* Mobile + Tablet Layout */}
                <div className='flex lg:hidden flex-wrap justify-center items-center gap-2 mt-5'>
                    <p className='font text-[35px] text-[#BAA384] text-center'>FURNITURE</p>
                    <p className='font text-[35px] text-[#BAA384] text-center'>DECOR</p>
                    <p className='font text-[35px] text-black text-center'>TEXTTILES</p>
                    <p className='font text-[35px] text-[#BAA384] text-center'>LIGHTING</p>
                    <p className='font text-[35px] text-[#BAA384] text-center'>KITCHEN</p>
                    <p className='font text-[35px] text-[#BAA384] text-center'>OUTDOOR</p>
                </div>

                {/* Bottom Line */}
                <div className="flex justify-center py-10">
                    <span className="border-b-2 border-black pb-2">
                        ALL CATEGORIES
                    </span>
                </div>

            </div>
        </>
    )
}

export default Categories
