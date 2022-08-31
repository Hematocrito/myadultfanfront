import Link from 'next/link';
import Image from 'next/image';
import modelBg from 'public/assets/img/modelbg.jpg';
import { AiFillCamera } from 'react-icons/ai';
import { useRouter } from "next/router";

export const BasicInfo = (props: { admin: "model" | "fans" }) => {
  const router = useRouter();
  let texto1;
  switch(router.locale) {    
    case "es":
      texto1 = 'Información básica';
        break;
    case "en-US":
      texto1 = 'Basic Information';
        break;
    case "pt":
      texto1 = 'Informação básica';
        break;
    case "ru":
      texto1 = 'Основная информация';
      
    default:
        
  }
    return (
        <section >
            <div className="m-8 md:m-12">
                <div className=" flex gap-4 mb-12 justify-between w-4/5 lg:text-lg text-sm lg:justify-start overflow-scroll  md:overflow-visible">
                    <a className="md:py-2 md:px-2 text-blue-450 border-b-[3px] border-blue-450 font-semibold ">{texto1}</a>
                    <Link href={'/admin/model/Information/BankingInfo'}>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">Banking Information</a>
                    </Link>
                    <Link href={'/admin/model/Information/SubsInfo'}>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">Subscription Information</a>
                    </Link>
                    <Link href={'/admin/model/Information/BlockCountries'}>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">Block Countries</a>
                    </Link>
                    <Link href={'/admin/model/Information/ChangePassword'}>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">Change Password</a>
                    </Link>
                </div>


            </div>
            <section className='mb-12'>
                <div className='w-full h-[300px] md:h-[850px] relative'>
                    <Image src={modelBg} alt="1" layout='fill' objectFit='cover' />
                    <div className='absolute flex justify-between items-center bottom-2  w-full px-3 text-white'>
                        <div className='flex items-center sm:gap-3 gap-2'>
                            <div className="relative rounded-full w-[72px]  md:w-48 h-[72px] lg:w-[179px] lg:h-[179px] md:h-48 border-4 border-blue-450 md:mb-8 md:ml-5 mb-0 ml-0 ">
                                <img className="relative border-[2px] border-white rounded-full p-0.5 lg:w-[170px] lg:h-[170px] md:w-[184px] md:h-[184px] w-16 h-16" src="https://randomuser.me/api/portraits/med/women/80.jpg" />
                                <button className='w-fit rounded-full border-pink-600 bg-pink-600 transition outline outline-0 p-1.5 absolute md:right-2 md:bottom-2 right-0 bottom-0'><AiFillCamera className='w-5 h-5 md:w-9 md:h-9' /></button>
                            </div>
                            <span className='font-bold sm:text-3xl text-xl'>Eduardo Molina</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-14 mt-5 w-[90%]'>
                        <h1 className='bg-gray-200 text-gray-600 text-lg p-1  border-2 border-gray-200 rounded-sm'>Brandi</h1>
                        <h1 className='bg-gray-200 text-gray-600 text-lg p-1  border-2 border-gray-200 rounded-sm'>Love</h1>
                        <h1 className='bg-gray-200 text-gray-600 text-lg p-1  border-2 border-gray-200 rounded-sm'>brandilove</h1>
                        <h1 className='bg-gray-200 text-gray-600 text-lg p-1  border-2 border-gray-200 rounded-sm'>brandi@mailnator.com</h1>
                        <h1 className='bg-gray-200 text-gray-600 text-lg p-1  border-2 border-gray-200 rounded-sm'>United States of America</h1>
                        <h1 className='bg-gray-200 text-gray-600 text-lg p-1  border-2 border-gray-200 rounded-sm'>San Francisco</h1>
                        <h1 className='bg-gray-200 text-gray-600 text-lg p-1  border-2 border-gray-200 rounded-sm'>California</h1>
                        <h1 className='bg-gray-200 text-gray-600 text-lg p-1  border-2 border-gray-200 rounded-sm'>2nd'main road</h1>
                        <h1 className='bg-gray-200 text-gray-600 text-lg p-1  border-2 border-gray-200 rounded-sm'>90411</h1>
                        <h1 className='bg-gray-200 text-gray-600 text-lg p-1  border-2 border-gray-200 rounded-sm'>5'8''</h1>
                        <h1 className='bg-gray-200 text-gray-600 text-lg p-1  border-2 border-gray-200 rounded-sm'>57</h1>
                        <h1 className='bg-gray-200 text-gray-600 text-lg p-1  border-2 border-gray-200 rounded-sm'>Brown</h1>
                        <h1 className='bg-gray-200 text-gray-600 text-lg p-1  border-2 border-gray-200 rounded-sm'>Female</h1>
                        <h1 className='bg-gray-200 text-gray-600 text-lg p-1  border-2 border-gray-200 rounded-sm'>Straight, Lesbian, Bi</h1>
                    </div>
                </div>
            </section>
        </section >
    );
};