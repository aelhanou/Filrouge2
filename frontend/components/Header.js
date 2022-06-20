import React from 'react'
import { CustomButton } from './CustomButton'
import { HTML, CSS, JS, REACTJS, PYTHON, JAVA, NODEJS, GOLANG, OTHERS, TYPESCRIPT, CSHARP } from './Icons'

export const Header = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[80%] py-20 px-4 ml-10 flex flex-col  justify-end gap-6 text-white'>
                <div className='flex flex-col gap-3'>
                    <div className='text-4xl font-bold'>
                        Learn It! - Developer courses
                    </div>
                    <div className='w-[35%] opacity-90'>
                        Tutorials for front and back end developers. Take the knowledge of your profile from us, because we are fucking best. Seriously.
                    </div>
                </div>
                <div className='flex gap-2 w-full flex-wrap'>
                    <CustomButton>
                        <div className='flex gap-2 p-2 bg-[#392e5c] rounded-xl'>
                            <HTML />
                            <button className='' >HTML</button>
                        </div>
                    </CustomButton>
                    <CustomButton>
                        <div className='flex gap-2 p-2 bg-[#392e5c] rounded-xl'>
                            <CSS />
                            <button className='' >CSS</button>
                        </div>
                    </CustomButton>
                    <CustomButton>

                        <div className='flex gap-2 p-2 bg-[#392e5c] rounded-xl'>
                            <JS />
                            <button className='' >JAVASCRIPT</button>
                        </div>
                    </CustomButton>
                    <CustomButton>

                        <div className='flex gap-2 p-2 bg-[#392e5c] rounded-xl'>
                            <REACTJS />
                            <button className='' >REACTJS</button>
                        </div>
                    </CustomButton>
                    <CustomButton>

                        <div className='flex gap-2 p-2 bg-[#392e5c] rounded-xl'>
                            <PYTHON />
                            <button className='' >PYTHON</button>
                        </div>
                    </CustomButton>
                    <CustomButton>

                        <div className='flex gap-2 p-2 bg-[#392e5c] rounded-xl'>
                            <JAVA />
                            <button className='' >JAVA</button>
                        </div>
                    </CustomButton>
                    <CustomButton>

                        <div className='flex gap-2 p-2 bg-[#392e5c] rounded-xl'>
                            <NODEJS />
                            <button className='' >NODEJS</button>
                        </div>
                    </CustomButton>

                    <CustomButton>

                        <div className='flex gap-2 p-2 bg-[#392e5c] rounded-xl'>
                            <GOLANG />
                            <button className='' >Golang (Google Go)</button>
                        </div>
                    </CustomButton>
                    <CustomButton>

                        <div className='flex gap-2 p-2 bg-[#392e5c] rounded-xl'>
                            <OTHERS />
                            <button className='' >Others</button>
                        </div>
                    </CustomButton>
                    <CustomButton>

                        <div className='flex gap-2 p-2 bg-[#392e5c] rounded-xl'>
                            <TYPESCRIPT />
                            <button className='' >TYPESCRIPT</button>
                        </div>
                    </CustomButton>
                    <CustomButton>
                        <div className='flex gap-2 p-2 bg-[#392e5c] rounded-xl'>
                            <CSHARP />
                            <button className='' >C Sharp (C#)</button>
                        </div>
                    </CustomButton>
                    <CustomButton>
                        <div className='flex gap-2 p-2 bg-[#392e5c] rounded-xl'>
                            <CSHARP />
                            <button className='' >C Sharp (C#)</button>
                        </div>
                    </CustomButton>
                    <CustomButton>
                        <div className='flex gap-2 p-2 bg-[#392e5c] rounded-xl'>
                            <CSHARP />
                            <button className='' >C Sharp (C#)</button>
                        </div>
                    </CustomButton>

                </div>
                <div className='w-[180px] rounded-xl flex justify-center items-center font-bold px-6 py-3 bg-[#944fff]'>
                    <button className='' >All Categories</button>
                </div>
            </div>
        </div>

    )
}
