import React, { useState } from 'react'
import { CustomButtonDashboard } from './CustomButtonDashboard'

export const DashboardLayout = ({ children }) => {
    const [toggle, setTogle] = useState(false)
    return (
        <div className="flex h-screen overflow-x-hidden">
            <div className="px-4 py-2  bg-[#392e5c] lg:w-1/4">
                <svg onClick={() => setTogle(!toggle)} xmlns="http://www.w3.org/2000/svg" className="inline w-8 h-8 text-white lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <div className={toggle ? "block lg:block" : "hidden lg:block"}>
                    <div className="my-2 mb-6">
                        <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                    </div>
                    <ul>
                        <li className="mb-6">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="submit" className="p-1 focus:outline-none">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-4 h-4">
                                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </button>
                                </span>
                                <input type="search" name="search" className="w-full px-4 py-2 pl-12 rounded shadow outline-none" placeholder="Search..." />
                            </div></li>
                        <CustomButtonDashboard title="Dashboard" path="/dashboard" >
                          

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                className="inline-block w-5 h-5 mr-2 -mt-2"
                                viewBox="0 0 256 256"
                                xmlSpace="preserve"
                            >
                                <desc>Created with Fabric.js 1.7.22</desc>
                                <defs></defs>
                                <g transform="translate(128 128) scale(0.72 0.72)" style={{}}>
                                    <g
                                        style={{
                                            stroke: "none",
                                            strokeWidth: 0,
                                            strokeDasharray: "none",
                                            strokeLinecap: "butt",
                                            strokeLinejoin: "miter",
                                            strokeMiterlimit: 10,
                                            fill: "none",
                                            fillRule: "nonzero",
                                            opacity: 1
                                        }}
                                        transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
                                    >
                                        <path
                                            d="M 34.052 41.639 H 7.587 C 3.403 41.639 0 38.235 0 34.052 V 7.587 C 0 3.403 3.403 0 7.587 0 h 26.465 c 4.184 0 7.587 3.403 7.587 7.587 v 26.465 C 41.639 38.235 38.235 41.639 34.052 41.639 z M 7.587 4 C 5.609 4 4 5.609 4 7.587 v 26.465 c 0 1.978 1.609 3.587 3.587 3.587 h 26.465 c 1.978 0 3.587 -1.609 3.587 -3.587 V 7.587 C 37.639 5.609 36.03 4 34.052 4 H 7.587 z"
                                            style={{
                                                stroke: "none",
                                                strokeWidth: 1,
                                                strokeDasharray: "none",
                                                strokeLinecap: "butt",
                                                strokeLinejoin: "miter",
                                                strokeMiterlimit: 10,
                                                fill: "white",
                                                fillRule: "nonzero",
                                                opacity: 1
                                            }}
                                            transform=" matrix(1 0 0 1 0 0) "
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M 82.413 41.639 H 55.948 c -4.184 0 -7.587 -3.404 -7.587 -7.587 V 7.587 C 48.361 3.403 51.765 0 55.948 0 h 26.465 C 86.597 0 90 3.403 90 7.587 v 26.465 C 90 38.235 86.597 41.639 82.413 41.639 z M 55.948 4 c -1.978 0 -3.587 1.609 -3.587 3.587 v 26.465 c 0 1.978 1.609 3.587 3.587 3.587 h 26.465 c 1.978 0 3.587 -1.609 3.587 -3.587 V 7.587 C 86 5.609 84.391 4 82.413 4 H 55.948 z"
                                            style={{
                                                stroke: "none",
                                                strokeWidth: 1,
                                                strokeDasharray: "none",
                                                strokeLinecap: "butt",
                                                strokeLinejoin: "miter",
                                                strokeMiterlimit: 10,
                                                fill: "white",
                                                fillRule: "nonzero",
                                                opacity: 1
                                            }}
                                            transform=" matrix(1 0 0 1 0 0) "
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M 34.052 90 H 7.587 C 3.403 90 0 86.597 0 82.413 V 55.948 c 0 -4.184 3.403 -7.587 7.587 -7.587 h 26.465 c 4.184 0 7.587 3.403 7.587 7.587 v 26.465 C 41.639 86.597 38.235 90 34.052 90 z M 7.587 52.361 C 5.609 52.361 4 53.971 4 55.948 v 26.465 C 4 84.391 5.609 86 7.587 86 h 26.465 c 1.978 0 3.587 -1.609 3.587 -3.587 V 55.948 c 0 -1.978 -1.609 -3.587 -3.587 -3.587 H 7.587 z"
                                            style={{
                                                stroke: "none",
                                                strokeWidth: 1,
                                                strokeDasharray: "none",
                                                strokeLinecap: "butt",
                                                strokeLinejoin: "miter",
                                                strokeMiterlimit: 10,
                                                fill: "white",
                                                fillRule: "nonzero",
                                                opacity: 1
                                            }}
                                            transform=" matrix(1 0 0 1 0 0) "
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M 82.413 90 H 55.948 c -4.184 0 -7.587 -3.403 -7.587 -7.587 V 55.948 c 0 -4.184 3.403 -7.587 7.587 -7.587 h 26.465 c 4.184 0 7.587 3.403 7.587 7.587 v 26.465 C 90 86.597 86.597 90 82.413 90 z M 55.948 52.361 c -1.978 0 -3.587 1.609 -3.587 3.587 v 26.465 c 0 1.978 1.609 3.587 3.587 3.587 h 26.465 C 84.391 86 86 84.391 86 82.413 V 55.948 c 0 -1.978 -1.609 -3.587 -3.587 -3.587 H 55.948 z"
                                            style={{
                                                stroke: "none",
                                                strokeWidth: 1,
                                                strokeDasharray: "none",
                                                strokeLinecap: "butt",
                                                strokeLinejoin: "miter",
                                                strokeMiterlimit: 10,
                                                fill: "white",
                                                fillRule: "nonzero",
                                                opacity: 1
                                            }}
                                            transform=" matrix(1 0 0 1 0 0) "
                                            strokeLinecap="round"
                                        />
                                    </g>
                                </g>
                            </svg>

                        </CustomButtonDashboard>
                        <CustomButtonDashboard title="Profile" path="/dashboard/profile" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                            </svg>
                        </CustomButtonDashboard>


                        <CustomButtonDashboard title="Add" path="/dashboard/add" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </CustomButtonDashboard>
                        <CustomButtonDashboard title="Inbox" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </CustomButtonDashboard>
                        <CustomButtonDashboard title="Go Back to Home" path="/" >

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-block w-6 h-6 mr-2 -mt-2" fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                        </CustomButtonDashboard>
                        <CustomButtonDashboard title="Log out" >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-block h-6 w-6 mr-2 -mt-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="red"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                />
                            </svg>

                        </CustomButtonDashboard>
                    </ul>
                </div>

            </div>


            <div className="w-full px-4 py-2 bg-gray-200 lg:w-full">
                {children}

                {/*     <div className="container mx-auto mt-12">
                    <div className="grid gap-4 lg:grid-cols-3">
                        <div className="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
                            <div className="p-3 bg-indigo-600 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div className="mx-4">
                                <h4 className="text-2xl font-semibold text-gray-700">100</h4>
                                <div className="text-gray-500">All Users</div>
                            </div>
                        </div>
                        <div className="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
                            <div className="p-3 bg-indigo-600 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </div>
                            <div className="mx-4">
                                <h4 className="text-2xl font-semibold text-gray-700">30</h4>
                                <div className="text-gray-500">All Blogs</div>
                            </div>
                        </div>
                        <div className="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
                            <div className="p-3 bg-indigo-600 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="mx-4">
                                <h4 className="text-2xl font-semibold text-gray-700">1000</h4>
                                <div className="text-gray-500">All Transaction</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8">
                        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                Name</th>
                                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                Email</th>
                                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                Status</th>
                                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                Edit</th>
                                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img className="w-10 h-10 rounded-full" src="https://source.unsplash.com/user/erondu" alt="admin dashboard ui" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium leading-5 text-gray-900">
                                                            John Doe
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                                            </td>
                                            <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img className="w-10 h-10 rounded-full" src="https://source.unsplash.com/user/erondu" alt="admin dashboard ui" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium leading-5 text-gray-900">
                                                            John Doe
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                                            </td>
                                            <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img className="w-10 h-10 rounded-full" src="https://source.unsplash.com/user/erondu" alt="admin dashboard ui" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium leading-5 text-gray-900">
                                                            John Doe
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                                            </td>
                                            <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img className="w-10 h-10 rounded-full" src="https://source.unsplash.com/user/erondu" alt="admin dashboard ui" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium leading-5 text-gray-900">
                                                            John Doe
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                                            </td>
                                            <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img className="w-10 h-10 rounded-full" src="https://source.unsplash.com/user/erondu" alt="admin dashboard ui" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium leading-5 text-gray-900">
                                                            John Doe
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                                            </td>
                                            <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </td>
                                            <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>*/}
            </div>

        </div>
    )
}



