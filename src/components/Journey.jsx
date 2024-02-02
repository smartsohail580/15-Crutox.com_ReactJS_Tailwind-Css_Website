import React from 'react';
import bx from '../../src/assests/image/bx.svg'

const Journey = () => {
    return (
        <>
        <div className="flex flex-col items-center justify-center">
            <div>
                <h1 className="py-5 text-center font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                    Your Journey with <span className="text-teal-500">Crutox!</span>
                </h1>
            </div>
            <div>
                <hr className="my-4 w-40 border-teal-600 sm:border-t-1 md:border-t-2 lg:border-t-3 xl:border-t-4 2xl:border-t-4" />
            </div>
            <div>
                <h4 className="text-center mx-20 text-teal-500 sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    Joining Crutox means joining a community of forward-thinkers, investors, and individuals who are passionate
                    about the future of digital currency. Here's what you can expect:
                </h4>
            </div>

            {/* New Two-Column Layout */}
            <div className="flex flex-col sm:flex-row items-center py-12">
                {/* Column 1: Image */}
                <div className="hidden sm:block md:block">
                    <img src={bx} alt="Your Alt Text" className="w-[460px] h-[460px] rounded-full object-cover" />
                </div>

                {/* Main Column  Boxes */}
                <div className="flex flex-col sm:ml-10  sm:mt-0 mt-10 ">
                    {/* Row 1 */}
                    <div className="flex flex-col sm:flex-row mb-4  sm:space-y-0 ">
                        {/* Box 1 */}
                        <div className="border-2 border-color-[#CFCFCF] p-4 rounded-lg w-full sm:w-[300px] h-[280px]">
                            <div className='py-2 px-5 font-serif font-bold text-lg'>
                                Effortless Mining
                            </div>
                            <div className='py-4 px-5 text-lg font-normal leading-8'>
                                Start mining with a few simple taps on your mobile device. Our app takes care of the technical aspects, so you can focus on earning.
                            </div>
                        </div>

                        {/* Padding between 2 boxes */}
                        <div className='px-10'></div>

                        {/* Box 2 */}
                        <div className="border-2 border-color-[#CFCFCF] p-4 rounded-lg w-full sm:w-[300px] h-[280px]">
                            <div className='py-2 px-5 font-serif font-bold text-lg'>
                                Regular Payouts
                            </div>
                            <div className='py-4 px-5 text-lg font-normal leading-8'>
                                Watch your earnings grow and receive regular payouts, giving you real-time access to your cryptocurrency assets.
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col sm:flex-row py-10  sm:space-y-0">
                        {/* Box 3 */}
                        <div className="border-2 border-color-[#CFCFCF] p-4  rounded-lg w-full sm:w-[300px] h-[280px]">
                            <div className='py-2 px-5 font-serif font-bold text-lg'>
                                Educational Resources
                            </div>
                            <div className='py-4 px-5 text-lg font-normal leading-8'>
                                New to crypto? No problem. We provide resources and information to help you understand the world of cryptocurrency better.                            </div>
                        </div>

                        {/* Padding between 2 boxes */}
                        <div className='px-10'></div>

                        {/* Box 4 */}
                        <div className="border-2 border-color-[#CFCFCF] p-4 rounded-lg w-full sm:w-[300px] h-[280px]">
                            <div className='py-2 px-5 font-serif font-bold text-lg'>
                                Innovative Features
                            </div>
                            <div className='py-4 px-5 text-lg font-normal leading-8'>
                                We're constantly improving and adding new features to make your crypto journey even more rewarding.                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        </>
    );
};

export default Journey;
