import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Layout = ({session,children}) => {
    return (
        <div className="w-full min-h-screen h-full  overflow-hidden   bg-[#201c2b]">
            {/* Navbar */}
            <Navbar session={session} />
            {/* For Ukraine */}
            <div className='w-full py-5 px-8 text-white flex h- justify-center items-center gap-1  bg-gradient-to-r from-[#761a85] '>
                <div className="w-[80%] " >
                    📌 It is unfortunate that a well-known character decided to start a war. We pray for Ukraine and for peace!
                </div>
            </div>

            <div className=' mb-10'>
            {children}
            </div>

            <Footer />

        </div>
    )
}
