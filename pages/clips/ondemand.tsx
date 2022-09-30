import LayoutClipsHome from 'views/shared/Layouts/LayoutClipsHome';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Lock from 'public/assets/icons/ICONS-05.png';
import UpIcon from 'public/assets/icons/ICONS-07.png';
import MessageIcon from 'public/assets/icons/ICONS-08.png';
import ViewIcon from 'public/assets/icons/ICONS-09.png';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import moment from 'moment';
import Navbar from 'components/Navbar';

interface IFilter {
  name:string;
  gender:string;
  sort:string;
  price:string;
}
export default function ClipsOnDemand({ models }: any) {
  const [isSubscribe, setIsSubscribe] = useState(true);
  const [videos,setVideos] = useState([]);
  const [filter, setFilter] = useState<IFilter>({
    name:"",
    gender:"all",
    sort:"mostPopular",
    price:"0"
  })
  
  const {name,gender,sort,price} = filter;
  
  const getFiles = async()=>{  
    let filterName = name == ""?"none":name; 
   const response = await fetch(`http://localhost:9000/platform/videos/pay/${filterName}/${gender}/${sort}/${price}`)
   const data = await response.json();
   setVideos(data);  
  }
  
  useEffect(() => {
    getFiles();
  }, [])
  

  return (
    <>
    <Navbar />
      <LayoutClipsHome filter={filter} setFilter={setFilter} getFiles={getFiles} models={models}>
        <div className="grid md:grid-cols-3 grid-cols-1 mb-6 md:mb-8">
        {videos?.map((model: any) => (
          <div key={model.id} className='md:mx-10 mx-3 my-10 md:w-96 w-full h-56'>            
            <div className="flex items-center mb-0.5 px-2  ">
              <div className="relative rounded-full w-12 h-12 border-2 border-blue-250">
                <Image
                  src={model?.performerId?.avatarId?.absolutePath?model?.performerId?.avatarId?.absolutePath:(model?.performerId?.gender === "male")?'/assets/img/MALE.png':'/assets/img/FEMALE.png'}
                  alt={model.performerId?.name}
                  className="rounded-full"
                  layout="fill"
                />
              </div>
              <div className="flex flex-col justify-start text-gray-400">
                <h2 className="font-normal mx-1 text-sm">
                  {model.performerId?.name}
                  {' · '}
                  <span className="text-xs font-light">{moment(model.createdAt).format(
                "ddd MMM DD YYYY"
              )}</span>
                </h2>
                <h2 className="font-extrabold mx-1 text-sm text-black">
                  {model.title}
                </h2>
              </div>
            </div>
            
            <div className='w-96 h-44 border relative'>
              <div className="absolute flex justify-center w-full top-8">
                <Image src={Lock} height={80} width={80} alt="1" />
              </div>                          
              <iframe className="w-full h-44 aspect-video" src={model.fileId.absolutePath} /*  src='https://myadultfan.s3.amazonaws.com/media/qmkei-calas.mp4' */>
              </iframe> 
            </div>            
            <div className="flex items-center my-2 px-4 justify-between text-semibold text-gray-400">
              <div className="flex items-center">
                <Image src={UpIcon} height={15} width={20} alt="1" />{' '}
                <span className="ml-3 text-sm">2</span>
              </div>
              <div className="flex items-center">
                <Image src={MessageIcon} height={15} width={20} alt="1" />{' '}
                <span className="ml-3 text-sm">1</span>
              </div>
              <div className="flex items-center">
                <Image src={ViewIcon} height={15} width={20} alt="1" />{' '}
                <span className="ml-3 text-sm">25</span>
              </div>
            </div>
          </div>  
        ))}
        </div>
      </LayoutClipsHome>
    </>
  );
}

