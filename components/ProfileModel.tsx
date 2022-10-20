import Link from 'next/link';
import Image from 'next/image';
import modelBg from 'public/assets/img/modelbg.jpg';
import { AiFillCamera } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { CardMedia, Container } from "@mui/material";
import { useRouter } from "next/router";
import CountrySelect from './wrappers/CountrySelect';
import MyEditor from './MyEditor';
import Ventana from './Ventana';
import CountryModel from './wrappers/CountryModel';
import { useRef } from 'react';
import React, { useState, useEffect } from 'react';
import { BaseEmoji, Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import NavbarMod from './NavbarMod';
import Avatar1 from './Avatar1';
import Router from "next/router";
import { string } from 'yup';

function ventana() {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=600,height=300,left=100,top=100`;

    open("/", "test", params);
}


export const BasicInfo = () => {
    const router = useRouter();
    const [input, setInput] = useState("");
    const [showEmojis, setShowEmojis] = useState(false);
    const addEmoji = (e: BaseEmoji) => {
        let sym = e.unified.split("-");
        let codesArray: any = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
    };

    let texto1;
    switch (router.locale) {
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

    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        if (inputRef.current !== null) {

            inputRef.current.click();
        }
    };

    const [perfil, setPerfil] = useState<any>({})
    
    useEffect(() => {  
        const fetchData = async () => {  
            
            let tk_code = localStorage.getItem('tkWomen')
            console.log("TOKEN "+tk_code);
            let token:any = tk_code? tk_code: ''
            var myHeaders = new Headers();
            myHeaders.append("Authorization", token);
            myHeaders.append("Cookie", "connect.sid=s%3ARXgmaXuczqJjqr1AOJwMZgzzG1e1ICgA.BP5u1GbXbWXaL4Nvmvb3kk%2BrEBiJbpux3pXNdpdsFg4");
        
            var options:RequestInit = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };

            const endpoint = "https://api.myadultfan.com/users/me";
            const response = await fetch(endpoint, options)
            const result = await response.text()
            var details = JSON.parse(result);
            console.log("??????"+details.status)
            let newObject: any = {};
            newObject.firstName = details.data.firstName
            newObject.lastName = details.data.lastName  
            newObject.username = details.data.username
            newObject.gender = details.data.gender 
            newObject.email = details.data.email
            newObject.status = details.data.status
            newObject.city = details.data.city
            newObject.zipcode = details.data.zipcode
            newObject.address = details.data.address
            newObject.height = details.data.height
            newObject.weight = details.data.weight
            newObject.bio = details.data.bio
            newObject.eyes = details.data.eyes
            newObject.sexualPreference = details.data.sexualPreference            
            newObject.avatar = details.data.avatar  
            newObject.cover = details.data.cover                              
            setPerfil(newObject) 
            localStorage.setItem("vatarProfile", details.data.avatar)
            localStorage.setItem("userProfile", details.data.username)
        }
        fetchData()
            // make sure to catch any error
            .catch(console.error);;
        
    }, [])

    let firstName, email, lastName, gender, status, foto:any, fondo:any;
    let usuario:any, city, intro, sexPref, dir, postal, altura, peso, color;
    if(perfil!==null){
        foto = perfil.avatar
        fondo = perfil.cover
        firstName = perfil.firstName
        lastName = perfil.lastName
        usuario = perfil.username
        email = perfil.email  
        gender = perfil.gender
        status = perfil.status
        city = perfil.city
        dir = perfil.address
        postal = perfil.zipcode
        altura = perfil.height
        peso = perfil.weight
        color = perfil.eyes
        sexPref = perfil.sexualPreference
        intro = perfil.bio
    } 

    function enviarData(){
        console.log("USUARIO",usuario)    
        localStorage.setItem("variable3", fondo)
        localStorage.setItem("perCover", foto)
        localStorage.setItem("nomUsuario", usuario)
    }  
    let arreglo:any = [usuario, foto];

    const handleSubmit = async (event:any) => {
        event.preventDefault()
        let tk_code = localStorage.getItem('tkWomen')
        console.log("TOKEN "+tk_code);
        let token:any = tk_code? tk_code: ''
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");
        
        let editor = []
        event.target.name.value ? editor[0]=event.target.name.value : editor[0]=perfil.firstName
        event.target.lname.value? editor[1]=event.target.lname.value : editor[1]=perfil.lastName
        event.target.username.value? editor[2]=event.target.username.value : editor[2]=perfil.username
        event.target.mail.value ? editor[3]=event.target.mail.value : editor[3]=perfil.email
        event.target.statusInf.value ? editor[4]=event.target.statusInf.value : editor[4]=perfil.status
        event.target.city.value ? editor[5]=event.target.city.value : editor[5]=perfil.city
        event.target.address.value ? editor[6]=event.target.address.value : editor[6]=perfil.address
        event.target.zipcode.value ? editor[7]=event.target.zipcode.value : editor[7]=perfil.zipcode
        event.target.height.value ? editor[8]=event.target.height.value : editor[8]=perfil.height
        event.target.weight.value ? editor[9]=event.target.weight.value : editor[9]=perfil.weight
        event.target.eyes.value ? editor[10]=event.target.eyes.value : editor[10]=perfil.eyes
        event.target.gender.value ? editor[11]=event.target.gender.value : editor[11]=perfil.gender
        event.target.preference.value ? editor[12]=event.target.preference.value : editor[12]=perfil.sexualPreference
        event.target.bio.value ? editor[13]=event.target.bio.value : editor[13]=perfil.bio
        
        var raw = JSON.stringify({
        "firstName": editor[0],
        "lastName": editor[1],
        "username": editor[2],
        "email": editor[3],   
        "country": "Argentina",
        "status": editor[4],
        "city": editor[5],
        "address": editor[6],
        "zipcode": editor[7],
        "height": editor[8],
        "weight":editor[9],
        "eyes": editor[10],
        "gender": editor[11],
        "sexualPreference": editor[12],
        "bio": editor[13]
        });

        var options:RequestInit = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://api.myadultfan.com/performers", options)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        alert("Record saved!")
    }
    
    return (
        <section >
            <NavbarMod />
             <div className="flex justify-between img-cover lg:w-full w-full h-64 lg:h-[70vh] bg-local md:bg-cover md:bg-top bg-contain bg-center" style={{backgroundImage: `url(${fondo})`}}>
                    <div className='ml-5 cont-avatar'>
                    <Avatar1 user={arreglo} />
                    </div>
                        
                    <div className='mt-10 mr-10'>
                    <Ventana />    
                    </div>
                </div>        
            <div className="pl-4 flex gap-7 mb-12 mt-10 w-full lg:text-2xl md:text-xs lg:justify-center">

                <a className="text-black border-b-[3px] border-black font-semibold text-right">PROFILE SETTINGS</a>

                <Link href='/admin/model/mydata/banking-settings' >
                    <a className="text-blue-450 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer" onClick={enviarData}>BANKING SETTINGS</a>
                </Link>

            </div>

            <div className="flex m-8 md:m-12">
                <form onSubmit={handleSubmit} className="bg-white rounded w-full">
                    <div className="lg:w-1/2 md:w-full m-auto">
                        <div className="mb-6 lg:mb-7 grid grid-cols-1 md:grid-cols-2 gap-7">
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='name'>
                                        First Name
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none " id="name" type="text" placeholder={firstName}></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
                                        Last Name
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="lname" type="text" placeholder={lastName}></input>
                            </div>
                        </div>
                        <div className="mb-6 lg:mb-7 grid grid-cols-1 md:grid-cols-2 gap-7">
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Username
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={usuario}></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mail">
                                        Email
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="mail" type="text" placeholder={email}></input>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Choose a country
                                </label>
                                <CountryModel />
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="statusInf">
                                        Status
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="statusInf" type="text" value={status}></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                        City
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder={city}></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                        Address
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder={dir}></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipcode">
                                        Postal code
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="zipcode" type="text" placeholder={postal}></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
                                        Height
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="height" type="text" placeholder={altura}></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
                                        Weight
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="weight" type="text" placeholder={peso}></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eyes">
                                        Eyes color
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="eyes" type="text" placeholder={color}></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                                        Gender
                                    </label>
                                </div>
                                <select id='gender' className='select select-info border border-gray-400 rounded bg-white w-full py-2 px-3 shadow' placeholder={gender}>
                                    <option className="text-sm" value={'male'}>Male</option>
                                    <option className="text-sm" value={'female'}>Female</option>
                                    <option className="text-sm" value={'transgender'}>Trans</option>
                                </select>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preference">
                                        Sexual preference
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="preference" type="text" placeholder={sexPref}></input>
                            </div>
                        </div>
                        <div className='mb-7'>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
                                Bio 
                            </label>
                          
                            {showEmojis && (
                                <div className="relative mb-2">
                                    <div className="md:absolute right-0 z-50 ">
                                        <Picker onSelect={addEmoji} />
                                    </div>
                                </div>
                            )}
                            <textarea id='bio' rows={5}  value={input} onChange={(e) => setInput(e.target.value)} className='border w-full border-gray-400 rounded' placeholder={intro} >
                            </textarea>
                            <p style={{ cursor: 'pointer' }} onClick={() => {
                                setShowEmojis(!showEmojis);
                            }}><svg
                            id="Layer_1"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                          >
                            <path
                              d="M23.87,11.43v1.4c0,.07,0,.15,0,.23-.05.44-.06.9-.15,1.34a12,12,0,0,1-8.39,9.17,9.15,9.15,0,0,1-2,.38l-.68.05H11.43l-.18,0c-.4,0-.81,0-1.21-.11a11.92,11.92,0,0,1-9.33-8,10.63,10.63,0,0,1-.51-2.3c0-.28-.05-.55-.07-.82v-1a.78.78,0,0,0,0-.16c0-.4.06-.8.11-1.19A11.17,11.17,0,0,1,1.51,6.54a11.73,11.73,0,0,1,4-4.38A11.93,11.93,0,0,1,8.76.7a10.08,10.08,0,0,1,2-.4l.57,0h1.11l.34,0a10.51,10.51,0,0,1,1.94.25A12.16,12.16,0,0,1,18.28,2,11.88,11.88,0,0,1,23.4,8.68a9.33,9.33,0,0,1,.43,2.1C23.84,11,23.86,11.21,23.87,11.43Zm-1.67.71A10.19,10.19,0,1,0,12,22.33,10.17,10.17,0,0,0,22.2,12.14Z"
                              fill="#fcb50d"
                            />
                            <path
                              d="M12,18.87a8.4,8.4,0,0,1-3.56-.78,8,8,0,0,1-2-1.25A1.7,1.7,0,0,1,6,16.4a.82.82,0,0,1,.69-1.2.78.78,0,0,1,.37.09,5.91,5.91,0,0,1,.61.41,7.25,7.25,0,0,0,4.67,1.47A7.1,7.1,0,0,0,15.86,16c.36-.23.69-.48,1.05-.71a.63.63,0,0,1,.78,0,.82.82,0,0,1,.42.77,1,1,0,0,1-.37.62,7.53,7.53,0,0,1-1.69,1.15,7.72,7.72,0,0,1-2.69.87C12.91,18.82,12.45,18.84,12,18.87Z"
                              fill="#fcb50d"
                            />
                            <path
                              d="M7.93,11.77a1.69,1.69,0,1,1,0-3.37,1.67,1.67,0,0,1,1.67,1.66A1.64,1.64,0,0,1,7.93,11.77Z"
                              fill="#fcb50d"
                            />
                            <path
                              d="M16.1,11.77A1.64,1.64,0,0,1,14.42,10,1.65,1.65,0,0,1,16.1,8.41a1.68,1.68,0,1,1,0,3.36Z"
                              fill="#fcb50d"
                            />
                          </svg></p>
                        </div>
                        <div className='mb-7'>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                                Welcome Video
                            </label>
                            <button className='border border-gray-400 rounded py-2 px-7 text-gray-700'
                                onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg> Select File
                            </button>
                            <input style={{ display: 'none' }} ref={inputRef} type="file" />
                        </div>
                        <div className='mb-7'>
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                            <label className="text-gray-700 text-sm font-bold mb-2"> Activate welcome video</label>
                        </div>

                        <div className="flex items-center justify-center">
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-80" type="submit">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section >
    );
};