
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";
import {CreditCardIcon, PlusIcon,} from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import Tooltip from "@/Components/Tooltip/Tooltip";
import { Button } from "@headlessui/react";
// import { IoClose } from "react-icons/io5";
import classNames from "classnames";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/20/solid";

// import { NavLink } from "react-router-dom";
export default function Dashboard({ rate }) {
  const [showModal, setshowModal] = useState(false);
  const [showendModal, setshowendModal] = useState(false);

// console.log('rate');

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }


  return (
    <AuthenticatedLayout
      header={
        <h2 className="font-semibold text-base sm:text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      <div className=" ">
        <div className=" mx-auto ">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 sm:px-6 py-3 space-y-3 md:space-y-0">
              {/* Total Balance */}
              <div className="flex-1 py-3 sm:py-6">
                <p className="text-start text-xs  sm:text-sm font-Inter  md:text-base text-[#0C111D]">
                  Total balance
                </p>
                <div className="flex sm:flex-row items-center  space-x-1  sm:space-y-0 sm:space-x-2 py-3">
                  <div>
                    <p className="text-4xl md:text-4xl lg:text-5xl font-Inter text-[#0C111D] font-semibold">
                      $3,384.25
                    </p>
                  </div>
                  <div className="font-Inter">
                    {/* <div className="container my-2"> */}
                    {/* <Tooltip
                      text="Add Money"
                      className=" text-xs sm:text-sm font-Inter  md:text-base  mx-12"
                    > */}
                    <Tooltip text="Add money" style="dark">
                      <div className="">
                        <Button
                          onClick={() => setshowendModal(true)}
                          type="button"
                          className="flex items-center rounded-full btn bg-[#6941C6]  justify-center font-bold"
                        >
                          {/* <PlusIcon className="h-4 w-4 sm:h-6 sm:w-6 text-white p-1" /> */}
                          <PlusIcon
                            className="h-4 w-4 sm:h-7 sm:w-7 text-white sm:p-0.5 "
                            strokeWidth={2}
                          />
                        </Button>
                      </div>
                    </Tooltip>
                    {/* </Tooltip> */}
                    {/* </div> */}

                    {showendModal && (
                      <div className="bg-gray-500/75 fixed inset-0 flex justify-center items-center z-50">
                        <div className="bg-white w-[90%] max-h-[90%] overflow-y-auto py-6 px-6 sm:max-w-md rounded-lg shadow-lg relative">
                          <div className="flex flex-col gap-4">
                            <div>
                              <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                                  <CreditCardIcon
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                  />
                                </div>
                              </div>
                              <div className="mt-3 text-start sm:mt-0 sm:text-left">
                                <div className="text-lg font-bold text-gray-900">
                                  Add money from card
                                </div>
                                <p className="text-sm text-gray-500">
                                  Please enter your card details.
                                </p>
                              </div>
                            </div>

                            {/* Form */}
                            <form className="space-y-1 mt-6">
                              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                  <label
                                    htmlFor="firstName"
                                    className="text-start block text-sm font-medium text-gray-600"
                                  >
                                    First Name
                                  </label>
                                  <input
                                    type="text"
                                    name="firstname"
                                    id="firstName"
                                    placeholder="e.g. Howard"
                                    onChange={(e) =>
                                      setFirstname(e.target.value)
                                    }
                                    className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  />
                                </div>
                                <div>
                                  <label
                                    htmlFor="lastName"
                                    className=" text-start block text-sm font-medium text-gray-600"
                                  >
                                    Last Name
                                  </label>
                                  <input
                                    type="text"
                                    name="lastname"
                                    id="lastName"
                                    placeholder="e.g. Thurman"
                                    onChange={(e) =>
                                      setLastname(e.target.value)
                                    }
                                    className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  />
                                </div>
                              </div>
                              <div className="flex items-center space-x-8">
                                <div className="flex-grow">
                                  <label className="block text-sm text-gray-600">
                                    Card number
                                  </label>
                                  <div className="relative">
                                    <input
                                      type="text"
                                      placeholder="1234 1234 1234 1234"
                                      className="block w-full px-2 py-1 mt-1 text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder:px-8"
                                    />
                                    <div className="absolute left-2 top-0 flex items-center h-full">
                                      <img
                                        src={window.location.origin + '/assets/Dashboard/mastercard/Mastercard.svg'}
                                        alt="Card Icon"
                                        className="w-5 h-5" // Adjusted size for better visibility
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-1/4">
                                  <label className="block text-sm text-gray-600">
                                    CVV
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="•••"
                                    className="block w-full px-4 py-1 mt-1 text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                  />
                                </div>
                              </div>

                              <div className="flex space-x-4">
                                <div className="w-1/3">
                                  <label className="block text-sm text-gray-600">
                                    Expiry
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="MM / YYYY"
                                    className="block w-full px-4 py-1 mt-1 text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                  />
                                </div>
                                <div className="flex-grow">
                                  <label className="block text-sm text-gray-600">
                                    Address
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="123 Dream Avenue, New York, USA"
                                    className="block w-full px-4 py-1 mt-1 text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                  />
                                </div>
                              </div>

                              <label
                                for="country"
                                className="text-start block text-sm font-medium text-gray-600"
                              >
                                Country
                              </label>
                              <div className="mt-2 grid grid-cols-1">
                                <select
                                  id="country"
                                  name="country"
                                  autocomplete="country-name"
                                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                  <option>United States</option>
                                  <option>Canada</option>
                                  <option>Mexico</option>
                                </select>
                                <svg
                                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
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

                              <label
                                for="country"
                                className="text-start block text-sm font-medium text-gray-600"
                              >
                                City
                              </label>
                              <div className="mt-2 grid grid-cols-1">
                                <select
                                  id="country"
                                  name="country"
                                  autocomplete="country-name"
                                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                  <option>New Work</option>
                                  <option>Canada</option>
                                  <option>Mexico</option>
                                </select>
                                <svg
                                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
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

                              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                  <label
                                    htmlFor="firstName"
                                    className="text-start block text-sm font-medium text-gray-600"
                                  >
                                    Address 1
                                  </label>
                                  <input
                                    type="text"
                                    name="firstname"
                                    id="firstName"
                                    placeholder="123 Dream Avenue"
                                    onChange={(e) =>
                                      setFirstname(e.target.value)
                                    }
                                    className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  />
                                </div>
                                <div>
                                  <label
                                    htmlFor="lastName"
                                    className=" text-start block text-sm font-medium text-gray-600"
                                  >
                                    Address 2 (Optional)
                                  </label>
                                  <input
                                    type="text"
                                    name="lastname"
                                    id="lastName"
                                    placeholder="20 Cooper Square"
                                    onChange={(e) =>
                                      setLastname(e.target.value)
                                    }
                                    className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  />
                                </div>
                              </div>
                              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                  <label
                                    htmlFor="firstName"
                                    className="text-start block text-sm font-medium text-gray-600"
                                  >
                                    State
                                  </label>
                                  <input
                                    type="text"
                                    name="firstname"
                                    id="firstName"
                                    placeholder="Queens"
                                    onChange={(e) =>
                                      setFirstname(e.target.value)
                                    }
                                    className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  />
                                </div>
                                <div>
                                  <label
                                    htmlFor="lastName"
                                    className=" text-start block text-sm font-medium text-gray-600"
                                  >
                                    Zip (Optional)
                                  </label>
                                  <input
                                    type="text"
                                    name="lastname"
                                    id="lastName"
                                    placeholder="000000"
                                    onChange={(e) =>
                                      setLastname(e.target.value)
                                    }
                                    className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  />
                                </div>
                              </div>

                              <div className="pt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                <button
                                  type="button"
                                  onClick={() => setshowendModal(false)}
                                  className="inline-flex w-full justify-center rounded-md bg-[#7F56D9] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                                >
                                  Add Now
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setshowendModal(false)}
                                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                                >
                                  Cancel
                                </button>
                              </div>
                            </form>

                            {/* Buttons */}
                          </div>

                          {/* Close Icon */}
                          <div className="absolute top-3 right-3 cursor-pointer">
                            <ClockIcon
                              onClick={() => setshowendModal(false)}
                              size={24}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {/* <ChartBarIcon className="h-4 w-4 text-gray-400" /> */}
                  <img
                    src={window.location.origin + '/assets/Dashboard/balancecard/bar-chart-04.svg'}
                    className="h-4 w-4"
                    alt="Avatar"
                  />
                  <span className="text-xs sm:text-sm font-Inter  text-[#0C111D]  font-semibold">
                    450,420.00 BDT
                  </span>
                  <p className="text-sm font-normal font-Inter text-[#667085]">
                  (1 USD = <strong>{rate}</strong> BDT)
                  </p>
                </div>
              </div>




    <div className="flex flex-wrap items-center justify-start gap-2">
      <NavLink
        href={route('sendmoney')}
        className={({ isActive }) =>
          classNames(
            "group flex border-2 items-center gap-x-2 border-gray-500 text-base sm:gap-x-3 rounded-md p-2 lg:text-lg font-semibold leading-6",
            isActive
              ? "bg-[#7F56D9] text-white"
              : "text-gray-800  hover:bg-[#7F56D9] hover:text-white"
          )
        }
      >
        <img
          src={window.location.origin + '/assets/Dashboard/balancecard/icon/paperplane.svg'}
          className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-[#344054] group-hover:brightness-0 group-hover:invert"
          alt="Send Money"
        />
        Send
      </NavLink>

      <NavLink
      href={route('widthdraw.money')}
        className={({ isActive }) =>
          classNames(
            "group flex border items-center text-base gap-x-2 sm:gap-x-3 rounded-md p-2 lg:text-lg font-semibold leading-6",
            isActive
              ? "bg-[#7F56D9] text-white"
              : "text-gray-800  hover:bg-[#7F56D9] hover:text-white"
          )
        }
      >
        <img
          src={window.location.origin + '/assets/Dashboard/balancecard/icon/bank icon.svg'}
          className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-[#344054] group-hover:brightness-0 group-hover:invert"
          alt="Withdraw Money"
        />
        Withdraw
      </NavLink>

      <NavLink
          href={route('request.money')}
        className={({ isActive }) =>
          classNames(
            "group flex border items-center text-base gap-x-2 sm:gap-x-3 rounded-md p-2 lg:text-lg font-semibold leading-6",
            isActive
              ? "bg-[#7F56D9] text-white"
              : "text-gray-800  hover:bg-[#7F56D9] hover:text-white"
          )
        }
      >
        <img
          src={window.location.origin + '/assets/Dashboard/balancecard/icon/currency-dollar-circle-1.svg'}
          className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-[#344054] group-hover:brightness-0 group-hover:invert"
          alt="Request Money"
        />
        Request
      </NavLink>
    </div>

            </div>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg my-5">
        <div className="flex justify-between pr-3 sm:px-6 py-3 sm:py-4 bg-[#6941C6]">
          {/* Left Section */}
          <div className="flex  space-x-1 sm:space-x-3 px-2">
            <img
              src={window.location.origin + '/assets/Dashboard/Phoenix/credit-card-upload.svg'}
              className="h-8 w-8 sm:h-12 sm:w-12 bg-[#7F56D9] rounded-full p-2 sm:p-3"
              alt="Avatar"
            />
            <div className="flex flex-col justify-center">
              <h4 className="font-Inter text-sm sm:text-xl font-medium  text-white leading-tight">
                Phoenix requested 100 USD
              </h4>
              <p className="text-start text-xs sm:text-sm text-white font-Inter">
                Pay or decline their request
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            <button
              onClick={() => setshowModal(true)}
              className="text-white text-xs sm:text-base font-Inter font-semibold bg-[#7F56D9] px-1 sm:px-4 py-2 rounded-lg"
            >
              View Request
            </button>
          </div>
        </div>

        {showModal && (
          <div className="bg-gray-500/75 fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white w-[90%] max-w-lg py-6 px-6 sm:max-w-md rounded-lg shadow-lg relative">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl sm:text-2xl font-semibold font-Inter text-gray-900">
                  Request Details
                </h2>

                {/* Input Fields */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 text-start"
                    >
                      From
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstName"
                      placeholder="Phoenix Baker"
                      onChange={(e) => setFirstname(e.target.value)}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm text-start"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 text-start"
                    >
                      Amount
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastName"
                      placeholder="100 USD"
                      onChange={(e) => setLastname(e.target.value)}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm text-start"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700 text-start"
                  >
                    Description
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    rows={4}
                    placeholder="Here will be a short description."
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm text-start"
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                  <button
                    onClick={() => setshowModal(false)}
                    className="border text-gray-800 hover:text-white px-6 py-2 rounded-lg hover:bg-blue-600 text-sm"
                  >
                    Decline
                  </button>
                  <button
                    onClick={() => setshowModal(false)}
                    className="bg-purple-600 font-semibold text-white px-6 py-2 rounded-lg hover:bg-purple-700 text-sm"
                  >
                    Pay now
                  </button>
                </div>
              </div>

              {/* Close Icon */}
              <div className="absolute top-3 right-3 cursor-pointer">
                <LockClosedIcon onClick={() => setshowModal(false)} size={24} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div className="flex justify-between px-4 sm:px-6 py-4">
          <p className="text-lg sm:text-2xl font-Inter font-semibold">
            Recent Contacts
          </p>
          <div className="flex items-center space-x-2  ">
            <div className="hover:bg-gray-300 p-3 rounded">
              <img
                src={window.location.origin + '/assets/Dashboard/recent/icon/left arrow icon.svg'}
                className="h-3 w-3 sm:h-3 sm:w-3   hover:bg-gray-200 active:bg-gray-300 rounded"
                alt="Avatar"
              />
            </div>
            <div className="hover:bg-gray-300 p-3 rounded">
              <img
                src={window.location.origin + '/assets/Dashboard/recent/icon/right arrow svg.svg'}
                className="h-3 w-3 sm:h-3 sm:w-3  hover:bg-gray-200 active:bg-gray-300 rounded"
                alt="Avatar"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="space-y-2 px-4 sm:px-6 overflow-x-auto">
            <div className="flex items-center flex-wrap gap-2">
              {/* First Contact */}
              <div className="flex items-center space-x-2 border rounded-full px-2 py-2">
                <img
                  src={window.location.origin + '/assets/Dashboard/users/Avatar.png'}
                  className="h-7 w-7"
                  alt="Avatar"
                />
                <p className="text-xs sm:text-sm font-medium font-Inter ">
                  Phoenix Baker
                </p>
              </div>
              {/* Second Contact */}
              <div className="flex items-center space-x-2 border rounded-full px-2 py-2">
                <img
                  src={window.location.origin + '/assets/Dashboard/users/Avatar.png'}
                  className="h-7 w-7"
                  alt="Avatar"
                />
                <p className="text-xs sm:text-sm font-medium font-Inter ">
                  Phoenix Baker
                </p>
              </div>
              {/* Third Contact */}
              <div className="flex items-center space-x-2 border rounded-full px-2 py-2">
                <img
                  src={window.location.origin + '/assets/Dashboard/users/Avatar.png'}
                  className="h-7 w-7"
                  alt="Avatar"
                />
                <p className="text-xs sm:text-sm font-medium font-Inter ">
                  Phoenix Baker
                </p>
              </div>
              {/* Fourth Contact */}
              <div className="flex items-center space-x-2 border rounded-full px-2 py-2">
                <img
                  src={window.location.origin + '/assets/Dashboard/users/Avatar.png'}
                  className="h-7 w-7"
                  alt="Avatar"
                />
                <p className="text-xs sm:text-sm font-medium font-Inter ">
                  Phoenix Baker
                </p>
              </div>
              {/* Fifth Contact */}
              <div className="flex items-center space-x-2 border rounded-full px-2 py-2">
                <img
                  src={window.location.origin + '/assets/Dashboard/users/Avatar.png'}
                  className="h-7 w-7"
                  alt="Avatar"
                />
                <p className="text-xs sm:text-sm font-medium font-Inter ">
                  Phoenix Baker
                </p>
              </div>
              <div className="flex items-center space-x-2 border rounded-full px-2 py-2">
                <img
                  src={window.location.origin + '/assets/Dashboard/users/Avatar.png'}
                  className="h-7 w-7"
                  alt="Avatar"
                />
                <p className="text-xs sm:text-sm  font-medium font-Inter ">
                  Phoenix Baker
                </p>
              </div>
              {/* Seventh Contact */}
              {/* <div className="flex items-center space-x-2 border rounded-full px-2 py-2">
                <img
                  src="/assets/users/Avatar.png"
                  className="h-7 w-7"
                  alt="Avatar"
                />
                <p className="text-xs sm:text-sm font-medium font-Inter ">
                  Phoenix Baker
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 bg-white rounded-lg">
        <div className="flex justify-between py-6 px-3 sm:px-5">
          <p className="text-lg sm:text-2xl font-semibold font-Inter">
            Transactions
          </p>
          <Link
            href={route('transection')}
            className="flex items-center font-semibold border rounded-lg py-2 px-3 space-x-2"
          >
            <p className="text-sm sm:text-base font-Inter text-[#344054]">
              View All
            </p>
            {/* <ArrowRightIcon className="h-4 w-4" /> */}
            <img
              src={window.location.origin + '/assets/Dashboard/transactions/right arrow svg.svg'}
              className=" h-3 w-3 "
              alt="Avatar"
            />
          </Link>
        </div>

        {/* First Transaction */}
        <div className="flex flex-wrap justify-between px-3 sm:px-4 border-b border-t py-2 sm:py-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-gray-200">
              {/* <ArrowDownIcon className="h-5 w-5 sm:h-[14px] sm:w-[14px]" /> */}
              <img
                src={window.location.origin + '/assets/Dashboard/transactions/down arrow icon.svg'}
                className="h-4 w-4 sm:h-[12px] sm:w-[12px]"
                alt="Avatar"
              />
            </div>
            <div className="text-start">
              <p className="font-medium text-[#0C111D] text-sm  sm:text-xl font-Inter">
                Phoenix Baker
              </p>
              <p className="text-xs text-[#667085] font-normal text-start sm:text-sm">
                15 Oct 2024
              </p>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-xl font-medium text-[#0C111D] font-Inter">
              + $3,384 USD
            </p>
          </div>
        </div>

        {/* second  Transaction */}
        <div className="flex flex-wrap justify-between px-3 sm:px-4 border-b py-2 sm:py-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-gray-200">
              {/* <ArrowDownIcon className="h-5 w-5 sm:h-[14px] sm:w-[14px]" /> */}

              <img
                src={window.location.origin + '/assets/Dashboard/transactions/down arrow icon.svg'}
                className="h-4 w-4 sm:h-[12px] sm:w-[12px]"
                alt="Avatar"
              />
            </div>
            <div className="text-start">
              <p className="font-medium text-[#0C111D] text-sm  sm:text-xl font-Inter">
                Phoenix Baker
              </p>
              <p className="text-xs text-[#667085] font-normal text-start sm:text-sm">
                15 Oct 2024
              </p>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-xl font-medium text-[#0C111D] font-Inter">
              + $3,384 USD
            </p>
          </div>
        </div>
        {/* Third Transaction */}
        <div className="flex flex-wrap justify-between px-3 sm:px-4 border-b py-2 sm:py-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-gray-200">
              {/* <ArrowDownIcon className="h-5 w-5 sm:h-[14px] sm:w-[14px]" /> */}
              <img
                src={window.location.origin + '/assets/Dashboard/transactions/down arrow icon.svg'}
                className="h-4 w-4 sm:h-[12px] sm:w-[12px]"
                alt="Avatar"
              />
            </div>
            <div className="text-start">
              <p className="font-medium text-[#0C111D] text-sm  sm:text-xl font-Inter">
                Phoenix Baker
              </p>
              <p className="text-xs text-[#667085] font-normal text-start sm:text-sm">
                15 Oct 2024
              </p>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-xl font-medium text-[#0C111D] font-Inter">
              + $3,384 USD
            </p>
          </div>
        </div>

        {/* Fourth Transaction */}
        <div className="flex flex-wrap justify-between px-3 sm:px-4 border-b py-2 sm:py-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-gray-200">
              {/* <ArrowDownIcon className="h-5 w-5 sm:h-[14px] sm:w-[14px]" /> */}
              <img
                src={window.location.origin + '/assets/Dashboard/transactions/down arrow icon.svg'}
                className="h-4 w-4 sm:h-[12px] sm:w-[12px]"
                alt="Avatar"
              />
            </div>
            <div className="text-start">
              <p className="font-medium text-[#0C111D] text-sm  sm:text-xl font-Inter">
                Phoenix Baker
              </p>
              <p className="text-xs text-[#667085] font-normal text-start sm:text-sm">
                15 Oct 2024
              </p>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-xl font-medium text-[#0C111D] font-Inter">
              + $3,384 USD
            </p>
          </div>
        </div>

        {/* Fifth Transaction */}
        <div className="flex flex-wrap justify-between px-3 sm:px-4 border-b py-2 sm:py-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-gray-200">
              {/* <ArrowDownIcon className="h-5 w-5 sm:h-[14px] sm:w-[14px]" /> */}
              <img
                src={window.location.origin + '/assets/Dashboard/transactions/down arrow icon.svg'}
                className="h-4 w-4 sm:h-[12px] sm:w-[12px]"
                alt="Avatar"
              />
            </div>
            <div className="text-start">
              <p className="font-medium text-[#0C111D] text-sm  sm:text-xl font-Inter">
                Phoenix Baker
              </p>
              <p className="text-xs text-[#667085] font-normal text-start sm:text-sm">
                15 Oct 2024
              </p>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-xl font-medium text-[#0C111D] font-Inter">
              + $3,384 USD
            </p>
          </div>
        </div>
        {/* Sixth Transaction */}
        <div className="flex flex-wrap justify-between px-3 sm:px-4 border-b py-2 sm:py-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-gray-200">
              {/* <ArrowDownIcon className="h-5 w-5 sm:h-[14px] sm:w-[14px]" /> */}
              <img
                src={window.location.origin + '/assets/Dashboard/transactions/down arrow icon.svg'}
                className="h-4 w-4 sm:h-[12px] sm:w-[12px]"
                alt="Avatar"
              />
            </div>
            <div className="text-start">
              <p className="font-medium text-[#0C111D] text-sm  sm:text-xl font-Inter">
                Phoenix Baker
              </p>
              <p className="text-xs text-[#667085] font-normal text-start sm:text-sm">
                15 Oct 2024
              </p>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-xl font-medium text-[#0C111D] font-Inter">
              + $3,384 USD
            </p>
          </div>
        </div>
        {/* Seventh Transaction */}
        <div className="flex flex-wrap justify-between px-3 sm:px-4 border-b py-2 sm:py-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-gray-200">
              {/* <ArrowDownIcon className="h-5 w-5 sm:h-[14px] sm:w-[14px]" /> */}
              <img
                src={window.location.origin + '/assets/Dashboard/transactions/down arrow icon.svg'}
                className="h-4 w-4 sm:h-[12px] sm:w-[12px]"
                alt="Avatar"
              />
            </div>
            <div className="text-start">
              <p className="font-medium text-[#0C111D] text-sm  sm:text-xl font-Inter">
                Phoenix Baker
              </p>
              <p className="text-xs text-[#667085] font-normal text-start sm:text-sm">
                15 Oct 2024
              </p>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-xl font-medium text-[#0C111D] font-Inter">
              + $3,384 USD
            </p>
          </div>
        </div>
        {/* Eighth Transaction */}
        <div className="flex flex-wrap justify-between px-3 sm:px-4 border-b py-2 sm:py-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-gray-200">
              {/* <ArrowDownIcon className="h-5 w-5 sm:h-[14px] sm:w-[14px]" /> */}
              <img
                src={window.location.origin + '/assets/Dashboard/transactions/down arrow icon.svg'}
                className="h-4 w-4 sm:h-[12px] sm:w-[12px]"
                alt="Avatar"
              />
            </div>
            <div className="text-start">
              <p className="font-medium text-[#0C111D] text-sm  sm:text-xl font-Inter">
                Phoenix Baker
              </p>
              <p className="text-xs text-[#667085] font-normal text-start sm:text-sm">
                15 Oct 2024
              </p>
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm sm:text-xl font-medium text-[#0C111D] font-Inter">
              + $3,384 USD
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

