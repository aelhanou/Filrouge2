import Image from 'next/image'
import React from 'react'
import { EYE } from './Icons'

export const TechInfo = ({image,description}) => {
    return (
        <div className='w-full flex      border-[0.1px]   border-white justify-center py-10 mt-10 bg-[#201c2b]'>
            <div className='flex  gap-10 w-[90%] '>
                <div>

                    <Image
                        loader={() => `${image}`}
                        className='rounded-xl h-full w-full 	'
                        src="example.png"
                        alt="Picture of the author"
                        width={300}
                        height={200}
                    />
                </div>
                <div className='flex w-[100%]  flex-col gap-5 text-white font-light'>
                    <div>
                       {description}
                    </div>
                    <div className='flex gap-1 ml-6 outline-none rounded w-[13vh] py-2 justify-center bg-[#a06ffb]  '>
                        <EYE />
                        <button >Track</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
