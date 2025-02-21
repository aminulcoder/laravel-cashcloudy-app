
import { Description } from '@headlessui/react';
import React, { useEffect, useState, useRef } from 'react'


const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();
  const updateStep = (stepNumber, steps) => {

    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      if (count === stepNumber) {
        // current step
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      // step completed
      else if (count < stepNumber) {

        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;

      }
      // step pending

      else {

        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign({}, {
        description: step,
        completed: false,
        highlighted: index === 0 ? true : false,
        selected: index === 0 ? true : false,
      }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep])

  const displaySteps = newStep.map((step, index) => {

    return (
      <div key={index} className={index !== newStep.length - 1
        ? 'w-full flex items-center'
        : "flex items-center"
      }
      >
        <div className=" relative flex flex-col  items-center text-[#6941C6]">
          <div className={`rounded-full  transition duration-500 ease-in-out  border-2  border-gray-300 h-8 sm:h-10 w-8 sm:w-10 
           items-center justify-center sm:p-1 ${step.selected
              ? "bg-[#6941C6] text-white font-bold border  border-[#6941C6]" : ""
            }`}
          >
            {/* Display number */}

            {
              step.completed ? (
                <span className='text-white font-bold text-base items-center sm:text-xl'>&#10003;</span>
              ) : (
                index + 1
              )}
          </div>
          <div className={`absolute top-0  text-center mt-12 sm:mt-16 w-56   sm:w-32  text-xs sm:text-lg   font-normal   ${step.highlighted ? "text-gray-900" : "text-gray-400"} `}>
            {/* Display discription */}

            {step.description}
          </div>
        </div>
        <div className={`flex-auto border-t-4  sm:border-t-8  transition  duration-500  ease-in-out ${step.completed ? "border-[#6941C6]" : "border-gray-300"
          }`}>
          {/* Display line */}
        </div>
      </div>
    );

  });
  return (
    <div className='mx-4 p-4 flex  justify-between  items-center '>
      {displaySteps}

    </div>
  )
}

export default Stepper