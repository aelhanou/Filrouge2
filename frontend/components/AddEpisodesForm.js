import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddEpisode, setEpisode } from '../store/addPage'
import { MyDropzone, UploadFiles } from './UploadFiles'

export const AddEpisodesForm = () => {
    const state = useSelector(e => e.addstate)
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [data, setData] = useState({})
    const dispatch = useDispatch()
    const getName = (name) => {
        // dispatch(setEpisode({ name: name }))
    }
    useEffect(() => {
        setData(state)
    }, [state])

    const addEpisodes = async (e) => {
        e.preventDefault()
        let url = `http://localhost:5000/addEpisode`

        let formData = new FormData();
        formData.append('name', name);
        formData.append('file', image);

        axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(res => {
            console.log(res)
        }
        ).catch(err => {
            console.log(err)
        }
        )

       
    }
    return (
        <div className='w-full mt- flex flex-col'>
            <div className='text-2xl mb-3 font-semibold '>Adding Episodes</div>
            <div className=''>
                {/* <form  > */}
                <form onSubmit={(e) => addEpisodes(e)} encType="multipart/form-data" method="post">

                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={(e) => setName(e.target.value)} type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Episode Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        {/* <UploadFiles  /> */}

                        <div className="flex w-full  items-center justify-center bg-grey-lighter">
                            <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span className="mt-2 text-base leading-normal">Select a file</span>
                                <input type="file" name='img' onChange={(e) => setImage(e.target.files[0])} className="hidden" />
                            </label>
                        </div>
                    </div>



                    <div className='w-full flex justify-center'>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
