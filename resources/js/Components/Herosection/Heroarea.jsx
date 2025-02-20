import React from "react";
import { Link } from '@inertiajs/react'

const  HeroArea = () => {
  return (
    <section className="bg-[#6941C6] sm:h-[95vh] flex flex-col items-center sm:px-8 md:px-12 lg:px-24 xl:px-48 relative">
      <div className="relative z-50 py-5  sm:py-[50px] ">
        {/* Hero Heading */}
        <h1 className="text-white font-bold text-center leading-tight text-4xl font-Inter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl xl:font-bold 2xl:text-7xl">
          Easy way to send <br /> & receive online <br /> payments
        </h1>

        {/* Get Started Button */}
        <div className="mt-10 mb-5 font-Inter text-center sm:mt-14">
          <Link
            to="/register"
            className="bg-white text-[#6941C6] font-semibold py-3 px-3 sm:px-10 xl:text-base xl:font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="hidden sm:block">
        {/* Background Flags */}
        <div className="absolute inset-0 w-full h-full flex items-end justify-between z-20">
          {/* Left Background Flag (USA) */}
          <div
            className="h-[400px] w-[750px] bg-cover bg-no-repeat bg-center opacity-40"
            style={{
              backgroundImage: "url('/assets/heroarea/usa-flag.png')",
            }}
          ></div>

          {/* Right Background Flag (Bangladesh) */}
          <div
            className="h-[400px] w-[750px] bg-cover left-0 bg-no-repeat bg-center opacity-40"
            style={{
              backgroundImage:
                "url('/assets/heroarea/bangladesh-flag.png')",
            }}
          ></div>
        </div>

        {/* Foreground Images */}
        <div className="absolute z-30 inset-0 w-full  flex items-end  justify-between space-x-28 px-6 sm:px-16 xl:px-[135px]  pt-9 lg:px-24  ">
          {/* Left Foreground Image (USA Man) */}
          <div className="">
            <img
              src="/assets/heroarea/medium-shot-man-posing-studio 1.png"
              alt="Businessman representing USA"
              className="w-[300px] md:w-[500px]  object-cover"
            />
          </div>

          {/* Right Foreground Image (Bangladesh Man) */}
          <div className=" ">
            <img
              src="/assets/heroarea/man-wearing-t-shirt-gesturing 1.png"
              alt="Young man representing Bangladesh"
              className="w-[300px] md:w-[500px]   object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroArea;
