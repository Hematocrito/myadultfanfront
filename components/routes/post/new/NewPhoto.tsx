import React, { useState } from "react";
import { Container, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IOSSwitch } from "components/wrappers/IOSSwitch";
import { TextInputPost } from "components/wrappers/TextInputPost";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Link from "next/link";
import { useRouter } from "next/router";
import {useRef} from 'react';
import { BaseEmoji, Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import NavbarMod from "components/NavbarMod";

export const NewPhoto = () => {
  const router = useRouter();
  const [freeContent, setFreeContent] = useState(false);
  const [stateContent, setstateContent] = useState('free')
  const handleToggle = (e: any) => {
    setFreeContent(!freeContent);
  };
  const [input, setInput] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const addEmoji = (e: BaseEmoji) => {
    let sym = e.unified.split("-");
    let codesArray: any = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  const [fotoURl, setFotoUrl] = useState<string>();
  const [fotoArch, setFotoArch] = useState('');
  
  const onImageChange = (e:any) => {    
    const [file] = e.target.files;
    setFotoUrl(URL.createObjectURL(file));
    let archivo = e.target.files[0];
    setFotoArch(archivo);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (inputRef.current !== null) {    
      inputRef.current.click();    
    }    
  };

  const enviarFoto = async (event:any) => {
    event.preventDefault()

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoSWQiOiI2MmEzYTQxNTc0NDQ0NDcxMjE1YWFhNDIiLCJzb3VyY2UiOiJwZXJmb3JtZXIiLCJzb3VyY2VJZCI6IjYyYTNhNDE1NzQ0NDQ0NzEyMTVhYWE0MSIsImlhdCI6MTY1NjQ0OTE3OSwiZXhwIjoxNjU2NTM1NTc5fQ.tk6PlSxhGKr9vKv4gbt6AwxKXoc5XFvzzWcQwWChH64");

    var formdata = new FormData();
    formdata.append("file", fotoArch, "[PROXY]");

    var requestOptions:RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://api.myadultfan.com/feeds/performers/photo/upload", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  
  return (
    <> 
      <NavbarMod />
      <Container sx={{ maxWidth: "620px!important" }}>
        <div className="mt-6" />
        <div className="flex items-center space-x-3 mb-6">
          <Link href='/post/new' >
            <a>
              <ArrowBackIcon />
            </a>
          </Link>
          <div className="text-base md:text-xl font-semibold">
            {" "}
            New photo post{" "}
          </div>
        </div>
        
        <div>
          <img className="object-scale-down h-80 w-fit border" src={fotoURl} alt="" />
        </div>
          
      {/*   <FormControlLabel
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
        /> */}
        <FormControl>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={stateContent}
          label="Age"
          onChange={(e)=>setstateContent(e.target.value)}
        >
          <MenuItem value={'free'}>Free Content</MenuItem>
          <MenuItem value={'pay'}>PPV Content</MenuItem>
          <MenuItem value={'subscription'}>Subscription</MenuItem>
        </Select>
      </FormControl>
        <TextInputPost label="Set price here" fieldName="price" />
        <div className="flex space-x-2 justify-start mt-6">
          <button
            type="button"
            className="inline-block px-4 py-1.5 bg-[#00b3ff] text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={handleClick}
          >
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 mx-auto inline"
            >
              <path
                d="M20.18,23.81H4.63a.91.91,0,0,1-.91-.92V1.11A.91.91,0,0,1,4.63.19H15.79l5.3,5.31V22.89A.92.92,0,0,1,20.18,23.81Z"
                fill="#fff"
              />
              <path
                d="M20,6.59H15.79a1.09,1.09,0,0,1-1.1-1.09V1.29a1.1,1.1,0,0,1,1.1-1.1l5.3,5.31A1.09,1.09,0,0,1,20,6.59Z"
                fill="#00b2ff"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.25px"
              />
              <path
                d="M11.23,12.83V9.31h2.35v3.52h3.51v2.35H13.58V18.7H11.23V15.18H7.72V12.83Z"
                fill="#00b2ff"
              />
            </svg>
            <p className="inline pl-2 font-semibold">content upload</p>
          </button>
          <input style={{display: 'none'}} ref={inputRef} type="file" onChange={onImageChange} />        
        </div>
        <div className="flex space-x-2 justify-center mt-8 mb-12">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-[#00b3ff] text-white  text-xs leading-tight font-semibold rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={enviarFoto}
          >
            Post
          </button>

          <button
            onClick={(e) => router.push("/post/new")}
            type="button"
            className="inline-block px-6 py-2.5 bg-[#ff00a2] text-white  text-xs leading-tight font-semibold rounded shadow-md hover:bg-[#f545b4] hover:shadow-lg focus:bg-[#f545b4] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Discard
          </button>
        </div>
      </Container>
    </>
  );
};
