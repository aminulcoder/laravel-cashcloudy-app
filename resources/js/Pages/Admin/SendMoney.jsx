// import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
// import { StepperContext } from "../../contexts/StepperContext.jsx";
import { StepperContext } from "../../contexts/StepperContext.jsx";
// import Stepper from "../components/Stepper/Stepper";
import Stepper from "./Stepper/Stepper.jsx";
// import StapperControl from "../components/Stepper/StapperControl.jsx";
import StapperControl from "./Stepper/StapperControl.jsx";

// import Recipient from "../components/Stepper/steps/Recipient.jsx";
import Recipient from "./Stepper/steps/Recipient.jsx";

// import Amount from "../components/Stepper/steps/Amount.jsx";
import Amount from "./Stepper/steps/Amount.jsx";

// import Review from "../components/Stepper/steps/Review.jsx";
import Review from "./Stepper/steps/Review.jsx";

// import Pay from "../components/Stepper/steps/Pay.jsx";
import Pay from "./Stepper/steps/Pay.jsx";
import { useState } from "react";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/16/solid";
// import { BiLeftArrow } from "react-icons/bi";

export default function SendMoney() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = ["Recipient", "Amount", "Review", "Pay"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Recipient />;
      case 2:
        return <Amount />;
      case 3:
        return <Review />;
      case 4:
        return <Pay />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      <div className="">
        <div className="">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex flex-col lg:flex-row lg:items-start">
            {/* Back Button */}
            {currentStep > 1 && ( // Back button will only show if current step > 1
              <div className="mx-6 py-3 sm:my-8">
                <button
                  className="border px-3 py-1 flex items-center rounded-3xl hover:bg-gray-100"
                  onClick={() => handleClick("prev")}
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                  <span className="ml-2">Back</span>
                </button>
              </div>
            )}
            <div className=" w-[80%] sm:w-1/2 mx-auto  rounded-2xl pb-2 bg-white">
              <div className="mt-10 ">
                {/* Stepper component */}
                <Stepper steps={steps} currentStep={currentStep} />
              </div>

              {/* Display components */}
              <div className="my-10  sm:p-6">
                <StepperContext.Provider
                  value={{
                    userData,
                    setUserData,
                    finalData,
                    setFinalData,
                  }}
                >
                  {displayStep(currentStep)}
                </StepperContext.Provider>
              </div>

              {/* Navigation controls */}
              <div className="px-4 sm:px-6">
                <StapperControl
                  handleClick={handleClick}
                  steps={steps}
                  currentStep={currentStep}
                />
              </div>
            </div>
          </div>


        </div>
      </div>
    </AuthenticatedLayout>
  );
}
{/* <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex flex-col lg:flex-row lg:items-start">

{currentStep > 1 && (
  <div className="mx-auto lg:mx-6 my-4 lg:my-8">
    <button
      className="border px-3 py-2 flex items-center rounded-full hover:bg-gray-100 transition duration-200"
      onClick={() => handleClick("prev")}
      aria-label="Go back to the previous step"
    >
      <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
      <span className="ml-2 text-gray-700">Back</span>
    </button>
  </div>
)}

<div className="w-full lg:w-2/3 mx-auto rounded-2xl pb-4 bg-white">

  <div className="mt-6 px-4 sm:px-6">
    <Stepper steps={steps} currentStep={currentStep} />
  </div>

  <div className="my-6 px-4 sm:px-6">
    <StepperContext.Provider
      value={{
        userData,
        setUserData,
        finalData,
        setFinalData,
      }}
    >
      {displayStep(currentStep)}
    </StepperContext.Provider>
  </div>


  <div className="flex justify-between items-center px-4 sm:px-6">
    <button
      onClick={() => handleClick("prev")}
      disabled={currentStep === 1}
      className={`${
        currentStep === 1
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-gray-700 text-white hover:bg-gray-800"
      } px-4 py-2 rounded-lg transition duration-200`}
    >
      Back
    </button>
    <button
      onClick={() => handleClick("next")}
      disabled={currentStep === steps.length}
      className={`${
        currentStep === steps.length
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700"
      } px-4 py-2 rounded-lg transition duration-200`}
    >
      {currentStep === steps.length ? "Finish" : "Next"}
    </button>
  </div>
</div>
</div> */}
