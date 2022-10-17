import { useRouter } from "next/router";
import Image from 'next/image';
import Model from 'public/post/post1.jpg';

export default function SubscribeInfluencer() {

  const router = useRouter();
  let txtSub1,txtSub2,txtSub3,txtSub4,texto5;
  switch(router.locale) {    
    case "es":
      txtSub1 = 'SUSCRÍBETE POR';
      txtSub2 = 'por 1 mes';
      txtSub3 = 'por 6 meses';
      txtSub4 = 'por 12 meses';
        break;
    case "en-US":
      txtSub1 = 'SUBSCRIBE FOR';
      txtSub2 = 'for 1 month';
      txtSub3 = 'for 6 month';
      txtSub4 = 'for 12 month';
        break;
    case "pt":
      txtSub1 = 'INSCREVA-SE PARA';
      txtSub2 = 'por 1 mês';
      txtSub3 = 'por 6 meses';
      txtSub4 = 'por 12 meses';
        break;
    case "ru":
      txtSub1 = 'ПОДПИСАТЬСЯ НА';
      txtSub2 = 'на 1 месяц';
      txtSub3 = 'на 6 месяцев';
      txtSub4 = 'на 12 месяцев';
    default:
        
  }
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 mx-0 md:mx-[12%] my-1 md:my-2">    
    <div className="flex flex-col w-full items-center px-3 mt-2 md:mb-4">
        <button className="border-2 border-maf-pink bg-maf-pink text-white font-extrabold shadow-md text-center rounded-lg leading-5 w-full md:w-80 text-lg my-2">
          <div>{txtSub1} $7.99</div> <div>{txtSub2}</div>
        </button>
        <button className="relative border-2 border-black bg-white text-black font-extrabold shadow-md text-left rounded-lg leading-5 w-full pl-3 pr-2 md:w-80 text-base my-2">
          <div>{txtSub1} $38.35</div> <div>{txtSub3}</div>
          <div className="absolute right-3 top-0 bottom-0 bg-maf-pink rounded-full px-2">
            <span className="block text-white text-sm font-bold">20%</span>
            <span className="block text-white text-sm font-bold">OFF</span>
          </div>
        </button>
        <button className="relative border-2 border-black bg-white text-black font-extrabold shadow-md text-left rounded-lg leading-5 w-full pl-3 pr-2 md:w-80 text-base my-2">
          <div>{txtSub1} $57.52</div> <div>{txtSub4}</div>
          <div className="absolute right-2 -top-2 -bottom-2 bg-maf-pink rounded-full py-1 px-3">
            <span className="block text-white text-base font-bold">45%</span>
            <span className="block text-white text-base font-bold">OFF</span>
          </div>
        </button>
      </div>  
      <div className="w-full md:w-4/5">
        <p className="text-md my-4 mx-2 md:mx-10">
          Hi guys its me bratty luna. Welcome to my private stories. Join me
          and see my naughty stories that are too hot for my public. Feel free
          to chat and send me photos, daily posts. No screenshots or
          screenrecordings pls! These are just for us (will be deleted){' '}
          <span className="font-semibold">
            PLEASE ALLOW 24 HOURS TO BE ADDED
          </span><br />
          THANK YOUs
        </p>
      </div>
      
    </div>
    <div className="flex items-stretch gap-1 md:gap-5 md:mx-[10%] mb-4 md:mb-8 ">
      <div className="relative w-28 md:w-64 h-32 md:h-48 mb-2 md:mb-0">
        <Image
          src={Model}
          className={`object-cover`}
          layout="fill"
        />
      </div>
      <div className="relative w-28 md:w-64 h-32 md:h-48 mb-2 md:mb-0">
        <Image
          src={Model}
          className={`object-cover`}
          layout="fill"
        />
      </div>
      <div className="relative w-28 md:w-64 h-32 md:h-48 mb-2 md:mb-0">
        <Image
          src={Model}
          className={`object-cover`}
          layout="fill"
        />
      </div>
      <div className="relative w-28 md:w-64 h-32 md:h-48 mb-2 md:mb-0">
        <Image
          src={Model}
          className={`object-cover`}
          layout="fill"
        />
      </div>
    </div>
  </>
  );
}
