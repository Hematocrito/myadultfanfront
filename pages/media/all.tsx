import Publication from 'components/Publication';
import LayoutMediaHome from 'views/shared/Layouts/LayoutMediaHome';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Model from 'public/post/post1.jpg';
import UpIcon from 'public/assets/icons/ICONS-07.png';
import MessageIcon from 'public/assets/icons/ICONS-08.png';
import ViewIcon from 'public/assets/icons/ICONS-09.png';
import { useEffect, useState } from 'react';

interface IFilter {
  name:string;
  gender:string;
  sort:string;
  price:string;
}

export default function MediaAll() {
  const [isImage, setIsImage] = useState(true);
  const [isSubscribe, setIsSubscribe] = useState(true);

  const [files,setFiles] = useState([]);
  const [filter, setFilter] = useState<IFilter>({
    name:"",
    gender:"all",
    sort:"mostPopular",
    price:"0"
  })
  
  const {name,gender,sort,price} = filter;
  
  const getFiles = async()=>{  
    let filterName = name == ""?"none":name; 
   const response = await fetch(`http://api-temp.myadultfan.com/platform/photos/${filterName}/${gender}/${sort}/${price}`)
   const data = await response.json();
   setFiles(data);  
  }
  
  useEffect(() => {
    getFiles();
  }, [])

  return (
    <>
      <LayoutMediaHome filter={filter} setFilter={setFilter} getFiles={getFiles} >
        <div className="grid md:grid-cols-3 grid-cols-1 mb-6 md:mb-8">
        {files?.map((model: any) => (
          <div key={model.id} className='md:mx-10 mx-3 my-10 md:w-96 w-full h-72  '>            
            <div className="flex items-center mb-0.5">
              <div className="relative rounded-full w-12 h-12 border-2 border-blue-250">
                <Image
                  src={model.url}
                  alt={model.name}
                  className="rounded-full"
                  layout="fill"
                />
              </div>
              <div className="flex flex-col justify-start text-gray-400">
                <h2 className="font-normal mx-1 text-sm">
                  {model.name} {model.lastName}
                  {' · '}
                  <span className="text-xs font-light">{model.createdAt}</span>
                </h2>
                <h2 className="font-extrabold mx-1 text-sm text-black">
                  Riding Pink Dildo With Spank Ass
                </h2>
              </div>
            </div>
            <div className='w-96 h-auto relative'>
              <Image
                src={Model}
                alt={model.id}
                className={`object-contain ${isSubscribe ? 'blur-[2px]' : ''}`}
              />
              {isImage && isSubscribe && (
                <div className="absolute flex flex-col justify-center w-full text-white md:top-24 top-20">
                  <div className="flex flex-row justify-center items-center font-bold">
                    <i className="fas fa-image px-2 text-2xl" /> 1
                  </div>
                  <button className="bg-black bg-opacity-60 px-3 py-1 font-bold text-center rounded-xl self-center my-1 text-base">
                    Subscribe to Unlock
                  </button>
                </div>
              )}
            </div> 
            <div className="flex items-center my-2 md:px-6 px-8 justify-between text-semibold text-gray-400">
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
      </LayoutMediaHome>
    </>
  );
}
