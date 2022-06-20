import Image from 'next/image'
import React from 'react'
import { INTERNETT, PENCIL, STAR } from './Icons'

export const CardBook = ({data}) => {
    return (
        <div className='w-full snap-center   flex p-2 justify-center'>
            <div className='flex flex-col w-[350px]  border-2 border-[#834dac]   text-white'>
                <Image
                    loader={() => `${data?.image}`}
                    className='h-full w-full aspect-video	'
                    src="example.png"
                    alt="Picture of the author"
                    width={160}
                    height={200}
                />
                <div className='flex flex-col justify-around h-[25vh] bg-[#392e5c] '>
                    <div className='text-center text-xl font-semibold'>{data?.name}</div>
                    <div className='flex flex-col gap-3 items-center'>
                        <div className='flex w-full gap-2 justify-center '>
                            <div className='w-[80%]  flex gap-2'>
                                <div>
                                    <PENCIL />
                                </div>
                                <div>Swizec Teller</div>
                            </div>
                        </div>
                        <div className='flex w-full gap-2 justify-center'>
                            <div className='w-[80%]  flex gap-2'>
                                <div>
                                    <INTERNETT color="white" />
                                </div>
                                <div>{data?.language}</div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex   justify-around'>
                        <div className='flex flex-col gap-1'>
                            <div className='flex '>
                                <STAR />
                                <STAR />
                                <STAR />
                                <STAR />
                                <STAR />
                            </div>
                            <div>+13/-0</div>

                        </div>
                        <div className='px-6  flex justify-center items-center rounded bg-[#a06ffb]'>
                            <button className='py-1 '>View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
