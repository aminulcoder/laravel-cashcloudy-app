import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";
import { CreditCardIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import Tooltip from "@/Components/Tooltip/Tooltip";
import { Button } from "@headlessui/react";
// import { IoClose } from "react-icons/io5";
import classNames from "classnames";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/20/solid";

// import { NavLink } from "react-router-dom";
export default function Dashboard() {
    const [showModal, setshowModal] = useState(false);
    const [showendModal, setshowendModal] = useState(false);

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

                                <div className="flex items-center space-x-2">
                                    {/* <ChartBarIcon className="h-4 w-4 text-gray-400" /> */}
                                    <img
                                        src={
                                            window.location.origin +
                                            "/assets/Dashboard/balancecard/bar-chart-04.svg"
                                        }
                                        className="h-4 w-4"
                                        alt="Avatar"
                                    />
                                    <span className="text-xs sm:text-sm font-Inter  text-[#0C111D]  font-semibold">
                                        450,420.00 BDT
                                    </span>
                                    <p className="text-sm font-normal font-Inter text-[#667085]">
                                        (1 USD = 119.50 BDT)
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
