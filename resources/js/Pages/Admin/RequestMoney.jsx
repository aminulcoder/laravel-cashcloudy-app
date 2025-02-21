import React from "react";
import { useState } from "react";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
// import { StepperContext } from "../../contexts/StepperContext.jsx";
import { StepperContext } from "../../contexts/StepperContext.jsx";
// import Stepper from "../components/Request/Stepper";
import Stepper from "./Request/Stepper";
// import StapperControl from "../components/Request/StapperControl.jsx";
import StapperControl from "./Stepper/StapperControl";
// import Recipient from "../components/Request/steps/Recipient.jsx";
import Recipient from "./Request/steps/Recipient";
// import Request from "../components/Request/steps/Request.jsx";
import Request from "./Request/steps/Request";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

const RequestMoney = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = ["Recipient", "Request"];
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Recipient />;
      case 2:
        return <Request />;
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
      {/* <Head title="Dashboard" /> */}
      <div className="">
        <div className="">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            {/* Back Button */}
            {currentStep > 1 && ( // Back button will only show if current step > 1
              <div className="mx-6 my-8">
                <button
                  className="border px-3 py-1 flex items-center rounded-3xl hover:bg-gray-100"
                  onClick={() => handleClick("prev")}
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                  <span className="ml-2">Back</span>
                </button>
              </div>
            )}
            <div className="sm:w-1/2 mx-auto  rounded-2xl pb-2 bg-white">
              <div className=" w-full  horizontal ">
                <Stepper steps={steps} currentStep={currentStep} />
              </div>

              {/* Display components */}

              <div className="my-10 p-10">
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
              <StapperControl
                handleClick={handleClick}
                steps={steps}
                currentStep={currentStep}
              />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default RequestMoney;
