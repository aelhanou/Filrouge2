


import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { setEpisode } from '../store/addPage';

export const UploadFiles = () => {
    const dispatch = useDispatch()

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        getFilesFromEvent: async event => {
            let data = await myCustomFileGetter(event)
            dispatch(setEpisode({ img: event.target.files }))
            return data
        }
    });

    const files = acceptedFiles.map(f => (
        <li key={f.name}>
            {f.name} has <strong>myProps</strong>: {f.myProp === true ? 'YES' : ''}
        </li>
    ));


    return (
        <section className="w-full p-4 rounded bg-white flex flex-col items-center gap-4">
            <div  {...getRootProps({ className: 'dropzone' })} className='w-[40%] rounded text-center text-white py-6 bg-[#392e5c] '>
                <input  {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside className='flex flex-col w-[40%] font-extralight justify-start '>
                <h4 className='text-xl font-semibold'>Files:</h4>
                <ul>{files}</ul>
            </aside>
        </section>
    );
}

async function myCustomFileGetter(event) {
    const files = [];
    const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;

    for (var i = 0; i < fileList.length; i++) {
        const file = fileList.item(i);

        Object.defineProperty(file, 'myProp', {
            value: true
        });

        files.push(file);
    }

    return files;
}

