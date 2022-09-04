import Publication from 'components/Publication';
import LayoutMediaHome from 'views/shared/Layouts/LayoutMediaHome';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Model from 'public/post/post1.jpg';
import UpIcon from 'public/assets/icons/ICONS-07.png';
import MessageIcon from 'public/assets/icons/ICONS-08.png';
import ViewIcon from 'public/assets/icons/ICONS-09.png';
import { useEffect, useState } from 'react';
import moment from 'moment';
import Navbar from 'components/Navbar';
interface IFilter {
  name:string;
  gender:string;
  sort:string;
  price:string;
}

export default function MediaPhotos() {
  const [isImage, setIsImage] = useState(true);
  const [isSubscribe, setIsSubscribe] = useState(true);
  const [files,setFiles] = useState([]);
  const [filter, setFilter] = useState<IFilter>({
    name:"",
    gender:"all",
    sort:"mostPopular",
    price: "0"
  })
  
  const {name,gender,sort,price} = filter;
  
  const getFiles = async()=>{  
    let filterName = name == ""?"none":name; 
   const response = await fetch(`http://api.myadultfan.com/platform/videos/${filterName}/${gender}/${sort}/${price}`)
   const data = await response.json();
   setFiles(data);  
  }
  
  useEffect(() => {
    getFiles();
  }, [])

  

  return (
    <>
    <Navbar />
      <LayoutMediaHome filter={filter} setFilter={setFilter} getFiles={getFiles} >
        <div className="grid md:grid-cols-3 grid-cols-1 mb-6 md:mb-8">
        {files?.map((video: any) => (
          <div key={video.id} className='md:mx-10 mx-3 my-10 md:w-96 w-full h-72  '>            
            <div className="flex items-center mb-0.5">
              <div className="relative rounded-full w-12 h-12 border-2 border-blue-250">
                <Image
                  src={video?.performerId?.avatarId?.absolutePath?video?.performerId?.avatarId?.absolutePath:(video?.performerId?.gender === "male")?'/assets/img/MALE.png':'/assets/img/FEMALE.png'}
                  alt={video?.performerId?.name}
                  className="rounded-full"
                  layout="fill"
                />
              </div>
              <div className="flex flex-col justify-start text-gray-400">
                <h2 className="font-normal mx-1 text-sm">
                  {video?.performerId?.name} {/* {video?.performerId?.lastName} */}
                  {' · '}
                  <span className="text-xs font-light">{moment(video.createdAt).format(
                "ddd MMM DD YYYY"
              )}</span>
                </h2>
                <h2 className="font-extrabold mx-1 text-sm text-black">
                 {video.title}
                </h2>
              </div>
            </div>
            <div className='w-96 h-44 border relative'>
              <div className="absolute flex justify-center w-full top-14">
                <button className="bg-slate-50 bg-opacity-60 px-3 py-1 font-bold text-center rounded-xl self-center my-1 text-base border">
                  Subscribe to Unlock
                </button>
              </div>                          
              <iframe className="w-full h-44 aspect-video"  src={video.fileId.absolutePath} /*  src='https://myadultfan.s3.amazonaws.com/media/qmkei-calas.mp4' */>
              </iframe> 
            </div>   
            
            <div className="flex items-center my-2 md:px-6 px-8 justify-between text-semibold text-gray-400">
              <div className="flex items-center">
                <Image src={UpIcon} height={15} width={20} alt="1" />{' '}
                <span className="ml-3 text-sm">{video.stats.likes}</span>
              </div>
              <div className="flex items-center">
                <Image src={MessageIcon} height={15} width={20} alt="1" />{' '}
                <span className="ml-3 text-sm">{video.stats.comments}</span>
              </div>
              <div className="flex items-center">
                <Image src={ViewIcon} height={15} width={20} alt="1" />{' '}
                <span className="ml-3 text-sm">{video.stats.views}</span>
              </div>
            </div> 
          </div>
        ))}
        </div>
      </LayoutMediaHome>
    </>
  );
}