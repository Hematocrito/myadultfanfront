import Image from 'next/image';
import { useRouter } from "next/router";

export default function BannerInfluencer({ influencer }: any) {
  function openModal(modalId: any) {
    let modal: any = document.getElementById(modalId);
    modal.classList.remove('hidden');
    const body = document.body;
    body.style.overflow = 'hidden';
  }

  const router = useRouter();
  let txtBI1,txtBI2,txtBI3,txtBI4;
  switch(router.locale) {    
    case "es":
      txtBI1 = 'seguidores';
      txtBI2 = 'fotos';
      txtBI3 = 'ENVÍAME UN MENSAJE';
      txtBI4 = 'PROPINA';
        break;
    case "en-US":
      txtBI1 = 'followers';
      txtBI2 = 'photos';
      txtBI3 = 'SEND ME A MESSAGE';
      txtBI4 = 'TIP ME';
        break;
    case "pt":
      txtBI1 = 'seguidores';
      txtBI2 = 'fotos';
      txtBI3 = 'ME MANDE UMA MENSAGEM';
      txtBI4 = 'DICA PARA MIM';
        break;
    case "ru":
      txtBI1 = 'последователи';
      txtBI2 = "Забыли пароль?";
      txtBI3 = 'ПРИШЛИТЕ МНЕ СООБЩЕНИЕ';
      txtBI4 = 'СОВЕТ МНЕ';
    default:
        
  }


  return (
    <div className="relative h-56 lg:h-[70vh] w-full md:w-4/6 ml-0 md:ml-56 mt-1">
      <Image src={influencer} layout="fill" className="object-fill" />
      <div className="absolute w-full top-1">
        <div className="flex justify-around">
          <div className="text-white flex flex-col text-center">
            <div className="font-bold text-base">13.2k</div>
            <div className="font-medium text-xs">{txtBI1}</div>
          </div>
          <div className="text-white flex flex-col text-center">
            <div className="font-bold text-base">291</div>
            <div className="font-medium text-xs">posts</div>
          </div>
          <div className="text-white flex flex-col text-center">
            <div className="font-bold text-base">277</div>
            <div className="font-medium text-xs">{txtBI2}</div>
          </div>
          <div className="text-white flex flex-col text-center">
            <div className="font-bold text-base">320</div>
            <div className="font-medium text-xs">clips</div>
          </div>
        </div>
      </div>

      <div className="absolute w-full bottom-1">
        <div className="flex flex-col justify-start w-full text-white px-3">
          {/* <div className="text-white flex  text-start"> */}
          <div className="inline-flex online -mb-3 md:-mb-1">
              <p className='tracking-tighter font-extrabold text-2xl md:text-4xl'>LUCYBLACK18</p>  
              <svg height="50" width="20" className='mx-1'><circle cx="10" cy="16" r="7" className='fill-maf-pink'/></svg>
              <p className='text-base md:text-lg font-medium mt-2'>LIVE</p>
          </div>
          <div className="flex md:w-full">
            <button className="border-2 border-white bg-white text-gray-400 font-extrabold shadow-md text-center rounded-2xl w-6/12 md:w-2/12 px-3 text-xs md:text-sm py-1 md:py-0 mb-2">
              {txtBI3}
            </button>
            <button
              onClick={() => openModal('modal')}
              className="border-2 border-blue-450 bg-blue-450 font-extrabold shadow-md text-center rounded-2xl w-3/12 md:w-2/12 px-3 text-xs md:text-sm py-1 md:py-0 mb-2 ml-2"
            >
              {txtBI4}
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
