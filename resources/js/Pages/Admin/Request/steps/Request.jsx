import { CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
// import { IoClose } from "react-icons/io5";
const Request = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <div>
      <h2 className="text-center text-gray-950 font-semibold text-2xl ">
        Send your money
      </h2>
      <div>
        <label
          for="price"
          class=" text-start block font-Inter sm:text-sm text-sm/6 font-medium text-[#344054]"
        >
          Amount
        </label>
        <div class="mt-2">
          <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 sm:py-2 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
            <input
              type="text"
              name="price"
              id="price"
              class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-950 focus:outline focus:outline-0 sm:text-sm/6 placeholder:text-base placeholder:font-semibold placeholder:font-Inter"
              placeholder="100"
            />
            <div class="grid shrink-0 grid-cols-1 focus-within:relative">
              <select
                id="currency"
                name="currency"
                aria-label="Currency"
                class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
              <svg
                class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="about"
          className="text-start block text-sm/6 font-medium text-[#344054]"
        >
          Description
        </label>
        <div className="mt-1">
          <textarea
            id="about"
            name="about"
            rows={5}
            placeholder="Enter a description..."
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            defaultValue={""}
          />
        </div>
      </div>

      <div className="bg-violet-600 text-center rounded-lg my-3">
        <button
          onClick={() => setshowModal(true)}
          className=" bg-violet-600 text-white py-2"
        >
          Send Request
        </button>
      </div>

      {showModal && (
        <div className="bg-gray-500/75 fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] max-w-lg py-6 px-6 sm:max-w-md rounded-lg shadow-lg relative">
            <div className="flex flex-col gap-4">
              <div>
                <div className="inline-flex justify-center bg-gray-200 rounded-full ">
                  <CheckIcon className=" w-10 h-10 sm:h-16 sm:w-16 p-2 sm:p-3 font-bold text-violet-700" />
                </div>
                <div className="py-6">
                  <h1 className=" text-xl sm:text-2xl font-Inter text-[#0C111D]  font-semibold">
                    Congratulations your payment is <br /> successfully send
                  </h1>
                </div>
                <div className="py-1">
                  <h1 className=" text-sm font-Inter text-[#000000]  font-normal">
                    We have let Sahadot hossain know to requested money
                  </h1>
                </div>

                <div className="bg-violet-600 rounded-lg my-3">
                  <button className=" bg-violet-600  font-semibold text-white py-2">
                    Back to home
                  </button>
                </div>
              </div>

              {/* Buttons */}
            </div>

            {/* Close Icon */}
            <div className="absolute top-3 right-3 cursor-pointer">
              <IoClose onClick={() => setshowModal(false)} size={24} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Request;
