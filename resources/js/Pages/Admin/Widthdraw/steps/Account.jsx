import React from "react";
import {
  BuildingLibraryIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Account = () => {
  return (
    <div>
      <h2 className="text-center text-gray-950 font-semibold font-Inter text-2xl ">
        Send your money
      </h2>
      <div className="flex items-center justify-center  py-6">
        <div className="flex items-center  flex-1 max-w-2xl px-3 py-1 border  rounded-md">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="search"
            className="py-2 block w-full px-3 dark:bg-transparent   dark:border-gray-700 rounded-lg text-sm border-none focus:ring-0 text-white placeholder:text-base  placeholder:font-normal placeholder:font-Inter"
            placeholder="Search Bank"
          />
        </div>
      </div>

      <div className="flex justify-between items-center bg-gray-200 py-3 px-3 rounded-lg">
        <div className="flex items-center space-x-2">
          <BuildingLibraryIcon className="h-6 w-6" />
          <p className="text-base font-medium text-[#182230]">Add new bank account</p>
        </div>
        {/* <ChevronRightIcon className="h-5 w-5 font-bold " /> */}
        <img
            //   src={`${window.location.origin}/assets/Dashboard/withdrawmoney/account/chevron-right.svg`}
              src={`${window.location.origin}/assets/Dashboard/withdrawmoney/account/chevron-right.svg`}
              className=" h-6 w-6"
              alt="Avatar"
            />
      </div>
      <div className="w-full py-3">
        {/* Title */}
        <h2 className="text-purple-600 text-start text-lg sm:text-sm font-semibold underline-offset-8">
          My Accounts
        </h2>

        {/* Underline */}
        <div className="relative mt-1">
          <div className="h-1 bg-purple-500 w-20"></div>
          <div className="absolute top-0 h-1 w-full bg-gray-200"></div>
        </div>
      </div>
      <div className=" space-y-5">
        <div className="flex justify-between items-center ">
          <div className="flex items-center px-3">
            <div className=" flex items-center justify-center h-12 w-12 border rounded-full p-1">
              <img
                //src={`${window.location.origin}/assets/Dashboard/withdrawmoney/account/_Nav item button (1).png`}
                src={`${window.location.origin}/assets/Dashboard/withdrawmoney/account/_Nav item button (1).png`}
                alt=""
                srcset=""
              />
            </div>
            <div className="text-start px-3">
              <h4 className="text-xl text-[#0C111D] font-medium font-Inter">
                Bank Name
              </h4>
              <p className="text-[#667085] text-sm font-Inter">
                BDT account ending in 8001
              </p>
            </div>
          </div>

          <img
               src={`${window.location.origin}/assets/Dashboard/withdrawmoney/account/chevron-right.svg`}
              className=" h-6 w-6"
              alt="Avatar"
            />

        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center px-3">
            <div className=" flex items-center justify-center h-12 w-12 border rounded-full p-1">
              <img
               src={`${window.location.origin}/assets/Dashboard/withdrawmoney/account/_Nav item button (1).png`}
                alt=""
                srcset=""
              />
            </div>
            <div className="text-start px-3">
              <h4 className="text-xl text-[#0C111D] font-medium font-Inter">
                Bank Name
              </h4>
              <p className="text-[#667085] text-sm font-Inter">
                BDT account ending in 8001
              </p>
            </div>
          </div>

          <img
              src={`${window.location.origin}/assets/Dashboard/withdrawmoney/account/chevron-right.svg`}
              className=" h-6 w-6"
              alt="Avatar"
            />

        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center px-3">
            <div className=" flex items-center justify-center h-12 w-12 border rounded-full p-1">
              <img
               src={`${window.location.origin}/assets/Dashboard/withdrawmoney/account/_Nav item button (1).png`}
                alt=""
                srcset=""
              />
            </div>
            <div className="text-start px-3">
              <h4 className="text-xl text-[#0C111D] font-medium font-Inter">
                Bank Name
              </h4>
              <p className="text-[#667085] text-sm font-Inter">
                BDT account ending in 8001
              </p>
            </div>
          </div>

          <img
              src={`${window.location.origin}/assets/Dashboard/withdrawmoney/account/chevron-right.svg`}
              className=" h-6 w-6"
              alt="Avatar"
            />

        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center px-3">
            <div className=" flex items-center justify-center h-12 w-12 border rounded-full p-1">
              <img
               src={`${window.location.origin}/assets/Dashboard/withdrawmoney/account/_Nav item button (1).png`}
                alt=""
                srcset=""
              />
            </div>
            <div className="text-start px-3">
              <h4 className="text-xl text-[#0C111D] font-medium font-Inter">
                Bank Name
              </h4>
              <p className="text-[#667085] text-sm font-Inter">
                BDT account ending in 8001
              </p>
            </div>
          </div>

          <img
              src={`${window.location.origin}/assets/Dashboard/withdrawmoney/account/chevron-right.svg`}
              className=" h-6 w-6"
              alt="Avatar"
            />

        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center px-3">
            <div className=" flex items-center justify-center h-12 w-12 border rounded-full p-1">
              <img
               src={`${window.location.origin}/assets/Dashboard/withdrawmoney/account/_Nav item button (1).png`}
                alt=""
                srcset=""
              />
            </div>
            <div className="text-start px-3">
              <h4 className="text-xl text-[#0C111D] font-medium font-Inter">
                Bank Name
              </h4>
              <p className="text-[#667085] text-sm font-Inter">
                BDT account ending in 8001
              </p>
            </div>
          </div>

          <img
              src={`${window.location.origin}/assets/Dashboard/withdrawmoney/account/chevron-right.svg`}
              className=" h-6 w-6"
              alt="Avatar"
            />

        </div>
      </div>
    </div>
  );
};

export default Account;
