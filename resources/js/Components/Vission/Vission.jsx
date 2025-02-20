import { ArrowRightIcon, PlayIcon } from "@heroicons/react/16/solid";
import { Link } from "@inertiajs/react";
import React from "react";


const Vission = () => {
  return (
    <section>
      <div className="py-12 md:py-[150px]  px-6 md:px-12 lg:px-14 xl:px-32">
        <div className="grid grid-cols-1  lg:grid-cols-12 gap-8 lg:gap-12 2xl:gap-3 ">
          {/* Video Section */}
          <div className="lg:col-span-6">
            <div className="w-full h-58   ">
              <img
                src="/assets/Vission/Video (1).png"
                alt="Video Preview"
                className="rounded-lg "
              />
            </div>
          </div>

          {/* Text Section */}
          <div className=" lg:col-span-6 space-y-1 sm:space-y-6  lg:space-y-0 text-start">
            <h2 className="text-4xl  sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#101828] ">
              How to receive money?
            </h2>

            {/* Step 1 */}
            <div className="flex items-start space-x-4 sm:sp py-3  sm:py-0 md:py-6 lg:pt-4 xl:pt-10">
              {/* <ArrowRightCircleIcon className=" h-14 w-14 sm:h-12 sm:w-12 " /> */}
              <img
                src="/assets/Vission/Icon (1).svg"
                className="  p-3 sm:p-4 lg:p-3  lg:h-12 lg:w-12 2xl:h-16 2xl:w-16 sm:w-16 sm:h-16"
                alt=""
              />
              <div>
                <h4 className=" text-lg sm:text-3xl md:text-4xl lg:text-2xl xl:text-xl font-Inter font-medium 2xl:text-4xl  text-[#101828]">
                  Register for free
                </h4>
                <p className=" text-justify  sm:text-xl md:text-xl lg:text-base xl:text-base 2xl:text-xl font-normal font-Inter text-xs  text-[#101828]">
                  Sign up online or in our app for free. All you need is an{" "}
                  <br />
                  email address, or a Google or Facebook account.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <img
                src="/assets/Vission/paper plane.svg"
                className="  p-3 sm:p-4 lg:p-3  lg:h-12 lg:w-12 2xl:h-16 2xl:w-16 sm:w-16 sm:h-16"
                alt=""
              />
              <div>
                <h4 className="text-lg sm:text-3xl lg:text-2xl  2xl:text-3xl  text-[#101828] xl:text-2xl font-Inter font-medium ">
                  Send Payment Request
                </h4>
                <p
                  className=" text-justify text-xs xl:text-base
font-normal font-Inter sm:text-xl md:text-xl lg:text-base  2xl:text-xl text-[#101828] "
                >
                  Sign up online or in our app for free. All you need is an{" "}
                  <br /> email address, or a Google or Facebook account.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center space-x-4 py-6 lg:py-3 pb-8 sm:pb-16 lg:pb-8 xl:pb-24 2xl:pb-20">
              <img
                src="/assets/Vission/cloude arrow.svg"
                className="  p-3 sm:p-4 lg:p-3  lg:h-12 lg:w-12 2xl:h-16 2xl:w-16 sm:w-16 sm:h-16"
                alt=""
              />
              <div>
                <h4 className=" text-lg sm:text-3xl lg:text-2xl 2xl:text-3xl  text-[#101828] xl:text-2xl font-Inter font-medium ">
                  Submit your work proof
                </h4>
              </div>
            </div>

            {/* Call to Action Button */}
            <Link
              to={"/register"}
              className="bg-[#7F56D9] hover:bg-[#6B4DC7] transition rounded-lg text-white inline-flex items-center space-x-2 px-2 sm:px-5 py-3   sm:my-0 shadow-md"
            >
              <p className="text-xs md:text-base xl:text-base font-semibold">
                Create an account
              </p>
              <ArrowRightIcon className="h-3 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vission;
