import Image from 'next/image'
import React from 'react'

export const ImageWithName = ({ data }) => {
    return (
        <div className='   mb-10  flex  justify-center'>
            <div className='flex flex-col w-[300px]    text-white'>
                <Image
                    loader={() => `${data?.image}`}
                    className='h-full w-full rounded-xl	'
                    src="example.png"
                    alt="Picture of the author"
                    width={60}
                    height={160}
                />
                <div className='flex flex-col justify-around   '>
                    <div className='text-center text-xl font-semibold'>{data?.name} </div>
                </div>
            </div>
        </div>
    )
}
