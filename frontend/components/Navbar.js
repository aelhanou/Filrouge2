import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { CourseHunter } from './CourseHunter'
import { Button } from "@mui/material";
import { ARROW, ARROWLEFT } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../store/categories";
import { signOut } from "next-auth/react"
import { useRouter } from "next/router";
import Link from "next/link";

export const Navbar = ({ session }) => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);
    const [catigory, setCatigory] = useState(false);
    const [getCategoty, setGetCategoty] = useState(false);
    const [nestedCategory, setNestedCategory] = useState([]);
    const [height, setHeight] = useState('top-[64px]');
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();
    const state = useSelector(state => state.category)

    useEffect(() => {
        dispatch(categories())
    }, [])

    useEffect(() => {
        if (state.categories) {
            setGetCategoty(state.categories)
        }
        console.log(state.categories);
    }, [state])


    const onhandleClick = (e) => {
        setNestedCategory(e?.techId)
        let elem = document.querySelector('#yo-' + e?._id);
        let rect = elem.getBoundingClientRect();
        let top = '' + (rect.top - 60);
        let lastop = top.split('.')[0]
        setHeight(`top-[${lastop}px]`);
    }



    return (
        <div onClick={() => setCatigory(false)}
        >
            <nav className="bg-[#201c2b]">
                <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <CourseHunter />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setCatigory(true)
                                        }}
                                        href="#"
                                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Categories
                                    </a>
                                    {catigory && <div onClick={(e) => {
                                        e.stopPropagation()
                                        setCatigory(true)

                                    }}
                                        className="w-64 bg-white rounded z-50 text-black absolute top-14">
                                        <div className="flex p-2  flex-col gap-3">
                                            {getCategoty && getCategoty.map(e => (
                                                <>
                                                    <div onClick={(f) => {
                                                        f.stopPropagation()
                                                        onhandleClick(e)
                                                    }} id={'yo-' + e?._id} className="py-1 flex w-full justify-between items-center">
                                                        <Button className="pl-3 font-medium text-sm">{e?.name}</Button>
                                                        <div className="pr-3">
                                                            <ARROWLEFT />
                                                        </div>
                                                    </div>
                                                    <div className={`w-64 bg-white rounded z-50 text-black absolute left-[250px] ${height} `}>{nestedCategory.map(r => (
                                                        <div className="flex w-full justify-center items-center">
                                                            <Button onClick={(f)=> {
                                                                f.stopPropagation
                                                                router.push(`/category/${r?.name}/${r?._id}`)
                                                            }} className="pl-3 font-medium text-sm">{r?.name}</Button>
                                                        </div>
                                                    ))


                                                    }
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </div>}

                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Team
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Projects
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Calendar
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Reports
                                    </a>
                                </div>
                            </div>

                        </div>
                        {/* Profile with log out */}
                        <div onClick={() => setToggle(!toggle)} className="">
                            <div className="flex flex-col items-center space-x-4">
                                <div className="flex-shrink-0">
                                    {session?.user?.user?.image ? <img
                                        className="h-10 w-10 rounded-full"
                                        src={session?.user?.user?.image}
                                        alt="User"
                                    />
                                        :
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="User"
                                        />
                                    }
                                </div>

                            </div>
                        </div>
                        {toggle && (
                            <div className="absolute top-16 flex right-28 w-40 flex-col p-3   bg-white  md:block">
                                <div className="hidden  md:block">
                                    <div className="flex flex-col gap-2 ml-4">
                                        <Link
                                            href="/dashboard/profile"
                                            className="text-gray-500  cursor-pointer hover:text-gray-900 font-medium"
                                        >
                                            <span className="text-sm flex gap-2">
                                                <div>{session?.user?.user?.fname.toUpperCase()}</div>
                                                <div>{session?.user?.user?.lname.toUpperCase()}</div>
                                            </span>
                                        </Link>
                                        <Link
                                            href="/dashboard"
                                            className="text-gray-500  cursor-pointer hover:text-gray-900 font-medium"
                                        >
                                            <span className="text-sm">
                                                Dashboard
                                            </span>
                                        </Link>
                                        <Link
                                            href="/dashboard/profile"

                                            className="mt-1">
                                            <div
                                                className="text-gray-500 cursor-pointer hover:text-gray-900 font-medium"
                                            >
                                                <span className="text-sm">
                                                    View profile
                                                </span>
                                            </div>
                                        </Link>
                                        <div onClick={() => {
                                            signOut({
                                                callbackUrl: '/AuthPage/login'
                                            })

                                        }} className="mt-1">
                                            <div
                                                className="text-red-800 cursor-pointer hover:text-gray-900 font-medium"
                                            >
                                                <span className="text-sm">
                                                    Sign Out
                                                </span>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        )}

                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a
                                    href="#"
                                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Dashboard
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Team
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Projects
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Calendar
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Reports
                                </a>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav >


        </div >
    );
}



