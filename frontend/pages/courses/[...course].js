import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ARROW, AscAndDesc, DISLIKE, DOWN, EYE, FILTER, HEURE, HTML, LIKE, LOVE, STAR } from '../../components/Icons'
import { Layout } from '../../components/Layout'
// import naruto from "../../public/images/narutoIntro.mp4"
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { TechInfo } from '../../components/TechInfo'
import { ImageWithName } from '../../components/ImageWithName'
import { CustomButton } from '../../components/CustomButton'
import { Card } from '../../components/Card'
import { Pagination } from '../../components/Pagination'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import { Lesson } from '../../components/Lesson'
import { getSession } from 'next-auth/react'





export default function nestedCategory({ data ,session}) {
    const [showMore, setShowMore] = useState(false)
    const [currentVideo, setCurrentVideo] = useState(data?.episodes?.[0]?.video)
    const router = useRouter()
    const {
        course = []
    } = router.query
    console.log(data);

    useEffect(()=>{
            setCurrentVideo(currentVideo)
            console.log(currentVideo);
    },[currentVideo])

    return (
        <Layout session={session}>
            <div className='w-full   h-full  flex  justify-center  text-white bg-[#392e5c] '>
                <div className='flex h-[36vh]  flex-col w-[80%] px-10 gap-1  pb-6  justify-start   mt-6  '>

                    <div className='w-full flex justify-start'>
                        <div className='flex gap-2'>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                            <ARROW />
                            <Link href="/">
                                <a>Course</a>
                            </Link>
                            <ARROW />
                            <div>{course.length > 0 && course[0]}</div>
                        </div>
                    </div>
                    <div className='w-full flex gap-3    flex-col'>
                        <div className='flex     mt-6  justify-between '>
                            <div className='text-3xl font-bold'>{data?.name}</div>
                            <div className='text-xl font-bold' >UDEMY</div>
                        </div>
                        <div className='text-2xl font-light     '>{data?.name}</div>
                        <div className='flex gap-1'>
                            <STAR />
                            <STAR />
                            <STAR />
                            <STAR />
                            <STAR />
                        </div>
                    </div>

                </div>

            </div>
            <div className='w-full       bg-[#201c2b]   flex flex-col items-center justify-center'>
                <div className={showMore ? ' -mt-24 ease-out duration-300    h-full flex ml-20 rounded-xl p-4 shadow shadow-gray-50  justify-around w-[82%] bg-[#201c2b]  ' : " -mt-24 	ease-in duration-300	  h-[50vh] overflow-hidden flex ml-20 rounded-xl p-4 shadow shadow-gray-50   justify-around w-[82%] bg-[#201c2b]"}>
                    <div className='1 flex flex-col items-center gap-1 mt-4  w-[35vh] text-white '>
                        <div>

                            <Image
                                loader={() => `${data?.image}`}
                                className='h-full w-full 	'
                                src="example.png"
                                alt="Picture of the author"
                                width={280}
                                height={180}
                            />
                        </div>
                        <div className='2 flex gap-1 justify-center items-center  w-[90%] p-3 text-center rounded bg-[#a06ffb]'>
                            <EYE />
                            <button>Track</button>
                        </div>
                        <div className='3 flex gap-1 justify-center items-center w-[90%] p-3 text-center rounded bg-[#a06ffb]'>
                            <button>Archive</button>
                        </div>
                        <div className='4 flex gap-1 justify-center items-center w-[90%] p-3 text-center rounded bg-[#a06ffb]'>
                            <button>Materials</button>
                        </div>
                        <div className='flex items-center gap-6  py-2'>
                            <div className='1  items-center flex gap-2'>
                                <LIKE />
                                <div>155</div>
                            </div>
                            <div className='1  flex gap-2'>
                                <DISLIKE />
                                <div>155</div>
                            </div>
                            <div className='3 '>
                                <LOVE />
                            </div>
                        </div>
                    </div>
                    <div className='2 w-[140vh] text-gray-400 bg-[#201c2b]'>
                        <div className=' flex  justify-start w-full   '>
                            <div className='py-5 px-4 flex gap-4 justify-around   '>
                                <div className='1 flex gap-2 items-center '>
                                    <HEURE color="#ff3424" />
                                    <div className='flex  flex-col'>
                                        <div className='text-sm font-bold'>DURATION</div>
                                        <div className='text-sm font-bold'>{data?.duration}</div>
                                    </div>
                                </div>
                                <div className='1 flex gap-2 items-center '>
                                    <HEURE color="#ff3424" />
                                    <div className='flex  flex-col'>
                                        <div className='text-sm font-bold'>CHANNEL</div>
                                        <div className='text-sm font-bold'>UDEMY</div>
                                    </div>
                                </div>
                                <div className='1 flex gap-2 items-center '>
                                    <HEURE color="#ff3424" />
                                    <div className='flex  flex-col'>
                                        <div className='text-sm font-bold'>СATEGORY</div>
                                        <div className='text-sm font-bold'>JAVASCRIPT</div>
                                    </div>
                                </div>
                                <div className='1 flex gap-2 items-center '>
                                    <HEURE color="#ff3424" />
                                    <div className='flex  flex-col'>
                                        <div className='text-sm font-bold'>LESSONS</div>
                                        <div className='text-sm font-bold'>{data?.lessonNumber} Videos</div>
                                    </div>
                                </div>
                                <div className='1 flex gap-2 items-center '>
                                    <HEURE color="#ff3424" />
                                    <div className='flex  flex-col'>
                                        <div className='text-sm font-bold'>ADDED DATE</div>
                                        <div className='text-sm font-bold'>10/16/2018</div>
                                    </div>
                                </div>
                                <div className='1 flex gap-2 items-center '>
                                    <HEURE color="#ff3424" />
                                    <div className='flex  flex-col'>
                                        <div className='text-sm font-bold'>LANGUAGE</div>
                                        <div className='text-sm font-bold'>{data?.language}</div>
                                    </div>
                                </div>
                                <div className='1 flex gap-2 items-center '>
                                    <HEURE color="#ff3424" />
                                    <div className='flex  flex-col'>
                                        <div className='text-sm font-bold'>RELEASE DATE</div>
                                        <div className='text-sm font-bold'>10/16/2018</div>
                                    </div>
                                </div>
                                <div className='1 flex gap-2 items-center '>
                                    <HEURE color="#ff3424" />
                                    <div className='flex  flex-col'>
                                        <div className='text-sm font-bold'>UPDATE DATE</div>
                                        <div className='text-sm font-bold'>05/03/2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className=' flex  justify-start w-full   '>
                                <div className='py-5  px-10 flex flex-col  gap-4 justify-start w-[95%]   '>
                                    <div className='w-full'>
                                        {/* description */}
                                        Building React applications demands that you make expert decisions before you write the first line of code. You're responsible for building a cohesive, maintainable code-base that will help your team succeed and build a React application that serves your customers' needs. You're faced with hundreds of decisions. If you don't choose correctly users will suffer.
                                    </div>
                                    <div className='w-full'>
                                        {data?.description}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <div onClick={() => setShowMore(!showMore)} className='w-full flex    justify-center  -mt-11  py-2'>
                    <div className='w-[82%] flex  ml-20   items-center justify-center   py-2'>
                        <button className='text-2xl font-bold text-white w-[150px]  py-3'>Show More</button>
                        <DOWN />
                    </div>
                </div>
            </div>

            <div className='w-full  overflow-hidden flex justify-center ml-10  py-10 text-white'>
                <div className='w-[82%]  flex bg-black flex-wrap  lg:flex-wrap xl:flex-nowrap '>
                    <div className='flex justify-center w-[100%] h-[45vh] xl:w-[61.5vw]  lg:h-[80vh]   '>
                        <video key={currentVideo} controls>
                            <source src={currentVideo}  type="video/mp4" />
                        </video>
                        {/* <video controls width="100%" height="100vh" url={currentVideo} /> */}
                        {/* <DynamicComponent controls width="100%" height="100%" url={<BRO/>} /> */}
                    </div>
                    <div className=' w-[100%] xl:w-[20vw] min-w-[300px] h-[80vh] flex flex-col  scrollbar  scrollbar-thumb-purple-900 scrollbar-track-white'>
                        {data && data?.episodes.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).map((e, i) => (<Lesson id={e?._id}  time="00:00:58" title={e?.name}  setCurrentVideo={setCurrentVideo} video={e?.video} lesson={`LESSON ${i + 1}.`} />))}

                    </div>
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
    const { course } = context.params
    const res = await fetch(`http://localhost:5000/course/${course[0]}`)
    const data = await res.json()


    return {
        props: { data,session }, // will be passed to the page component as props
    }
}

