import React from 'react'

export const Lesson = ({ id, lesson, time, title, setCurrentVideo,video }) => {
    
    return (
        <div key={id} onClick={()=> {
            setCurrentVideo(video)
            console.log(video);
        }} className='bg-[#201c2b] py-4 px-3 border-b-2  flex flex-col gap-2  '>
            <div className='flex justify-between   gap-'>
                <div className='opacity-80 text-sm'>{lesson}</div>
                <div className='text-sm'>{time}</div>
            </div>
            <div className='text-sm font-bold'>{title}</div>
        </div>
    )
}
