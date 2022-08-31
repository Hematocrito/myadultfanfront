import LayoutInfluencer from 'views/shared/Layouts/LayoutClipsInfluencer';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Lock from 'public/assets/icons/ICONS-05.png';
import UpIcon from 'public/assets/icons/ICONS-07.png';
import MessageIcon from 'public/assets/icons/ICONS-08.png';
import ViewIcon from 'public/assets/icons/ICONS-09.png';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import NavbarMod from 'components/NavbarMod';

export default function ClipsFree({ models }: any) {
  const [isSubscribe, setIsSubscribe] = useState(true);

  return (
    <> 
      <NavbarMod />
      <LayoutInfluencer models={models}>
      <div className="grid md:grid-cols-3 grid-cols-1 mb-6 md:mb-8">
        {models.map((model: any) => (
          <div key={model.id} className='md:mx-10 mx-3 my-10 md:w-96 w-full h-56'>            
          <div className="flex items-center mb-0.5 px-2  ">
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
          
          <div className='w-96 h-44 border relative'>
            <div className="absolute flex justify-center w-full top-8">
              <Image src={Lock} height={80} width={80} alt="1" />
            </div>                          
            <ReactPlayer
              url='https://myadultfan.s3.us-east-1.amazonaws.com/media/qmkei-calas.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCG4fb8Pe2Bed4OcLozWBM0hqDimcSlIW0DoL2mJf%2BDFQIgJ9tIVVlE%2B9QGZUAQRPOmDbjR9Vmaoz567jHdm1Vx7Ogq%2BwIIYBAAGgwwMzIxNjg1NTI2ODAiDIHJHUEUMbHcsDQUaSrYAm4yoy7ijKkyzZ7W9uFGmbU%2FO0s9AgqMOh99YvgZLnhSUDzXZjCnoc2ZMv943pkgV7pCb84CVDwYpcwXXu0x%2FbjHEpw5nMU%2Bbjk%2Fy7SET8cKZhJ%2FzLnww6zYnA9UYH%2BDIMTFBJloJUO0MmYPm0L8rbSL4RKQQ5tQy3e1xmXHvTOi9vCjrjoQH2gfFPHM0rPU1biaPrT%2FhJIcc27iKfFFFFytiRbtwCfxx2sbxHp4Bc7edtWmRQ6Nl%2B6q0AXuAWVLVR1gYAZ8OxTe6czHuRrb4Kgt4A4BIwU2%2FFe3GKThufdTPfcfFfQV1oJAq0UE3s3MJrKypJdX2cwEO5GSUgocnsVJxt5ijLkLQSlqsiz09Jx42%2Bup3RL7QtLgBKprfBjgx1ZF%2BwqqrwrPTBaQH%2Br9raJYInGId%2B6H1ZTR1RXhJGMoXfx8go7sXkyxA9fZRiiLvGdEVM%2BAnoXvMLmm1JcGOrMCltH3bWlTSl%2FasdnqZrhJArqCtgCJ%2BP0d3gp6k3fRcEpwIEBTNcXqOX21ZamfrEJ%2FtJvhIZpUHmgwf5WyiNa8p4RxlNBtvNnEv2W3MnNeSIlRFhbPTYoEQshZYfYeF%2Fi3OtxOWThBQQxhsLI9KF6gTd4gKiqkAiSkY4SboDmJhmHZ4LsxZx%2F%2FQiqRaQ7l5euzdqK6S0eNLzbPBy8QAkM8R%2FDYtdzKzDo6hk%2B0XWi6vN1yDYv4rp50%2FqskzVDGdZKvZ7f3tEyLYJH6ZuamkBG7WvOyRpHouAfD511B52YSnZ%2BYpPaW8lYPIQtDvFzKfmpFQSygWNQFKzQ2%2Bm0SdyIBMGlyPi4ApDAp8Nfb7izyXtAbNreroE%2FRzguIaE5nn%2BjkeQVtoseuqWm1Iip3AH91QeixJQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220811T143632Z&X-Amz-SignedHeaders=host&X-Amz-Expires=36000&X-Amz-Credential=ASIAQO7LFFDUBLZYMXU4%2F20220811%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c121d9dcd0e1fd68b583a8be3f523b357246cf8b5e7a577639c6bececcb0d6a8'
              className={`react-player ${isSubscribe ? 'blur-[2px]' : ''}`}
              playing={false}
              width='100%'
              height='100%'
            />
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
      </LayoutInfluencer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    'https://randomuser.me/api/?gender=female&results=20'
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
