import { Container, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { TextInputPost } from "components/wrappers/TextInputPost";
import styles from "../../../../styles/modules/new-post-video.module.scss";
import { IOSSwitch } from "components/wrappers/IOSSwitch";
import Link from "next/link";
import { useRouter } from "next/router";
import {useRef} from 'react';
import ReactPlayer from 'react-player'
import NavbarMod from "components/NavbarMod";

export const NewVideo = () => {

  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (inputRef.current !== null) {
        
        inputRef.current.click();    
      }    
  };

  const router = useRouter();
  const [freeContent, setFreeContent] = useState(false);
  const [stateContent, setstateContent] = useState('free')
  console.log(stateContent);
  
  const [precio, setPrecio] = useState('0');

  const handleToggle = (e: any) => {
    setFreeContent(!freeContent);
  };

  const [videoURl, setVideoUrl] = useState<string>('');
  const [videoArch, setVideoArch] = useState('');
  const [videoName, setVideoName] = useState('');
  const [description, setDescription] = useState('');
  let sale:string = "false";

  const onChange = (event:any) => {  
    const [file] = event.target.files;
    setVideoUrl(URL.createObjectURL(file));
    let v1 = event.target.files[0];
    setVideoArch(v1);
    let name = event.target.files[0].name;
    setVideoName(name);
  }

  const fijarPrecio = (e:any) =>{
    setPrecio(e.target.value)
    if(precio!==''){
      setFreeContent(true);
      sale = "true";
    } 
  }
  var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoSWQiOiI2MmEzYTQxNTc0NDQ0NDcxMjE1YWFhNDIiLCJzb3VyY2UiOiJwZXJmb3JtZXIiLCJzb3VyY2VJZCI6IjYyYTNhNDE1NzQ0NDQ0NzEyMTVhYWE0MSIsImlhdCI6MTY1NjQ1ODgwNiwiZXhwIjoxNjU2NTQ1MjA2fQ.Dv0Bpo05SYcQ18i7UnSHv0_aWyd9ij41oMvmIL2CUfI";

  const saveVideo = async (event:any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var formdata = new FormData();
    formdata.append("title", videoName);
    formdata.append("price", precio);
    formdata.append("description", description);
    formdata.append("isSaleVideo", sale);
    formdata.append("isSchedule", "false");
    formdata.append("status", "inactive");
    formdata.append("video", videoArch, "[PROXY]");

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
            New video post{" "}
          </div>
        </div>

        <div className="mb-16">
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
          <div className="mb-3">
            <label className="px-1 text-sm transition-all duration-300 flex align-baseline font-semibold" htmlFor="price">Set price here</label>
            <input className="text-base font-medium outline-none flex-1 appearance-none text-center bg-white text-black border w-1/4" type="text" id="price" name="price" onChange={fijarPrecio} />  
          </div> 
          <div>
          <label htmlFor="descrip" className="px-1 text-sm transition-all duration-300 flex align-baseline font-semibold">Your description</label>
          <textarea id="descrip" name="descrip" rows={2} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your description..." onChange={(e) => {setDescription(e.target.value)}}></textarea>
          </div>        
          <p className="text-base font-semibold">Teaser</p>
          <div className={styles.content}>
          
          <div className='h-80 w-auto border'>
          <ReactPlayer
            url={videoURl}
            className='react-player'
            playing
            width='100%'
            height='100%'
          />
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
