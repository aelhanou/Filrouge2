import axios from 'axios'
import React, { useState } from 'react'

export const ProfilePopUp = ({ token,cancel, setCancel }) => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [image, setImage] = useState('')
    const updateUser = (e) => {
        e.preventDefault();
        let url = `http://localhost:5000/updateUser`

        let formData = new FormData();
        console.log(fname, lname, image,token);
        formData.append('id', token);
        formData.append('lname', fname);
        formData.append('fname', lname);
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
        <>
            {/* component */}
            <div
                className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"

                id="modal-id"
            >
                <div className="absolute bg-black opacity-80 inset-0 z-0" />
                <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                    <form onSubmit={(e) => updateUser(e)} className="w-full max-w-lg" encType="multipart/form-data" method="post">

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-first-name"
                                    name="fname"
                                >
                                    First Name
                                </label>
                                <input
                                    onChange={(e) => setFname(e.target.value)}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="text"
                                    name="lname"
                                    placeholder="Jane"
                                />
                                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-last-name"
                                >
                                    Last Name
                                </label>
                                <input
                                    onChange={(e) => setLname(e.target.value)}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-last-name"
                                    type="text"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Upload Image
                                </label>
                                <input
                                    onChange={(e) => setImage(e.target.files[0])}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-password"
                                    type="file"
                                    name='file'
                                />

                            </div>
                        </div>


                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                        <button onClick={() => {
                            setCancel(!cancel)
                        }} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                            Cancel
                        </button>
                        <button type='submit' className="mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600">
                            Update
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </>

    )
}
