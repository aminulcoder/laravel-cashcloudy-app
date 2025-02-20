import { ArrowRightIcon } from "@heroicons/react/16/solid";
import React from "react";

const Feature = () => {
  return (
    <section>

      <div className="px-6 md:px-12 lg:px-20 xl:px-32 ">
        <h2 className="text-3xl font-Inter font-bold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center py-0 mb-10 text-[#101828]">
          Cashcloudy Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 font-Inter lg:grid-cols-3 gap-3 lg:gap-6 2xl:gap-6">
          {/* Feature 1 */}
          <div className="border rounded-3xl lg:px-5  px-6 space-y-4 py-6 h-72 lg:h-64 xl:h-72 2xl:h-96  sm:h-80">
            <img
              src="/assets/Feature/coins-hand.svg"
              className="border rounded-lg  p-3 sm:p-4 lg:p-3 bg-gray-100 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16 sm:w-16 sm:h-16 "
              alt=""
            />
            <h3 className="text-start text-2xl sm:text-5xl md:text-2xl  lg:text-xl xl:text-3xl 2xl:text-4xl font-bold text-[#101828]">
              Easily receive money from clients
            </h3>
            <p className="text-start  text-[#101828] sm:text-start sm:text-xl md:text-base lg:text-sm xl:text-base 2xl:text-xl">
              A comprehensive dashboard showing balance, recent transactions,
              and financial insights at a glance.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="border rounded-3xl lg:px-5  px-6 space-y-4 py-6 h-72 lg:h-64 xl:h-72 2xl:h-96  sm:h-80">
            <img
              src="/assets/Feature/monitor-01.svg"
              className="border rounded-lg  p-3 sm:p-4 h-20  w-16 lg:p-3 bg-gray-100 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16 sm:w-16 sm:h-16"
              alt=""
            />
            <h3 className="text-start text-2xl sm:text-5xl md:text-2xl  lg:text-xl xl:text-3xl 2xl:text-4xl font-bold text-[#101828]">
              Account overview dashboard
            </h3>
            <p className="text-start text-[#101828] sm:text-start sm:text-xl md:text-base lg:text-sm xl:text-base 2xl:text-xl">
              A comprehensive dashboard showing balance, recent transactions,
              and financial insights at a glance.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border rounded-3xl lg:px-5  px-6 space-y-4 py-6 h-72 lg:h-64 xl:h-72 2xl:h-96 sm:h-80">
            <img
              src="/assets/Feature/bell-02.svg"
              className="border rounded-lg  p-3 sm:p-4 lg:p-3 bg-gray-100 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16 sm:w-16 sm:h-16"
              alt=""
            />
            <h3 className="text-start text-2xl sm:text-5xl md:text-2xl  lg:text-xl xl:text-3xl 2xl:text-4xl font-bold text-[#101828]">
              Real-Time <br /> Notifications
            </h3>
            <p className="text-start text-[#101828] sm:text-start sm:text-xl md:text-base lg:text-sm xl:text-base 2xl:text-xl">
              Alerts for transactions, low balances, or unusual account
              activity.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="border rounded-3xl lg:px-5 px-6 space-y-4 py-6 h-72 lg:h-64 xl:h-72 2xl:h-96 sm:h-80">
            <img
              src="/assets/Feature/credit-card-up.svg"
              className="border rounded-lg  p-3 sm:p-4 lg:p-3 bg-gray-100 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16 sm:w-16 sm:h-16"
              alt=""
            />
            <h3 className="text-start text-[#101828]  text-2xl sm:text-5xl md:text-2xl  lg:text-xl xl:text-3xl 2xl:text-4xl font-bold">
              Anytime withdraw in local bank
            </h3>
            <p className="text-start  text-[#101828] sm:text-start sm:text-xl md:text-base lg:text-sm xl:text-base 2xl:text-xl">
              Users can withdraw money to local banks in real time.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="border rounded-3xl lg:px-5 px-6 space-y-4 py-6 h-72 lg:h-64 xl:h-72 2xl:h-96 sm:h-80">
            <img
              src="/assets/Feature/line-chart-up-02.svg"
              className="border rounded-lg  p-3 sm:p-4 lg:p-3 bg-gray-100 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16 sm:w-16 sm:h-16"
              alt=""
            />
            <h3 className="text-start text-[#101828] text-2xl sm:text-5xl md:text-2xl  lg:text-xl xl:text-3xl 2xl:text-4xl font-bold">
              Best rate from other payment getaways
            </h3>
            <p className="text-start text-[#101828] sm:text-start sm:text-xl md:text-base lg:text-sm xl:text-base 2xl:text-xl">
              We provide the best rate to our customers because we understand
              how hard it is to earn remittance.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="border rounded-3xl lg:px-5 px-7 space-y-4 py-6 h-72 lg:h-64 xl:h-72 2xl:h-96 sm:h-80">
            <img
              src="/assets/Feature/Frame 2 (1).svg"
              className="border rounded-lg   sm:p-4 lg:p-3 bg-gray-100 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16 sm:w-16 sm:h-16"
              alt=""
            />
            <h3 className="text-start text-2xl sm:text-5xl md:text-2xl  lg:text-xl xl:text-3xl 2xl:text-4xl font-bold text-[#101828]">
              24/7 Customer <br /> Support
            </h3>
            <p className="text-start text-[#101828] sm:text-start sm:text-xl md:text-base lg:text-sm xl:text-base xl:font-normal 2xl:text-xl">
              We have a dedicated team in the USA as well as in Bangladesh to
              support you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
