import {
  Container,
  FormControlLabel,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useState } from "react";
import { TextInputPost } from "components/wrappers/TextInputPost";
import styles from "../../../../styles/modules/new-post-video.module.scss";
import { IOSSwitch } from "components/wrappers/IOSSwitch";
import Link from "next/link";
import { useRouter } from "next/router";
import {useRef} from 'react';

export const NewVideo = () => {

  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (inputRef.current !== null) {
        
        inputRef.current.click();    
      }    
  };

  const router = useRouter();
  const [freeContent, setFreeContent] = useState(false);

  const [precio, setPrecio] = useState('');
  const [file1, setFile1] = useState('');

  const handleToggle = (e: any) => {
    setFreeContent(!freeContent);
  };

  const onChange = (event:any) => {
    const value = event.target.value;
  
    const f1 = event.target.files[0];
    setFile1(f1);
    console.log("!!!!!!!! "+f1)
  }

  const saveVideo = async (event:any) => {
    var myHeaders = new Headers();
myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoSWQiOiI2MmEzYTQxNTc0NDQ0NDcxMjE1YWFhNDIiLCJzb3VyY2UiOiJwZXJmb3JtZXIiLCJzb3VyY2VJZCI6IjYyYTNhNDE1NzQ0NDQ0NzEyMTVhYWE0MSIsImlhdCI6MTY1NTQyNzMyMywiZXhwIjoxNjU1NTEzNzIzfQ.S54fyG8-fk71wR3lwvIxns-Rw9d7kDo2FRxw6gFuG0w");
myHeaders.append("Cookie", "connect.sid=s%3A8iwziqCmIbcf1h7MovjzsmBjlXE3tGDc.aTW0%2FtYWDRgnuObfvs6ViXgeMT56Pj62KE7FXbcSNwA");

var formdata = new FormData();
formdata.append("title", "first.mp4");
formdata.append("price", "500");
formdata.append("description", "bla bla bla");
formdata.append("isSaleVideo", "false");
formdata.append("isSchedule", "false");
formdata.append("status", "inactive");
formdata.append("video", file1, "[PROXY]");

var requestOptions:RequestInit = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("http://api.myadultfan.com/performer/performer-assets/videos/upload", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    
  }

  return (
    <>
      <Container sx={{ maxWidth: "620px!important" }}>
        <div className="mt-6" />
        <div className="flex items-center space-x-3 mb-6">
          <Link href={"/post/new"}>
            <a>
              <ArrowBackIcon />
            </a>
          </Link>
          <div className="text-base md:text-xl font-semibold">
            {" "}
            New video post{" "}
          </div>
        </div>

        <div className="mb-16">
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
          <div>
            <label className="px-1 text-sm transition-all duration-300 flex align-baseline font-semibold" htmlFor="price">Set price here</label>
            <input className="text-base font-medium outline-none flex-1 appearance-none text-center bg-white text-black border w-1/4" type="text" id="price" name="price" onChange={(e) => {setPrecio(e.target.value)}} />  
          </div>        
          <p className="text-base font-semibold">Teaser</p>
          <div className={styles.content}>
            <div className="card">
              <div className="w-full md:h-36 h-36 overflow-hidden rounded-lg relative inline-block">
                <img
                  className="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img w-full h-full absolute inset-0 object-cover css-rhsghg"
                  src="https://lechatmagazine.com/wp-content/uploads/2020/05/tiktok-egirl-portada.jpg"
                  alt=""
                />

                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-12 top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-max max-w-full box-border absolute"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11.18"
                    fill="none"
                    stroke="#00b2ff"
                    strokeMiterlimit="10"
                  />
                  <polygon
                    points="17.92 12 8.82 18.35 8.82 5.65 17.92 12"
                    fill="none"
                    stroke="#00b2ff"
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>
              <div className="pt-1">
                <p className="font-semibold line-clamp-1 text-sm">
                  How to Program Voxel Worlds Like Minecraft with C# in Unity
                </p>
                <div className="pt-0 pb-1">
                  <a href="#" className="text-xs font-semibold">
                    3.06 MB
                  </a>
                </div>
                <div className="flex items-center w-full">
                  <div className="w-full bg-gray-200 h-2 rounded">
                    <div
                      className="bg-[#09ff00] h-2 rounded"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <div className="ml-1">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <circle fill="#09FF00" cx="12" cy="12" r="10" />
                      <path
                        d="M9.3,16.3l-3.6-3.6c-0.4-0.4-0.4-1,0-1.4c0,0,0,0,0,0c0.4-0.4,1-0.4,1.4,0l2.9,2.9l6.9-6.9c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4
	l-7.6,7.6C10.3,16.7,9.7,16.7,9.3,16.3z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-2 justify-start mt-6">
              <button
                type="button"
                className="inline-block px-4 py-1.5 bg-[#00b3ff] text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleClick} >
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
              <input style={{display: 'none'}} ref={inputRef} type="file" onChange={onChange} />
            </div>

            <div className="flex space-x-2 justify-center mt-8">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-[#00b3ff] text-white  text-xs leading-tight font-semibold rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={saveVideo}
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
          </div>
        </div>
      </Container>
    </>
  );
};
