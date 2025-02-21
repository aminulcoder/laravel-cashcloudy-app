import React from "react";

const StapperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container  space-y-2 mt-4 mb-8 px-4">
      {/* Next/Confirm button */}
      <button
        onClick={() => handleClick("next")}
        className=" uppercase  px-4 text-lg  bg-violet-600 text-white py-1 sm:py-2 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 group-hover:text-white transition duration-200 ease-in-out w-full "
      >
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}
      </button>

      {/* Back button */}
      <button
        onClick={() => handleClick()}
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 group-hover:text-white transition duration-200 ease-in-out w-full sm:w-[45%] mb-4 sm:mb-0  ${
          currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Back
      </button>
    </div>
  );
};

export default StapperControl;
