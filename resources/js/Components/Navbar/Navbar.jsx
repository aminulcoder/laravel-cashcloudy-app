import React from "react";
import { Link } from '@inertiajs/react'

const Navbar = () => {
  return (
    <nav className="bg-[#6941C6]">
      <div className="py-6 mx-auto px-3 sm:px-8 lg:px-[120px] ">
        <div className="flex items-center justify-between ">
          {/* Left Section: Logo */}
          <div className="flex items-center space-x-2">
            <Link to={'/'}>
              <img
                src="/assets/logo/homepageLogo .svg"
                alt="Logo Part 1"
                className=""
              />
            </Link>
          </div>

          {/* Right Section: Links */}
          <div className="flex space-x-1 sm:space-x-7 lg:space-x-7">
            <Link
              href={route('login')}
              className="bg-[#6243A8]  text-white px-3 sm:px-6 xl:text-sm xl:font-semibold py-2 rounded-lg text-xs sm:text-base transition duration-200 hover:bg-[#503694]"
            >
              Sign in
            </Link>
            <Link
              href={route('register')}
              className="bg-white text-[#6243A8] border border-[#6243A8] px-2 sm:px-4 xl:text-sm xl:font-semibold py-2 rounded-lg text-xs sm:text-base transition duration-200 hover:bg-[#f1f1f1]"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
