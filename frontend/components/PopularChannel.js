import React from 'react'
import { Title } from './Title'
import { TitleComponent } from './TitleComponent'
import fronendMaster from "../public/images/frontendmasters.jpg"
import itgid from "../public/images/itgid-aleksandr-lushchenko.webp"
import itvdn from "../public/images/itvdn.webp"
import otus from "../public/images/otus.webp"
import softwaretesting from "../public/images/softwaretesting.webp"
import udemy from "../public/images/udemy.webp"
import videosmile from "../public/images/videosmile.webp"
import webformyself from "../public/images/webformyself.webp"
import Eliseev from "../public/images/eliseev.webp"
import Ijunior from "../public/images/yayunior-ijunior-ru.webp"




import Image from 'next/image'

export const PopularChannel = () => {
    return (
        <div className='w-full mt-16 mb-16   py-6  justify-center  text-white bg-[#392e5c] '>
            <div className='flex flex-col  gap-3 justify-around h-full items-center  '>
                <div className='w-full mt-6 mb-2 text-center text-3xl text-white font-semibold'>Popular channels</div>
                <div className=' py-12  flex justify-center w-full text-black'>
                    <div className='flex flex-wrap justify-center  text-white gap-2 w-[80%] '>
                        <div className='px-6 rounded-xl py-4 bg-[#201c2b] flex justify-center items-center gap-4' >
                            <Image
                                className='h-full w-full rounded 	'
                                src={fronendMaster}
                                alt="Picture of the author"
                                width={35}
                                height={40}
                            />
                            <div>frontendmasters</div>
                        </div>
                        <div className='px-6 rounded-xl py-4 bg-[#201c2b] flex justify-center items-center gap-4' >
                            <Image
                                className='h-full w-full rounded 	'
                                src={itgid}
                                alt="Picture of the author"
                                width={35}
                                height={40}
                            />
                            <div>itgid (Alexander Luschenko)</div>
                        </div>
                        <div className='px-6 rounded-xl py-4 bg-[#201c2b] flex justify-center items-center gap-4' >
                            <Image
                                className='h-full w-full rounded 	'
                                src={itvdn}
                                alt="Picture of the author"
                                width={35}
                                height={40}
                            />
                            <div>itdvn</div>
                        </div>
                        <div className='px-6 rounded-xl py-4 bg-[#201c2b] flex justify-center items-center gap-4' >
                            <Image
                                className='h-full w-full rounded 	'
                                src={otus}
                                alt="Picture of the author"
                                width={35}
                                height={40}
                            />
                            <div>OTUS</div>
                        </div>
                        <div className='px-6 rounded-xl py-4 bg-[#201c2b] flex justify-center items-center gap-4' >
                            <Image
                                className='h-full w-full rounded 	'
                                src={softwaretesting}
                                alt="Picture of the author"
                                width={35}
                                height={40}
                            />
                            <div>SOFTWARETESTING</div>
                        </div>
                        <div className='px-6 rounded-xl py-4 bg-[#201c2b] flex justify-center items-center gap-4' >
                            <Image
                                className='h-full w-full rounded 	'
                                src={udemy}
                                alt="Picture of the author"
                                width={35}
                                height={40}
                            />
                            <div>UDEMY</div>
                        </div>
                        <div className='px-6 rounded-xl py-4 bg-[#201c2b] flex justify-center items-center gap-4' >
                            <Image
                                className='h-full w-full rounded 	'
                                src={videosmile}
                                alt="Picture of the author"
                                width={35}
                                height={40}
                            />
                            <div>VIDEOSMILE</div>
                        </div>
                        <div className='px-6 rounded-xl py-4 bg-[#201c2b] flex justify-center items-center gap-4' >
                            <Image
                                className='h-full w-full rounded 	'
                                src={webformyself}
                                alt="Picture of the author"
                                width={35}
                                height={40}
                            />
                            <div>WEBFORMYSELF</div>
                        </div>
                        <div className='px-6 rounded-xl py-4 bg-[#201c2b] flex justify-center items-center gap-4' >
                            <Image
                                className='h-full w-full rounded 	'
                                src={Eliseev}
                                alt="Picture of the author"
                                width={35}
                                height={40}
                            />
                            <div>ELISEEV</div>
                        </div>
                        <div className='px-6 rounded-xl py-4 bg-[#201c2b] flex justify-center items-center gap-4' >
                            <Image
                                className='h-full w-full rounded 	'
                                src={Ijunior}
                                alt="Picture of the author"
                                width={35}
                                height={40}
                            />
                            <div>IJUNIOR</div>
                        </div>
                    </div>
                </div>

                <div className='w-full   mt-2 flex justify-center text-2xl text-white font-semibold'>
                    <div className='w-[350px] py-3 text-center rounded bg-[#a06ffb]'>
                        <button className='  '>All Channels</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
