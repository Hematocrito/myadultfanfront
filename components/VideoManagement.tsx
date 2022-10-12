import Table from 'react-tailwind-table';
import 'react-tailwind-table/dist/index.css';
import { AiOutlinePlus, AiOutlineUpload } from "react-icons/ai";
import { tableStyling, columns } from './VideoTableProps'
import React, { useState, useEffect } from 'react';
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import NavbarMod from './NavbarMod';
import Router from "next/router";

export const VideoManagement = () => {
    const [datos, setDatos] = useState([])
    
    useEffect(() => {  
        const fetchData = async () => {  
            let tk_code = localStorage.getItem('tkWomen')
            console.log("TOKEN "+tk_code);
            let token:any = tk_code? tk_code: ''
            var myHeaders = new Headers();
            myHeaders.append("Authorization", token);
            myHeaders.append("Cookie", "connect.sid=s%3A8BAjuDeeHVRkCsl9a4WT8Ua_ezyb4squ.Xjr%2BBUnJLue6U8OHJieiYWFuBCjH5IsGluFEdj7EhWI");

            var options:RequestInit = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
                };
                
            const endpoint = "https://api.myadultfan.com/performer/performer-assets/videos/search?limit=10&offset=0&sort=desc&sortBy=createdAt"  
                        
            const response = await fetch(endpoint, options)
            const result:any = await response.json()
            
            let arreglo:any = []
            const items = result.data.data.map((video:any) => {
                let object: any = {};
                object.title = <h1 className=' font-semibold text-black'>{video.title}</h1>
                object.fsale = <h1 className='text-red-600 font-semibold w-fit border-2 rounded-lg border-red-600 hover:bg-red-600 transition outline outline-0 hover:text-white p-1.5'>{video.isSaleVideo}</h1>
                object.price = <h1 className='font-semibold text-black'>${video.price}</h1>
                object.status = statusContent(video.status)
                object.lupdate = <h1 className='font-semibold text-black'>{video.updatedAt}</h1>
                object.actions = <div className="flex justify-start gap-2"><button className=" text-white font-semibold w-10 border-2 rounded-lg border-blue-450 bg-blue-450 transition outline outline-0 p-1.5"> <AiOutlineEdit className="w-6 h-6 m-auto" /> </button><button className="text-white font-semibold w-10 border-2 rounded-lg border-red-600 bg-red-600 transition outline outline-0 "> <AiFillDelete className="w-6 h-6 m-auto" /></button></div>
                arreglo.push(object)
            })    
            setDatos(arreglo)
            
        }
        fetchData()
            // make sure to catch any error
            .catch(console.error);;        
    }, [])

    const statusContent = (status: string) => {
        switch (status) {
            case "inactive":
                return <h1 className='font-semibold text-red-500 border-2 rounded-lg w-fit border-red-500 p-1.5'>
                    Inactive
                </h1>;
            case "active":
                return <h1 className='font-semibold text-green-400 border-2 rounded-lg w-fit border-green-400 p-1.5'>
                    Active
                </h1 >;
            default:
                return <h1 className='font-semibold text-red-500 border-2 rounded-lg w-fit border-red-500 p-1.5'>Error</h1>;
        }
    }

    return (
        <section>
            <NavbarMod />
            <div className='w-full'>
                <div className='w-4/5 flex-1 m-auto mt-28 font-sans'>
                    <h1 className='font-base text-2xl font-semibold'>Video Managment</h1>
                    <div className='flex mt-5 w-full justify-between gap-4 sm:gap-0 overflow-scroll md:overflow-visible'>
                        <div className='flex gap-5'>
                            <input className='border-gray-400 rounded-lg border-[1px] p-3' type="text" placeholder='Enter Keyword' />
                            <select className='border-gray-400 rounded-lg border-[1px] p-3' name="" id="">
                                <option value="">Active</option>
                                <option value="">Inactive</option>
                            </select>
                            <button className='bg-blue-450 rounded-lg text-white font-semibold w-24'>Search</button>
                        </div>
                        <div className='flex gap-3'>
                            <button className='flex items-center gap-3 bg-blue-450 rounded-lg text-xl font-semibold p-1.5 text-white' onClick={() => {
                                Router.push('/admin/model/video/upload-video')
                            }}> <AiOutlineUpload className='text-2xl text-white' /> Upload New</button>
                            <button className='flex items-center gap-3 bg-yellow-400 rounded-lg text-xl font-semibold p-1.5 text-white'> <AiOutlineUpload className='text-2xl text-white' /> Bulk Upload</button>
                        </div>
                    </div>
                    <Table styling={tableStyling} columns={columns} rows={datos} show_search={false} should_export={false} per_page={5} />
                </div>
            </div>
        </section>
    );
};