import { LinkIcon } from 'components';
import { useFormControl, useFormGroup } from 'hooks';
import Home from 'public/assets/icons/BARRA HOMBRE-01.png';
import Star from 'public/assets/icons/BARRA HOMBRE-02.png';
import Mail from 'public/assets/icons/mess.png';
import ShoppingCart from 'public/assets/icons/BARRA HOMBRE-04.png';
import Search from 'public/assets/icons/lupa-02.png';
import Fire from 'public/assets/icons/barra modelo-02.png';
import Plus from 'public/assets/icons/barra modelo-03.png';
import ProfileIcon from 'public/assets/icons/menu usuario-02.png';
import ThumbUp from 'public/assets/icons/menu usuario-03.png';
import Heart from 'public/assets/icons/menu usuario-04.png';
import StarMenu from 'public/assets/icons/menu usuario-05.png';
import ShoppingCartMenu from 'public/assets/icons/menu usuario-06.png';
import LinkMenu from 'public/assets/icons/menu usuario-07.png';
import Block from 'public/assets/icons/menu modelo-07.png';
import Earn from 'public/assets/icons/menu modelo-06.png'
import SingOut from 'public/assets/icons/menu usuario-08.png';
import FireMenu from 'public/assets/icons/menu modelo-03.png';
import VideoCam from 'public/assets/icons/menu modelo-04.png';
import Cam from 'public/assets/icons/menu modelo-05.png';
import { MdClear } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
//import { userService } from 'services';
import DesplgMobile from 'components/desplgMobile';
import { signOut } from "next-auth/react"
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';


