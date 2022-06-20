import React from 'react'
import { CourseHunter } from './CourseHunter'

export const Footer = () => {
    return (
        <>
            <div className='w-full mt-16  py-8      flex  justify-center  text-white bg-[#392e5c] '>
                <div className='flex  w-[80%] sm-w-full    gap-1 flex-wrap justify-between  h-full  ml-12  '>
                    <div className='      lg:h-[20vh]   gap-4   py-8   flex flex-col     lg:w-[300px] lg:items-start sm-w-[100%] items-center      '>
                        <CourseHunter />
                        <div>A resource for learning programming for front-end and back-end developers.</div>
                    </div>
                    <div className='  flex py-8  h-[80%]  lg:w-[500px] flex-wrap lg:justify-around sm-w-[100%] w-[100%]  justify-center gap-6 '>
                        <div className='flex  flex-col gap-4 items-center  lg:w-[150px] lg:shadow-none sm:shadow-lg sm:w-[30%] w-[100%] '>
                            <div className='w-[full] text-2xl'>CATEGORIES</div>
                            <div className='w-full flex flex-col gap-1 items-center font-light  '>
                                <div>All categories</div>
                                <div>HTML</div>
                                <div>JavaScript</div>
                                <div>React.js</div>
                                <div>Python</div>
                                <div>Java</div>
                                <div>Node.js</div>
                                <div>Golang (Google Go)</div>
                                <div>Gitlab</div>
                                <div>Others</div>
                                <div>TypeScript</div>
                            </div>
                        </div>

                        <div className='flex  flex-col gap-4 items-center  lg:w-[150px] lg:shadow-none sm:shadow-lg sm:w-[30%] w-[100%] '>
                            <div className='text-2xl'>CHANNELS</div>
                            <div className='w-full flex flex-col gap-1 items-center font-light  '>
                                <div>All channels</div>
                                <div>frontendmasters</div>
                                <div>itgid (Alexander Luschenko)</div>
                                <div>itvdn</div>
                                <div>OTUS</div>
                                <div>softwaretesting</div>
                                <div>udemy</div>
                                <div>videosmile</div>
                                <div>webformyself</div>
                                <div>Eliseev</div>
                                <div>Ijunior.ru</div>
                            </div>
                        </div>

                        <div className='flex  flex-col gap-4 items-center  lg:w-[150px] lg:shadow-none sm:shadow-lg sm:w-[30%] w-[100%] '>
                            <div className='text-2xl'>Telegram</div>
                            <div className='w-full flex flex-col gap-1 items-center font-light  '>
                                <div>Forum</div>
                                <div>Pricing</div>
                                <div>Contacts</div>
                                <div>Road map</div>
                                <div>FAQ</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex  flex-col items-end py-8  gap-8  w-[30%]'>
                        <div className='flex flex-col gap-4   w-[76%]       '>
                            <div>THEMS:</div>
                            <div className='flex  justify-between '>
                                <button className='px-14 rounded py-3 border-[1px] border-white'>Light</button>
                                <button className='px-14 rounded py-3 border-[1px] bg-[#a06ffb] border-white' >Dark</button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4  w-[76%]   '>
                            <div>LANGUAGE:</div>
                            <div className='flex  justify-between '>
                                <div className='flex gap-1 rounded px-8 bg-[#a06ffb] py-3 border-[1px] border-white'>
                                    <div>🇺🇸</div>
                                    <button >ENGLISH</button>
                                </div>
                                <div className='flex gap-1 rounded px-8 py-3 border-[1px] border-white'>
                                    <div>🇷🇺</div>
                                    <button >Русский</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
