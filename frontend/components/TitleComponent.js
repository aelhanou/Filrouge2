import React from 'react'

export const TitleComponent = ({ title }) => {
    return (
        <div className='w-full mb-6  mt-6 flex justify-center text-2xl text-white font-semibold'>
            <div className='w-[350px] py-3 text-center rounded bg-[#a06ffb]'>
                <button className='  '>{title}</button>
            </div>
        </div>
    )
}
