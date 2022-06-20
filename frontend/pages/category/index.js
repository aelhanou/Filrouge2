import { getSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { Layout } from '../../components/Layout'
import { SearchCategory } from '../../components/SearchCategory'
import cb from "../../public/images/1c-bitriks.webp"
export default function category({session}) {
    return (
        <Layout session={session}>
            <SearchCategory />
            <div className='w-full py-6 flex  justify-center bg-[#201c2b] '>
                <div className='flex flex-col gap-6 w-[80%]'>
                    <div className='text-3xl text-white'>All categories</div>
                    <div className='w-full flex flex-wrap gap-6 justify-center text-white'>

                
                        <div className='flex flex-col justify-center gap-6 items-center bg-[#392e5c] rounded w-[250px] h-[20vh] '>
                            <Image
                                // loader={() => "https://upload.wikimedia.org/wikipedia/ru/thumb/5/51/1c_bitrix_logo.svg/201px-1c_bitrix_logo.svg.png?20140108094954"}
                                className='h-full w-full 	'
                                src={cb}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                            <div className='text-xl font-semibold'>1C-Bitrix</div>
                        </div>


                        <div className='flex flex-col justify-center gap-6 items-center bg-[#392e5c] rounded w-[250px] h-[20vh] '>
                            <Image
                                // loader={() => "https://upload.wikimedia.org/wikipedia/ru/thumb/5/51/1c_bitrix_logo.svg/201px-1c_bitrix_logo.svg.png?20140108094954"}
                                className='h-full w-full 	'
                                src={cb}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                            <div className='text-xl font-semibold'>1C-Bitrix</div>
                        </div>
                        <div className='flex flex-col justify-center gap-6 items-center bg-[#392e5c] rounded w-[250px] h-[20vh] '>
                            <Image
                                // loader={() => "https://upload.wikimedia.org/wikipedia/ru/thumb/5/51/1c_bitrix_logo.svg/201px-1c_bitrix_logo.svg.png?20140108094954"}
                                className='h-full w-full 	'
                                src={cb}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                            <div className='text-xl font-semibold'>1C-Bitrix</div>
                        </div>
                        <div className='flex flex-col justify-center gap-6 items-center bg-[#392e5c] rounded w-[250px] h-[20vh] '>
                            <Image
                                // loader={() => "https://upload.wikimedia.org/wikipedia/ru/thumb/5/51/1c_bitrix_logo.svg/201px-1c_bitrix_logo.svg.png?20140108094954"}
                                className='h-full w-full 	'
                                src={cb}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                            <div className='text-xl font-semibold'>1C-Bitrix</div>
                        </div>
                        <div className='flex flex-col justify-center gap-6 items-center bg-[#392e5c] rounded w-[250px] h-[20vh] '>
                            <Image
                                // loader={() => "https://upload.wikimedia.org/wikipedia/ru/thumb/5/51/1c_bitrix_logo.svg/201px-1c_bitrix_logo.svg.png?20140108094954"}
                                className='h-full w-full 	'
                                src={cb}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                            <div className='text-xl font-semibold'>1C-Bitrix</div>
                        </div>
                        <div className='flex flex-col justify-center gap-6 items-center bg-[#392e5c] rounded w-[250px] h-[20vh] '>
                            <Image
                                // loader={() => "https://upload.wikimedia.org/wikipedia/ru/thumb/5/51/1c_bitrix_logo.svg/201px-1c_bitrix_logo.svg.png?20140108094954"}
                                className='h-full w-full 	'
                                src={cb}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                            <div className='text-xl font-semibold'>1C-Bitrix</div>
                        </div>
                        <div className='flex flex-col justify-center gap-6 items-center bg-[#392e5c] rounded w-[250px] h-[20vh] '>
                            <Image
                                // loader={() => "https://upload.wikimedia.org/wikipedia/ru/thumb/5/51/1c_bitrix_logo.svg/201px-1c_bitrix_logo.svg.png?20140108094954"}
                                className='h-full w-full 	'
                                src={cb}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                            <div className='text-xl font-semibold'>1C-Bitrix</div>
                        </div>
                        <div className='flex flex-col justify-center gap-6 items-center bg-[#392e5c] rounded w-[250px] h-[20vh] '>
                            <Image
                                // loader={() => "https://upload.wikimedia.org/wikipedia/ru/thumb/5/51/1c_bitrix_logo.svg/201px-1c_bitrix_logo.svg.png?20140108094954"}
                                className='h-full w-full 	'
                                src={cb}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                            <div className='text-xl font-semibold'>1C-Bitrix</div>
                        </div>
                        <div className='flex flex-col justify-center gap-6 items-center bg-[#392e5c] rounded w-[250px] h-[20vh] '>
                            <Image
                                // loader={() => "https://upload.wikimedia.org/wikipedia/ru/thumb/5/51/1c_bitrix_logo.svg/201px-1c_bitrix_logo.svg.png?20140108094954"}
                                className='h-full w-full 	'
                                src={cb}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                            <div className='text-xl font-semibold'>1C-Bitrix</div>
                        </div>

                        <div className='flex flex-col justify-center gap-6 items-center bg-[#392e5c] rounded w-[250px] h-[20vh] '>
                            <Image
                                // loader={() => "https://upload.wikimedia.org/wikipedia/ru/thumb/5/51/1c_bitrix_logo.svg/201px-1c_bitrix_logo.svg.png?20140108094954"}
                                className='h-full w-full 	'
                                src={cb}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                            <div className='text-xl font-semibold'>1C-Bitrix</div>
                        </div>
                        <div className='flex flex-col justify-center gap-6 items-center bg-[#392e5c] rounded w-[250px] h-[20vh] '>
                            <Image
                                // loader={() => "https://upload.wikimedia.org/wikipedia/ru/thumb/5/51/1c_bitrix_logo.svg/201px-1c_bitrix_logo.svg.png?20140108094954"}
                                className='h-full w-full 	'
                                src={cb}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                            <div className='text-xl font-semibold'>1C-Bitrix</div>
                        </div>

                        <div className='flex flex-col justify-center gap-6 items-center bg-[#392e5c] rounded w-[250px] h-[20vh] '>
                            <Image
                                // loader={() => "https://upload.wikimedia.org/wikipedia/ru/thumb/5/51/1c_bitrix_logo.svg/201px-1c_bitrix_logo.svg.png?20140108094954"}
                                className='h-full w-full 	'
                                src={cb}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                            <div className='text-xl font-semibold'>1C-Bitrix</div>
                        </div>
                        <div className='flex flex-col justify-center gap-6 items-center bg-[#392e5c] rounded w-[250px] h-[20vh] '>
                            <Image
                                // loader={() => "https://upload.wikimedia.org/wikipedia/ru/thumb/5/51/1c_bitrix_logo.svg/201px-1c_bitrix_logo.svg.png?20140108094954"}
                                className='h-full w-full 	'
                                src={cb}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                            <div className='text-xl font-semibold'>1C-Bitrix</div>
                        </div>

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
  