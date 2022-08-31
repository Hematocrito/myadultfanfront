import LayoutClips from 'views/shared/Layouts/LayoutClipsInfluencer';
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Image from 'next/image';
import UpIcon from 'public/assets/icons/ICONS-07.png';
import MessageIcon from 'public/assets/icons/ICONS-08.png';
import ViewIcon from 'public/assets/icons/ICONS-09.png';
import ReactPlayer from 'react-player';
import React, { useState, useEffect } from 'react';
import NavbarMod from 'components/NavbarMod';


const Publication = dynamic(()=>import('components/Publication'),
{loading: ()=><p>Loading...</p>})

export default function ClipsAll({ models }: any) {

  const [datos, setDatos] = useState([])
  const [model, setModel] = useState(false)

  useEffect(() => {  
    const fetchData = async () => {  
        let localModel = localStorage.getItem('influencer')  
        console.log("INICIO "+localModel);
        if(localModel) setModel(true);
        let tk_code = localStorage.getItem('tkWomen')        
        let token:any;
        if(tk_code) token = tk_code
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
    
        var options:RequestInit = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        const endpoint = "http://api.myadultfan.com/performer/performer-assets/videos/search?limit=10&offset=0&sort=desc&sortBy=createdAt";
        const response = await fetch(endpoint, options)
        const result:any = await response.json()

        let arrayVid:any = []
        const items = result.data.data.map((video:any) => {
          let item: any = {};
          item.id = video._id
          item.title = video.title
          item.username = video.performer.username
          item.date = video.createdAt
          item.url = video.video.url
          arrayVid.push(item)
        });
        setDatos(arrayVid)
        
    }
    fetchData()
        // make sure to catch any error
        .catch(console.error);;
    
}, [])

datos.map((dato: any) => (
  console.log(dato.url)
))

  return (
    <>
      <NavbarMod />
      <LayoutClips models={models}>
      <div className="grid md:grid-cols-3 grid-cols-1 mb-6 md:mb-8">
        {datos.map((dato: any) => (
          <div key={dato.id} className='md:mx-10 mx-0 md:my-10 my-6 md:w-96 w-screen md:h-56 h-auto'>
          <div className="flex items-center mb-0.5 px-2  ">
            <div className="relative rounded-full w-12 h-12 border-2 border-blue-250">
              
            </div>
            <div className="flex flex-col justify-start text-gray-400">
              <h2 className="font-normal mx-1 text-sm">
                {dato.username}
                {' · '}
                <span className="text-xs font-light">{dato.fecha}</span>
              </h2>
              <h2 className="font-extrabold mx-1 text-sm text-black">
                {dato.title}
              </h2>
            </div>
          </div>
          <div className='w-96 h-40 border'>
            <iframe className="w-full h-48 aspect-video" src='https://myadultfan.s3.amazonaws.com/media/qmkei-calas.mp4'>
            </iframe> 
          </div>            
          <div className="flex items-center my-2 px-4 justify-between text-semibold text-gray-400">
            <div className="flex items-center">
              <Image src={UpIcon} height={15} width={20} />{' '}
              <span className="ml-3 text-sm">2</span>
            </div>
            <div className="flex items-center">
              <Image src={MessageIcon} height={15} width={20} />{' '}
              <span className="ml-3 text-sm">1</span>
            </div>
            <div className="flex items-center">
              <Image src={ViewIcon} height={15} width={20} />{' '}
              <span className="ml-3 text-sm">25</span>
            </div>
          </div>
        </div>            
        ))}
      </div>
      </LayoutClips>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    "https://randomuser.me/api/?gender=female&results=20"
  );
  let data: any = await res.json();

  const models = data.results.map((result: any) => {
    let newResult: any = {};
    newResult.name = result.name.first;
    newResult.lastName = result.name.last;
    newResult.url = result.picture.medium;
    newResult.largeUrl = result.picture.large;
    newResult.id = result.login.uuid;
    newResult.createdAt = new Date().toDateString();
    return newResult;
  });

  return {
    props: {
      models,
    },
  };
};
