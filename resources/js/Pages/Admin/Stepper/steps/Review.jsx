import { PencilSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

const Review = () => {
    return (
        <div className="font-Inter ">
            <h2 className="text-center text-gray-950 font-semibold text-xl sm:text-2xl font-Inter pb-3">
                Confirm and send
            </h2>

            <div className=" space-y-3 pb-6 ">
                <div className="flex justify-between">
                    <p className="text-base font-Inter font-semibold">
                        Transfer details
                    </p>
                    <div className="flex items-center border px-3 py-1 rounded-3xl  space-x-2">
                        <PencilSquareIcon className="h-5 w-5" />
                        <p className="text-sm font-normal">Edit</p>
                    </div>
                </div>
                <div className="flex items-center text-sm  justify-between">
                    <p className="text-gray-600">You send exactly</p>
                    <span className="font-bold">100 USD</span>
                </div>
                <div className="flex items-center text-sm justify-between">
                    <p className="text-gray-600">Total fees (included)</p>
                    <span className="">3.80 USD</span>
                </div>
                <div className="flex items-center text-sm justify-between">
                    <p className="text-gray-600">Amount will convert</p>
                    <span className="">96.2 USD</span>
                </div>
                <div className="flex items-center text-sm justify-between">
                    <p className="text-gray-600">Guaranteed rate</p>
                    <span className="">1 USD = 119.50 BDT</span>
                </div>
                <div className="flex items-center text-sm justify-between">
                    <p className="text-gray-600">You Get</p>
                    <span className="font-bold">9600.40 USD</span>
                </div>
            </div>
            <div className=" space-y-3  border-t py-6 ">
                <div className="flex justify-between">
                    <p className="font-semibold text-base">Send details</p>
                    <div className="flex items-center border px-3 py-1 rounded-3xl  space-x-2">
                        <PencilSquareIcon className="h-5 w-5" />
                        <p className="text-gray-600 font-Inter text-sm">Edit</p>
                    </div>
                </div>
                <div className="flex items-center font-Inter text-sm justify-between">
                    <p className="text-gray-600">Sending</p>
                    <span className="font-medium">Now</span>
                </div>
                <div className="flex items-center text-sm font-Inter justify-between">
                    <p className="text-gray-600">Should arrive</p>
                    <span className="font-medium">3.80 USD</span>
                </div>
                <div className="flex items-center text-sm font-Inter justify-between pb-3">
                    <p className="text-gray-600 ">Repeats</p>
                    <span className="font-medium">Never</span>
                </div>
                <div className=" border-t sm:py-2">
                    <div>
                        <label
                            for="price"
                            class="text-start block text-sm/6  font-medium text-gray-900"
                        >
                            Reference (optional)
                        </label>
                        <div class="mt-2">
                            <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 sm:py-2">
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    class="block min-w-0 grow py-1 sm:py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                    placeholder="Enter Reference"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-violet-600 text-center rounded-lg">
                    <button className=" bg-violet-600  text-white font-semibold py-2">
                        Confirm and send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Review;
