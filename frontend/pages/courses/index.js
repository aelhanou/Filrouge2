import { getSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { Layout } from '../../components/Layout'
import { SearchCategory } from '../../components/SearchCategory'
import cb from "../../public/images/1c-bitriks.webp"
export default function category({session}) {
    return (
        <Layout session={session}>
            courses still not done

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