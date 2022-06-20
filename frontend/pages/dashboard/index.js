import { getSession } from 'next-auth/react'
import React, { useState } from 'react'
import { DashboardLayout } from '../../components/DashboardLayout'




export default function Dashboard() {
    return (
        <div>
            bro
        </div>
    )
}

Dashboard.getLayout = function getLayout(page) {
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
