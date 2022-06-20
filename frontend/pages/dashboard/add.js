import { getSession } from 'next-auth/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddCoursesForm } from '../../components/AddCoursesForm'
import { AddEpisodesForm } from '../../components/AddEpisodesForm'
import { DashboardLayout } from '../../components/DashboardLayout'
import { setEpisode } from '../../store/addPage'




export default function Add() {
    // const dispatch = useDispatch()


    // dispatch(setEpisode("tooo"))

    return (
        <div className='h-[98%] w-full flex flex-col'>
            <div className='flex justify-center text-3xl py-4 mb-3 bg-[#392e5c] text-white rounded font-semibold'> Adding Page</div>
          <AddCoursesForm />
          <AddEpisodesForm />
        </div>
    )
}

Add.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
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