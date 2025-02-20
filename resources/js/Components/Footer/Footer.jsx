import React from 'react';

const Footer = () => {
  return (
    <div className='border-t py-3 sm:py-6 mt-12  md:px-6 lg:px-12 xl:px-32 2xl:px-20'>
        <div className="grid  grid-cols-2 sm:grid-cols-4 md:grid-cols-12 gap-1 sm:gap-8">
            {/* Left Side */}
            <div className="col-span-1 sm:col-span-2 md:col-span-6 flex items-center justify-center md:justify-start">
                <p className='text-start text-xs sm:text-lg md:text-sm font-Inter xl:text-base font-medium text-[#000000]'>
                    © Cashcloudy Limited 2025
                </p>
            </div>

            {/* Right Side */}
            <div className="col-span-1 sm:col-span-2 md:col-span-6 flex items-center justify-center sm:justify-start md:justify-end space-x-6 sm:space-x-8 lg:space-x-12 text-xs sm:text-base md:text-sm xl:text-base font-medium font-Inter">
                <p className="hover:text-blue-500 cursor-pointer transition-colors">Privacy Policy</p>
                <p className="hover:text-blue-500 cursor-pointer transition-colors">Cookie Policy</p>
            </div>
        </div>
    </div>
  );
}

export default Footer;
