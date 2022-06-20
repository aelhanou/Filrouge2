import React from 'react'

export const DrapDown = () => {
    return (
        <>
            {/* <div className="w-full bg-white  shadow-lg lg:w-[15vw]"> */}
            <ul className="lg:w-[15vw] text-white bg-red-400 ">
                <li className="">
                    Frontend
                    <ul className="">
                        <li className="">
                            1
                        </li>
                        <li className="">
                            2
                        </li>
                        <li className="">
                            3
                        </li>
                    </ul>
                </li>
                <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
                    Backend
                </li>
                <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
                    DevOps
                </li>
                <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
                    Information Security
                </li>
            </ul>
            {/* </div> */}
        </>
    )
}
