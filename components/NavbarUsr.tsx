import Image from "next/image";
import Logo from "public/logo.jpg";
import Link from "next/link";
import { useFormControl, useFormGroup } from "hooks";
import { MdLogin, MdMenu, MdSearch } from "react-icons/md";
import { Input } from "./Input";
import { LinkIcon } from "./LinkIcon";
import { SiFacebook, SiTwitter } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { MobileMenuAuth } from "./MobileMenuAuth";
import { SplitButton } from "./utils/SplitButton";
import Dropdown from "./Dropdown";
import DesplgMobile from "./desplgMobile";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react"
import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export const NavbarUsr = () => {
  let user = 'status'

  const [open, setOpen] = useState(false);

  const SearchForm = useFormGroup({ search: useFormControl([""]) });

  const handleOpen = (ev: any) => {
    setOpen(!open);
  };
 
  return (
    <nav className="flex relative h-12 md:h-14 z-50 text-white">
      <div className="w-4/5 sm:w-3/6 lg:w-4/12 flex justify-center items-center bg-white px-[2px]">
        <div className="w-40 md:w-48 h-auto">
          <div className="aspect-[5/1] relative">
            <Link href={"/influencers"}>
              <a >
                <Image src={Logo} layout="fill" alt="logo" priority={true} />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full bg-blue-450 pr-[16px] md:pr-[0px]">
        <div className="flex grow" />
        {!user && (
          <>
            <div className="hidden lg:block">
              <div className="hidden md:flex items-center justify-end h-12">
                <Input
                  name="search"
                  formGroup={SearchForm}
                  type="search"
                  mode="light"
                  color="white"
                >
                  {["", ""]}
                </Input>
                <div className="text-white font-base text-lg">
                  <Link href={"/register/fans"}>
                    <a className="mx-3">Sign up</a>
                  </Link>
                  <Link href={"/login/fans"}>
                    <a className="mx-3">Sign in</a>
                  </Link>
                  <Dropdown />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end h-12">
              <MdSearch
                onClick={handleOpen}
                className={`text-3xl text-white mx-1 py-1 cursor-pointer lg:hidden`}
              />
              <MdMenu
                onClick={handleOpen}
                className={`text-4xl visible mx-1 transition-all duration-300 delay-75 py-1 cursor-pointer lg:hidden
                  ${open ? "invisible" : "text-white"}
                `}
              ></MdMenu>
            </div>
            <div
              onClick={handleOpen}
              className={`z-40 opacity-0 bg-slate-600/50 w-full h-screen top-0 left-0 transition-all duration-300 delay-100
                ${open ? "fixed opacity-100" : "hidden"}
              `}
            ></div>
            <div
              className={`fixed bg-white z-50 top-0 right-0 h-screen shadow-lg w-2/3 sm:w-[350px] md:w-[450px] transition-all duration-500 
                ${open ? "translate-x-0" : "translate-x-full"}
              `}
            >
              <MdMenu
                onClick={handleOpen}
                className={
                  "text-4xl mx-1 transition-all duration-500 text-black py-1 my-2 absolute z-10 cursor-pointer"
                }
              ></MdMenu>
              <div className={"relative transition-all duration-200"}>
                <header className="absolute -top-[60px] w-full shadow py-2">
                  <h2 className="w-full text-center text-xl font-semibold text-black">
                    Search
                  </h2>
                </header>
                <div
                  className={
                    "mt-16 px-2 relative transition-all duration-500 w-full"
                  }
                >
                  <Input name="search" formGroup={SearchForm} type="search">
                    {["", ""]}
                  </Input>
                  <ul className="w-full my-10">
                    <LinkIcon to="/login/fans" name="Login">
                      <MdLogin className="mx-4 text-xl"></MdLogin>
                    </LinkIcon>
                    <li className="peer w-full my-5 transition-all duration-300 text-white bg-blue-450 hover:text-black hover:bg-gray-200 flex items-center justify-center shadow hover:shadow-lg shadow-blue-750/30 px-2 py-2 rounded-3xl cursor-pointer">
                      <Link href={"/register/fans"}>
                        <a className="font-semibold tracking-wide mx-4 w-full text-center">
                          Register
                        </a>
                      </Link>
                    </li>                    
                  <DesplgMobile />  
                  </ul>
                  
                </div>
                <footer className="fixed bottom-0 py-9 bg-white w-full flex items-center justify-center">
                  <div className="mx-2 flex items-center justify-center bg-blue-450 rounded-full p-2 w-10 h-10 shadow-md shadow-blue-750/30">
                    <SiTwitter className="text-white text-xl"></SiTwitter>
                  </div>
                  <div className="mx-2 flex items-center justify-center bg-blue-450 rounded-full p-2 w-10 h-10 shadow-md shadow-blue-750/30">
                    <SiFacebook className="text-white text-xl"></SiFacebook>
                  </div>
                  <div className="mx-2 flex items-center justify-center bg-blue-450 rounded-full p-2 w-10 h-10 shadow-md shadow-blue-750/30">
                    <AiFillInstagram className="text-white text-2xl"></AiFillInstagram>
                  </div>
                </footer>
              </div>
            </div>
          </>
        )}
        {user && <MobileMenuAuth />}
      </div>
    </nav>
  );
};

export default NavbarUsr;
