import React from 'react'
import col4 from '../img/col4.jpg';

const Collection = () => {
    return (
        <>

            {/* MAIN WRAPPER */}
            <div className="flex 
                            max-lg:flex-col"> {/* mobile + tablet stack */}

                {/* LEFT SECTION */}
                <div className="bg-[#674B33] w-[50%] 
                                max-lg:w-full max-lg:p-5">

                    {/* TOP MENU */}
                    <div className="flex py-10 gap-6 ms-10 
                                    max-md:flex-wrap max-md:ms-0 max-md:justify-center">
                        <p className='text-white'>SILENT POETRY</p>
                        <p className='text-white'>QUET ELEGANCE</p>
                        <p className='text-white'>SOFT WHISPER</p>
                        <p className='text-white'>TIMELESS STORIES</p>
                        <p className='text-white'>STARRY NIGHT</p>
                    </div>

                    {/* TEXT BLOCK */}
                    <div className="max-lg:text-center">
                        <p className='font text-[50px] text-white text-center mt-40 
                                       max-lg:mt-10 max-md:text-[32px]'>
                            Silent poetry
                        </p>

                        <p className='text-white text-center px-50 py-10 
                                       max-lg:px-10 max-md:px-5 max-md:text-[14px]'>
                            A story of home expressed through subtle forms and quiet details,
                            where each piece reflects harmony, tradition, and the serenity of modern living
                        </p>
                    </div>

                    {/* BUTTON */}
                    <div className='flex justify-center'>
                        <button className='bg-[#331A07] px-5 py-2 text-white'>
                            VIEW COLLECTION
                        </button>
                    </div>

                    {/* BOTTOM MENU */}
                    <div className='flex pt-20 gap-6 ms-5 
                                    max-md:flex-wrap max-md:justify-center max-md:ms-0 max-md:pt-10'>
                        <p className='border px-1 py-1 text-white'>SILENT POETRY</p>
                        <p className='border px-1 py-1 text-white'>QUET ELEGANCE</p>
                        <p className='border px-1 py-1 text-white'>SOFT WHISPER</p>
                        <p className='border px-1 py-1 text-white'>TIMELESS STORIES</p>
                        <p className='border px-1 py-1 text-white'>STARRY NIGHT</p>
                    </div>

                </div>

                {/* RIGHT IMAGE SECTION */}
                <div className='bg-[#FFF9EB] w-[50%]
                                max-lg:w-full max-lg:flex max-lg:justify-center'>
                    <img
                        src={col4}
                        className='px-25 py-25 
                                   max-lg:px-10 max-lg:py-10 max-md:px-5 max-md:py-5'
                        alt=""
                    />
                </div>

            </div>

        </>
    )
}

export default Collection
