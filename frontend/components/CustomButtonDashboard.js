import Link from 'next/link'
import React from 'react'
import { signOut } from "next-auth/react"

export const CustomButtonDashboard = ({ title, children, path }) => {
    return (
        <li onClick={() => {
            if (title == "Log out") {
                signOut({
                    callbackUrl: "/AuthPage/login",
                })
            }
        }} className="mb-2 rounded hover:shadow hover:bg-gray-800">
            <Link href={path || ''} >
                {title == "Log out" ?
                    <a className="inline-block w-full h-full px-3 py-2 font-bold text-red-600">
                        {children}
                        {title}
                    </a> :
                    <a className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                        {children}
                        {title}
                    </a>
                }
            </Link>
        </li>
    )
}
