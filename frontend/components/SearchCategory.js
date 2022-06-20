import Link from 'next/link'
import React from 'react'
import { ARROW } from './Icons'
import { Search } from './Search'

export const SearchCategory = () => {
    return (
        <div className='w-full    h-[50vh] flex  justify-center  text-white bg-[#392e5c] '>
            <div className='flex flex-col     w-[80%] px-10 gap-1  justify-around  h-full items-center  '>
                <div className='w-full flex justify-start'>
                    <div className='flex gap-2'>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <ARROW />
                        <div>List of Categories</div>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-4 items-center'>
                    <div className='text-4xl font-bold'>List of Categories</div>
                    <div className='text-2xl w-[50%] opacity-80 text-center'>CH is constantly working to replenish courses in existing categories and to organize new ones!</div>
                </div>
                <Search />
            </div>
        </div>
    )
}
