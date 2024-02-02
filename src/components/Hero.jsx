import React from 'react';
import Frame from '../../../crutox/src/assests/image/Frame.svg';
import Footer from './Footer';

function HeroSection() {
  return (
    
    <div className="flex bg-gradient-to-r from-[#00171E] to-[#003551] rounded-[28px]">

      {/* 1st Column */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center mx-12 py-8 items-center">
        <div>
          <h1 className="text-[#4ABED3] font-bold
             sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Make a Better Life With <br class="" />CrutoxCoin
          </h1>
        </div>
        <div className='justify-center md:mx-12 py-8 items-center'>
          <p className="text-white
            sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            CrutoxCoin is a cutting-edge, free cloud mining app that introduces an innovative approach to cryptocurrency mining. With a user-friendly interface and seamless functionality, the app allows individuals to mine ҜryptonCoins effortlessly and without the need for expensive hardware or technical expertise.
          </p>
          <br class="" />
        </div>
        <div className='flex items-center justify-center'>
          <button className="bg-blue-500 w-40 text-white rounded-md text-center 
            sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Download
          </button>
        </div>
      </div>

      {/* 2nd Column (Responsive Image) */}
      <div className="w-1/2 hidden sm:block">
        <img src={Frame} alt="Image" className="object-cover h-full w-full" />
      </div>
    </div>
   
  );
}

export default HeroSection;
