import { Container, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { AiFillStar } from 'react-icons/ai';
import NavbarMod from "components/NavbarMod";
import React, { useState } from "react";
import { IOSSwitch } from "components/wrappers/IOSSwitch";
import { CardMedia } from "@mui/material";


export const UploadVideo = () => {
  const [freeContent, setFreeContent] = useState(false);
  const handleToggle = (e: any) => {
    setFreeContent(!freeContent);
  };
    return (
      <>
      <NavbarMod />
        <Container sx={{ maxWidth: "620px!important" }}>
          <div className="mt-6" />
          <div className="flex items-center space-x-3 mb-6">
            <Link href='/admin/model/video/video-management' >
              <a>
                <ArrowBackIcon />
              </a>
            </Link>
            <div className="text-base md:text-xl font-semibold">
              {" "}
              Upload Video{" "}
            </div>
          </div>          
          <div className="my-2 mt-10">
            <div className='flex gap-1'>
                <AiFillStar className='w-3 h-3 text-orange-500' />
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="galleryName">
                    Title
                </label>
            </div>
            <input className="shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="galleryName" type="text"></input>
          </div>
          <div className="my-2">
            <div className='flex gap-1'>
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="galleryName">
                    Participants
                </label>
            </div>
            <input className="shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="galleryName" type="text"></input>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                  For sale?
              </label>
              <FormControlLabel
              control={
                <IOSSwitch
                  sx={{ m: 1 }}
                  checked={freeContent}
                  onClick={handleToggle}
                />
              }
              label={`${freeContent == false ? "Free content" : "PPV content"}`}
              sx={{
                position: "relative",
                "& .MuiTypography-root": {
                  fontSize: "12px",
                  position: "absolute",
                  left: `${freeContent == false ? "40px" : "25px"}`,
                  color: "white",
                },
              }}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium ml-3" >
                Price
              </label>
              <input className="shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="99.9"/>
            </div>
          </div> 
          <div className="my-2">
              <div className='flex gap-1'>
                  <AiFillStar className='w-3 h-3 text-orange-500' />
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="galleryStatus">
                      Status
                  </label>
              </div>
              <input className="shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Active" type="text"></input>
          </div> 
          <div className="my-2">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="">
                Description
            </label>
            <textarea rows={2} className='border w-full border-gray-400 rounded-lg'>
            </textarea>
          </div>  
          <div className="flex justify-start">
            <label className="flex flex-col w-full h-[148px] hover:cursor-pointer">
              <CardMedia
                  component="img"
                  image="/assets/img/iconos doc-10.png"
                  alt=""
                  sx={{
                      width: "144px",
                  }}
              />
              <input type="file" className="opacity-0" />
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
  