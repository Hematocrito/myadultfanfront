import Link from 'next/link';
import Image from 'next/image';
import modelBg from 'public/assets/img/modelbg.jpg';
import { AiFillCamera } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { CardMedia, Container } from "@mui/material";
import { useRouter } from "next/router";
import CountrySelect from './wrappers/CountrySelect';
import Ventana from './Ventana';
import VentanaAvatar from './Ventana-avatar';
import { useEffect, useState } from 'react';
import NavbarMod from './NavbarMod';

export const BasicInfo = () => {
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
  const [cover, setCover] = useState('');
  var vacio = ['', '', '']
  const [user, setUser] = useState(vacio);
  
  useEffect(() => {  
    let var3 = localStorage.getItem('cover') 
    if(var3!=null) setCover(var3)
  }, [])  
  
    return (
        <section > 
            <NavbarMod />              
                <div className="flex justify-between img-cover lg:w-full w-full h-64 lg:h-[70vh] bg-local md:bg-cover md:bg-top bg-contain bg-center" style={{backgroundImage: `url(${cover})`}}>
                    <div className='mt-40 ml-5'>
                    <VentanaAvatar />
                    </div>
                        
                    <div className='mt-10 mr-10'>
                    <Ventana />    
                    </div>
                </div> 
                
                <div className="pl-4 flex gap-7 mb-12 mt-10 w-full lg:text-2xl md:text-xs lg:justify-center">
                    
                        <Link href='/admin/model/profile' >
                            <a className="lg:py-2 lg:px-2 md:text-right md:py-2 md:px-2 lg:text-2xl md:text-xs text-black  border-black font-semibold">PROFILE SETTINGS</a>
                        </Link>
                    
                    
                        <a className="md:py-2 md:px-2 lg:text-2xl md:text-xs text-blue-450 font-semibold hover:text-blue-450 border-b-[3px] border-blue-450 transition duration-300 cursor-pointer">BANKING SETTINGS</a>                    
                </div>
          
                <div className="flex m-8 md:m-12">
                  <form className="bg-white rounded w-full">
                    <div className="lg:w-1/2 md:w-full m-auto">
                        <div className="mb-6 lg:mb-7 grid grid-cols-1 md:grid-cols-2 gap-7">
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='name'>
                                        First Name
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="First name"></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
                                        Last Name
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="lname" type="text" placeholder="Last name"></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='name'>
                                        Bank name
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Bank name"></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
                                        Bank Account
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="lname" type="text" placeholder="Bank Account"></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-0">
                                        Country
                                    </label>
                                </div>
                                <CountrySelect />
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
                                        State/Country/Province
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="State"></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                                        City
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="City"></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                                        Adress
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Adress"></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                                        Bank Routing
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Bank Routing"></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                                        Bank swift code
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Bank swift code"></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                                        SSN
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="SSN"></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                                        Another way to pay
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Another way to pay"></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                                        Paypal
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Paypal account email"></input>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-80" type="button">
                                Save Changes
                            </button>
                        </div> 
                         
                    </div>   
                   </form>    
                </div>            
        </section >
    );
};