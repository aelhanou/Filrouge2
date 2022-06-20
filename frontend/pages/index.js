import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../components/Card'
import { CardBook } from '../components/CardBook'
import { CourseHunter } from '../components/CourseHunter'
import { DrapDown } from '../components/DrapDown'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { JoinTelegramChannel } from '../components/JoinTelegramChannel'
import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { PopularChannel } from '../components/PopularChannel'
import { Title } from '../components/Title'
import { TitleComponent } from '../components/TitleComponent'
import { courses } from '../store/courses'
import Skeleton from 'react-loading-skeleton'
import { useSession, getSession } from "next-auth/react"
import { useRouter } from 'next/router'


export default function Home({ session }) {
  // if (status === "loading") {
  //   return (<p>Loading...</p>)
  // }


  // if (status === "unauthenticated") {
  //   return (<p>Access Denied</p>)
  // }


  const state = useSelector(state => state.course)
  const [course, setCourse] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(courses())
  }, [])

  useEffect(() => {
    if (state.courses) {
      console.log(state.courses);
      setCourse(state.courses)
    }

  }, [state])




  return (
    <Layout session={session}>

      {/* Header */}

      <Header />

      <Title title="Last added courses" />
      {/* CARDS */}

      <div className='flex flex-col gap-2'>
        {course && course?.map(e => (
          <Card data={e} />
        ))}
        {/* {course.length < 0 ? course?.map(e => (
          <Card data={e} />
        )) : Array(6).fill(0).map(e => (
          <Skeleton height={200} width={200} />
        ))} */}


      </div>

      <TitleComponent title="All Courses" />



      <Title title="Last added books" />


      <div className='w-full flex justify-center '>
        <div className='w-[80%]  flex gap-3 scrollbar snap-x scrollbar-thumb-purple-900 scrollbar-track-white'>
          {course && course?.map(e => (
            <CardBook data={e} />
          ))}

        </div>
      </div>

      <TitleComponent title="All Books" />


      <PopularChannel />
      <Title title="Popular courses" />

      <div className='flex flex-col gap-2'>
        {course && course?.map(e => (
          <Card data={e} />
        ))}
      </div>

      <TitleComponent title="All Popular Courses" />

      <JoinTelegramChannel />
      <Title title="Latest updated courses" />


      <div className='flex flex-col gap-2'>
        {course && course?.map(e => (
          <Card data={e} />
        ))}
      </div>

      <TitleComponent title="Show More" />



      {/* <DrapDown /> */}

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
  // const router = useRouter()
  // if (!session) {
  //   router.push('/AuthPage/login')
  // }
  return {
    props: {
      session
    }
  }
}

// background: linear-gradient(270deg,#cc3e27,#1a2f85,#761a85);







