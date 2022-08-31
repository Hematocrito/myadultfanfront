import { Container, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { AiFillStar } from 'react-icons/ai';
import NavbarMod from "components/NavbarMod";


export const EditGallery = () => {
    return (
      <>
      <NavbarMod />
        <Container sx={{ maxWidth: "620px!important" }}>
          <div className="mt-6" />
          <div className="flex items-center space-x-3 mb-6">
            <Link href='/admin/model/gallery/gallery-managment' >
              <a>
                <ArrowBackIcon />
              </a>
            </Link>
            <div className="text-base md:text-xl font-semibold">
              {" "}
              Edit Gallery{" "}
            </div>
          </div>          
          <div className="my-2 mt-10">
            <div className='flex gap-1'>
                <AiFillStar className='w-3 h-3 text-orange-500' />
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="galleryName">
                    Name
                </label>
            </div>
            <input className="shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="galleryName" type="text"></input>
          </div>
          <div className="my-2">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="">
                Description
            </label>
            <textarea rows={2} className='border w-full border-gray-400 rounded-lg'>
            </textarea>
          </div>    
            <div className="my-2">
                <div className='flex gap-1'>
                    <AiFillStar className='w-3 h-3 text-orange-500' />
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="galleryStatus">
                        Status
                    </label>
                </div>
                <input className="shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="galleryStatus" type="text"></input>
            </div>
            <div className="flex justify-center items-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-40 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col justify-center items-center pt-5 pb-6">
                        <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Drag & drop file to this area or browser to upload</span></p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Images files only</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                </label>
            </div> 
            <div className="flex space-x-2 justify-start mt-8 mb-12">
          <button
            type="button"
            className="inline-block px-9 py-3 bg-teal-400 text-white  text-xs leading-tight font-semibold rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Post
          </button>

          <button
            type="button"
            className="inline-block px-7 py-3 bg-yellow-300 text-white  text-xs leading-tight font-semibold rounded shadow-md hover:bg-slate-600 hover:shadow-lg focus:bg-[#f545b4] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Discard
          </button>
        </div>
        </Container>
      </>
    );
  };
  