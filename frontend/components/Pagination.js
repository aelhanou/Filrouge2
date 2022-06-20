/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

export const Pagination = () => {
    return (
        <div className="bg-[#392e5c] mt-6    rounded-xl px-4 py-3  items-center flex  justify-between  border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-white bg-[#392e5c] hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-white     bg-white hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className=" sm:flex-1 flex gap-4    sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-white">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                        <span className="font-medium">97</span> results
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <a
                            href="#"
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border-2     bg-[#392e5c] text-sm font-medium text-white hover:bg-gray-50 hover:text-black"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                        <a
                            href="#"
                            aria-current="page"
                            className="z-10 bg-[#392e5c]  hover:bg-gray-50 hover:text-black  text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            1
                        </a>
                        <a
                            href="#"
                            className="bg-[#392e5c] text-white hover:bg-gray-50 hover:text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            2
                        </a>
                        <a
                            href="#"
                            className="bg-[#392e5c] text-white hover:bg-gray-50 hover:text-black hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                        >
                            3
                        </a>
                        <span className="relative inline-flex items-center px-4 py-2 border  bg-[#392e5c] text-sm font-medium text-white">
                            ...
                        </span>
                        <a
                            href="#"
                            className="bg-[#392e5c] text-white hover:bg-gray-50 hover:text-black hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                        >
                            8
                        </a>
                        <a
                            href="#"
                            className="bg-[#392e5c] text-white hover:bg-gray-50 hover:text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            9
                        </a>
                        <a
                            href="#"
                            className="bg-[#392e5c] text-white hover:bg-gray-50 hover:text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            10
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border  bg-[#392e5c] text-sm font-medium text-white hover:bg-gray-50 hover:text-black"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
