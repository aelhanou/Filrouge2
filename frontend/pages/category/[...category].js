import Link from 'next/link'
import React, { useEffect } from 'react'
import { ARROW, AscAndDesc, FILTER, HTML } from '../../components/Icons'
import { Layout } from '../../components/Layout'

import { useRouter } from 'next/router'
import { TechInfo } from '../../components/TechInfo'
import { ImageWithName } from '../../components/ImageWithName'
import { CustomButton } from '../../components/CustomButton'
import { Card } from '../../components/Card'
import { Pagination } from '../../components/Pagination'
import { useSession, getSession } from "next-auth/react"


export default function nestedCategory({ session, data }) {
    const router = useRouter()

    console.log(data);

    const {
        category = []
    } = router.query

    return (
        <Layout session={session}>
            <div className='w-full  h-full  flex  justify-center  text-white bg-[#392e5c] '>
                <div className='flex h-[20vh] flex-col w-[80%] px-10 gap-1  pb-6  justify-start   mt-6  '>
                    <div className='w-full flex justify-start'>
                        <div className='flex gap-2'>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                            <ARROW />
                            <Link href="/">
                                <a>Categories</a>
                            </Link>
                            <ARROW />
                            <div>{category.length > 0 && category[0]}</div>
                        </div>
                    </div>
                    {/* tech info */}

                </div>




            </div>
            <div className='w-full -mt-36 flex justify-center'>
                <div className=' flex ml-6   justify-center w-[78%] '>
                    <TechInfo image={data?.courseId[0]?.image} description={data?.courseId[0]?.description} />
                </div>
            </div>

            {/* popular courses */}
            <div className='w-full  flex justify-center'>
                <div className=' flex flex-col justify-center w-[80%] '>
                    <div className='mt-6 mb-9 ml-10 text-2xl font-bold text-white'>
                        Popular in react.js

                    </div>
                    <div className='w-full ml-2 flex justify-center '>
                        <div className='  w-[95%] flex gap-3 scrollbar snap-x scrollbar-thumb-purple-900 scrollbar-track-white'>

                            {data && data?.courseId?.map(e => (<ImageWithName data={e} />))}


                        </div>
                    </div>
                </div>
            </div>

            {/* Sources about react.js */}
            <div className='w-full  flex justify-center  mt-10 bg-[#201c2b] text-white  '>
                <div className='w-[80%] ml-20 h-full  flex flex-col'>
                    <div className='text-2xl font-bold '>Sources about react.js</div>
                    <div className='flex gap-2 mt-6 justify-center  flex-wrap w-full'>
                        <CustomButton>
                            <div className='flex gap-2 py-2 px-5  bg-[#392e5c] rounded-3xl'>
                                <HTML />
                                <button className='' >Acadimind Pro</button>
                            </div>
                        </CustomButton>
                        <CustomButton>
                            <div className='flex gap-2 py-2 px-5  bg-[#392e5c] rounded-3xl'>
                                <HTML />
                                <button className='' >Acadimind Pro</button>
                            </div>
                        </CustomButton>
                        <CustomButton>
                            <div className='flex gap-2 py-2 px-5  bg-[#392e5c] rounded-3xl'>
                                <HTML />
                                <button className='' >Acadimind Pro</button>
                            </div>
                        </CustomButton>
                        <CustomButton>
                            <div className='flex gap-2 py-2 px-5  bg-[#392e5c] rounded-3xl'>
                                <HTML />
                                <button className='' >Acadimind Pro</button>
                            </div>
                        </CustomButton>
                        <CustomButton>
                            <div className='flex gap-2 py-2 px-5  bg-[#392e5c] rounded-3xl'>
                                <HTML />
                                <button className='' >Acadimind Pro</button>
                            </div>
                        </CustomButton>
                        <CustomButton>
                            <div className='flex gap-2 py-2 px-5  bg-[#392e5c] rounded-3xl'>
                                <HTML />
                                <button className='' >Acadimind Pro</button>
                            </div>
                        </CustomButton>
                        <CustomButton>
                            <div className='flex gap-2 py-2 px-5  bg-[#392e5c] rounded-3xl'>
                                <HTML />
                                <button className='' >Acadimind Pro</button>
                            </div>
                        </CustomButton>
                        <CustomButton>
                            <div className='flex gap-2 py-2 px-5  bg-[#392e5c] rounded-3xl'>
                                <HTML />
                                <button className='' >Acadimind Pro</button>
                            </div>
                        </CustomButton>
                        <CustomButton>
                            <div className='flex gap-2 py-2 px-5  bg-[#392e5c] rounded-3xl'>
                                <HTML />
                                <button className='' >Acadimind Pro</button>
                            </div>
                        </CustomButton>
                        <CustomButton>
                            <div className='flex gap-2 py-2 px-5  bg-[#392e5c] rounded-3xl'>
                                <HTML />
                                <button className='' >Acadimind Pro</button>
                            </div>
                        </CustomButton>
                        <CustomButton>
                            <div className='flex gap-2 py-2 px-5  bg-[#392e5c] rounded-3xl'>
                                <HTML />
                                <button className='' >Acadimind Pro</button>
                            </div>
                        </CustomButton>
                        <CustomButton>
                            <div className='flex gap-2 py-2 px-5  bg-[#392e5c] rounded-3xl'>
                                <HTML />
                                <button className='' >Acadimind Pro</button>
                            </div>
                        </CustomButton>
                        <CustomButton>
                            <div className='flex gap-2 py-2 px-5  bg-[#392e5c] rounded-3xl'>
                                <HTML />
                                <button className='' >Acadimind Pro</button>
                            </div>
                        </CustomButton>
                        <CustomButton>
                            <div className='flex gap-2 py-2 px-5  bg-[#392e5c] rounded-3xl'>
                                <HTML />
                                <button className='' >Acadimind Pro</button>
                            </div>
                        </CustomButton>
                        <CustomButton>
                            <div className='flex gap-2 py-2 px-5  bg-[#392e5c] rounded-3xl'>
                                <HTML />
                                <button className='' >Acadimind Pro</button>
                            </div>
                        </CustomButton>


                    </div>
                </div>
            </div>

            {/* React.js in topics */}
            <div className='w-full  flex justify-center  mt-10 bg-[#201c2b] text-white  '>
                <div className='w-[80%] ml-20 h-full  flex flex-col'>
                    <div className='text-2xl font-bold '>React.js in topics </div>
                    <CustomButton>
                        <div className='w-[150px] flex gap-2 mt-2 py-2 px-5  bg-[#392e5c] rounded-3xl'>
                            <HTML />
                            <button className='' >Frontend</button>
                        </div>
                    </CustomButton>
                </div>
            </div>

            <div className='w-full  flex justify-center  mt-10 bg-[#201c2b] text-white  '>
                <div className='w-[80%] ml-20 h-full  flex flex-col'>
                    <div className='w-full flex justify-between'>
                        <div className='flex gap-2 px-10 py-3 rounded-xl    bg-[#af00ed]'>
                            <FILTER />
                            <button className='' >Filter</button>
                        </div>
                        <div className='flex gap-2 px-10 py-3 rounded-xl bg-[#af00ed]'>
                            <AscAndDesc />
                            <button className='' >ASC</button>
                        </div>

                    </div>

                </div>
            </div>

            {/* Courses on react.js */}
            <div className='w-full  flex flex-col items-center   justify-center  mt-10 bg-[#201c2b] text-white  '>
                <div className='w-[80%] ml-20 h-full mb-4  flex flex-col '>
                    <div className='text-3xl font-bold '>Courses on react.js</div>

                </div>
                <div className='w-full ml-20 flex flex-col gap-2'>
                    {data && data?.courseId?.map(e => (
                        <Card data={e} />
                    ))}
                    
                </div>
                <div>
                    <Pagination />
                </div>
            </div>
        </Layout>
    )
}





export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req })
    //redirection 
    if (!session) {
        return {
            redirect: {
                permanent: false,
                destination: "/AuthPage/login"
            }
        }
    }

    const { category } = context.params
    // if(category.length != 2 && isNaN(category[1]) ){
    if (category.length == 2, category[1].length == 24) {
        const res = await fetch(`http://localhost:5000/gettechById/${category[1]}`)
        const data = await res.json()
        return {
            props: {
                session,
                data
            }
        }
    } else {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }

}