export const MobileMenuPer = (props: any) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
   
  const [isAuth, setIsAuth] = useState(false);
  
  const [isInfluencers, setIsInfluencers] = useState(true);  
  
  const SearchForm = useFormGroup({ search: useFormControl(['']) });

  const handleOpen = (ev: any) => {
    setOpen(!open);
  };

  const logout = () => {
    setOpen(false);
   // userService.logout();
  };

  function salir(){
    localStorage.clear();
    localStorage.clear();
  }
  
  return (
    <>
      <div className="flex justify-end gap-2 md:gap-3 h-10 md:h-12">
        <div className="relative ml-4 w-7 h-7 md:w-9 md:h-9 my-1">
          <Link href='/influencers'>          
            <a>
              <Image src={Home} layout="fill" />
            </a>
          </Link>
        </div>
        
        <div className="relative w-8 h-8 md:w-10 md:h-10 my-1 pb-6 ">
          <Link href='/post/new' >
            <a>
              <Image src={Fire} layout="fill" />
            </a>
          </Link>  
        </div>
          
        <div className="relative h-8 w-8 md:w-11 md:h-11 top-1">
          <Link href={''}>
            <a>
              <Image src={Plus} layout="fill" />
            </a>
          </Link>
        </div>
        
        <div className="relative w-6 h-6 md:w-7 md:h-7 md:top-0.5 my-2">
          <Link href='/chat/id' >            
            <a>
              <Image src={Mail} layout="fill" />
              <div className="absolute -top-1 -right-1 bg-maf-green rounded-full font-bold px-[0.175rem] md:px-1 py-[0.015rem] text-[0.5rem] md:text-xs">
                <p className='text-black'>125</p>
              </div>
            </a>
          </Link>
        </div>
        <div className="relative w-8 h-8 md:w-10 md:h-10">
          <Image src={Search} layout="fill" />
        </div>

        <div
          onClick={handleOpen}
          className={`relative rounded-full w-8 md:w-10 h-8 md:h-10 mr-2 visible transition-all duration-300 delay-75 top-1 cursor-pointer
            ${open ? 'invisible' : 'text-white'}
            `}
        >
          <img
            src={
              isInfluencers
                ? 'https://randomuser.me/api/portraits/women/34.jpg'
                : 'https://randomuser.me/api/portraits/men/35.jpg'
            }
            alt="{women.name}"
            className="rounded-full"
          />
        </div>
      </div>

      <div
        onClick={handleOpen}
        className={`'z-40 opacity-0 bg-slate-600/50 w-full h-screen top-0 left-0 transition-all duration-300 delay-100
        ${open ? 'fixed opacity-100' : 'hidden'}
        `}
      ></div>

      <div
        className={`transition-all duration-500 fixed bg-white z-50 top-0  right-0 h-screen shadow-lg
         md:w-1/5 w-3/5
        ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex">
          <div className="relative rounded-full flex-none w-14 h-14 border-2 border-blue-450 visible m-2 cursor-pointer text-white">
            <img
              src={
                isInfluencers
                  ? 'https://randomuser.me/api/portraits/women/34.jpg'
                  : 'https://randomuser.me/api/portraits/men/35.jpg'
              }
              alt="{women.name}"
              className="rounded-full"
            />
          </div>
          <div className="mt-2">
            {isInfluencers ? (
              <>
                <strong>LucyBlack18</strong>
                <br />
                <strong>@LucyBlack</strong>
              </>
            ) : (
              <>
                <strong>Brad Brown</strong>
                <br />
                <strong>@Brad Brown</strong>
              </>
            )}
          </div>
          <MdClear
            onClick={handleOpen}
            className="text-4xl mx-1 w-50 text-blue-450 py-1 my-2 absolute right-0 z-10"
          />
        </div>

        <div className="flex-none transition-all duration-200">
          <div className="px-2 relative transition-all duration-500 w-full">
            <nav id="nav" className="lg:text-sm lg:leading-6 relative">
             
              {isInfluencers && (
                <ul>
                  <li>
                    <Link href='/admin/model/profile' >
                      <a className="group flex items-center my-2 font-medium text-blue-450"> 
                        <div className="h-6 w-6 relative mx-4">
                          <Image
                            src={ProfileIcon}
                            layout="fill"
                            className="object-fill"
                          />
                        </div>
                        Edit Profile
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/admin/model/Subscribers/MySubscribers/' >
                      <a className="group flex items-center my-2 font-medium text-blue-450"> 
                        <div className="h-6 w-6 relative mx-4">
                          <Image
                            src={Heart}
                            layout="fill"
                            className="object-fill"
                          />
                        </div>
                        Subscribers
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/admin/model/Blocked/BlockUsers/' >
                      <a className="group flex items-center my-2 font-medium text-blue-450"> 
                        <div className="h-6 w-6 relative mx-4">
                          <Image
                            src={Block}
                            layout="fill"
                            className="object-fill"
                          />
                        </div>
                        Blacklist
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/influencers/id/feed/' >
                      <a className="group flex items-center my-2 font-medium text-blue-450"> 
                        <div className="h-6 w-6 relative mx-4">
                          <Image
                            src={FireMenu}
                            layout="fill"
                            className="object-fill"
                          />
                        </div>
                        Feeds
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/admin/model/video/video-management' >
                      <a className="group flex items-center my-2 font-medium text-blue-450"> 
                        <div className="h-6 w-6 relative mx-4">
                          <Image
                            src={VideoCam}
                            layout="fill"
                            className="object-fill"
                          />
                        </div>
                        Videos
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/admin/model/gallery/gallery-managment' >
                      <a className="group flex items-center my-2 font-medium text-blue-450"> 
                        <div className="h-6 w-6 relative mx-4">
                          <Image
                            src={Cam}
                            layout="fill"
                            className="object-fill"
                          />
                        </div>
                        Galleries
                      </a>
                    </Link>
                  </li>                  
                  <li>
                    <Link href='/admin/model/Earning/EarningReport' >
                      <a className="group flex items-center my-2 font-medium text-blue-450"> 
                        <div className="h-6 w-6 relative mx-4">
                          <Image
                            src={Earn}
                            layout="fill"
                            className="object-fill"
                          />
                        </div>
                        Earnings
                      </a>
                    </Link>
                  </li>
                  <li> 
                    <Link href='/influencers' >                    
                    <a className="group flex items-center mb-6 font-medium text-blue-450" onClick={salir}>                    
                      <div className="cursor-pointer flex">
                        <div className="h-6 w-6 relative mx-4">
                          <Image
                            src={SingOut}
                            layout="fill"
                            className="object-fill"
                          />
                        </div>
                        Sing Out
                      </div>
                    </a>   
                    </Link>           
                  </li>
                  <DesplgMobile />
                </ul>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
