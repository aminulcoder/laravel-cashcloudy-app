import { useState } from "react";

const StaticAccordion = () => {
  const [open, setOpen] = useState(1); // The first accordion is open by default

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section>
      <div className="  md:max-w-lg lg:max-w-2xl xl:max-w-4xl  2xl:max-w-6xl mb-12 md:mb-[150px]  mx-auto">
        <h2 className="text-center font-bold text-2xl md:text-5xl xl:text-6xl md:pb-3 font-Inter text-[#101828]">
          FAQs
        </h2>
        {/* Item 1 */}
        <div className="border-b border-gray-300">
          <button
            onClick={() => toggleAccordion(1)}
            className="flex justify-between items-center w-full py-6 px-4 text-left focus:outline-none hover:bg-gray-100"
          >
            <span className="text-lg lg:text-2xl  xl:text-3xl font-bold text-[#182230]">
              How fast will my money arrive?
            </span>
            <span className="text-gray-500 text-xl lg:text-2xl">
              {open === 1 ? "−" : "+"}
            </span>
          </button>
          {open === 1 && (
            <div className="px-4 pb-4 text-sm lg:text-base xl:text-base font-Inter font-normal text-start transition-all ease-in-out duration-300 text-[#182230]">
              It can take up to 5 days for the money to reach your account, and
              speeds depend on which currency you're expecting. Over 95% of
              transfers arrive within 24 hours — and over 50% arrive in under 20
              seconds.
            </div>
          )}
        </div>

        {/* Item 2 */}
        <div className="border-b border-gray-300">
          <button
            onClick={() => toggleAccordion(2)}
            className="flex justify-between items-center w-full py-6 px-4 text-left focus:outline-none hover:bg-gray-100"
          >
            <span className="text-lg lg:text-2xl xl:text-3xl font-bold text-[#182230]">
              What are the fees to receive money?
            </span>
            <span className="text-gray-500 text-xl lg:text-2xl">
              {open === 2 ? "−" : "+"}
            </span>
          </button>
          {open === 2 && (
            <div className="px-4 pb-4 text-sm lg:text-base  xl:text-base font-Inter font-normal text-start  transition-all ease-in-out duration-300 text-[#182230]">
              Fees vary depending on the currency and method of transfer.
            </div>
          )}
        </div>

        {/* Item 3 */}
        <div className="border-b border-gray-300">
          <button
            onClick={() => toggleAccordion(3)}
            className="flex justify-between items-center w-full py-6 px-4 text-left focus:outline-none hover:bg-gray-100"
          >
            <span className="text-lg lg:text-2xl xl:text-3xl font-bold text-gray-900">
              How do I get account details?
            </span>
            <span className="text-gray-500 text-xl lg:text-2xl">
              {open === 3 ? "−" : "+"}
            </span>
          </button>
          {open === 3 && (
            <div className="px-4 pb-4 text-sm lg:text-base  xl:text-base font-Inter font-normal text-start text-[#182230]transition-all ease-in-out duration-300">
              You can get your account details by logging into your account
              dashboard.
            </div>
          )}
        </div>

        {/* Item 4 */}
        <div className="border-b border-gray-300">
          <button
            onClick={() => toggleAccordion(4)}
            className="flex justify-between items-center w-full py-6 px-4 text-left focus:outline-none hover:bg-gray-100"
          >
            <span className="text-lg lg:text-2xl xl:text-3xl font-bold text-[#182230]">
              I've sent money, but my recipient hasn't got it?
            </span>
            <span className="text-gray-500 text-xl lg:text-2xl">
              {open === 4 ? "−" : "+"}
            </span>
          </button>
          {open === 4 && (
            <div className="px-4 pb-4 text-sm lg:text-base xl:text-lg text-start text-[#182230] transition-all ease-in-out duration-300">
              Please contact support with the transaction ID for assistance.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StaticAccordion;
