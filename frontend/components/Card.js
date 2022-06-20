import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BOOK, HEURE, INTERNET, STAR, VIDEO } from './Icons'
import Skeleton from 'react-loading-skeleton'
// const myLoader = ({ src, width, quality }) => {
//     return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }



export const Card = ({ data }) => {
    const router = useRouter()
    const gotoCoursePage = () => {
        router.push(`/courses/${data?._id}`)
    }

   


    return (
        <div className='w-full flex  justify-center'>
            <div className='flex  ml-2 w-[80%]  border-2 border-[#834dac]   text-white'>
                {/* <div className=' bg-white  '> */}
                <Image
                    loader={() => `${data?.image}`}
                    className='h-full w-full 	'
                    src="example.png"
                    alt="Picture of the author"
                    width={530}
                    height={350}
                />
                {/* </div> */}
                <div className='bg-[#392e5c] flex flex-col   w-full '>
                    <div className='px-10 flex  py-6 justify-between'>
                        <div className='text-2xl font-bold'>{data?.name}</div>
                        <div className='flex gap-1'>
                            <div>+13/-0</div>
                            <STAR />
                            <STAR />
                            <STAR />
                            <STAR />
                            <STAR />
                        </div>
                    </div>
                    <div className='flex flex-col justify-around h-[200px]   px-10'>
                        <div className='w-[90%] overflow-hidden  '>
                            {data?.description}
                        </div>
                        <div className='flex py-6 justify-between  '>
                            <div className='w-full'>
                                <div className='flex w-[70%]  py-3  justify-between  '>
                                    <div className='flex  gap-2'>
                                        <HEURE />
                                        <div>10:12:39</div>
                                    </div>
                                    <div className='flex  gap-2'>
                                        <VIDEO />
                                        <div>{data?.lessonNumber} lessons</div>
                                    </div>
                                    <div className='flex  gap-2'>
                                        <INTERNET color="#4F4F4F" />
                                        <div>{data?.language}</div>
                                    </div>
                                    <div className='flex  gap-2'>
                                        <BOOK />
                                        <div>Techworld with Nana</div>
                                    </div>
                                </div>

                            </div>
                            <div className='px-14 py-3 rounded bg-[#a06ffb]'>
                                <button onClick={() => gotoCoursePage()} >View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
