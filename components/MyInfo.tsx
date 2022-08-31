import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { CardMedia } from "@mui/material";
import { useRouter } from "next/router";
import Router from "next/router";
import React, { useState, useEffect } from 'react';
import NavbarUsr from './NavbarUsr';


export const MyInfo = () => {
    const router = useRouter();
    let txtMy1,txtMy2,txtMy3,txtMy4,txtMy5,txtMy6,txtMy7,txtMy8;
    switch(router.locale) {    
      case "es":
        txtMy1 = 'Información básica';
        txtMy2 = 'Cambia la contraseña';
        txtMy3 = 'Primer nombre';
        txtMy4 = 'Nombre de usuario';
        txtMy5 = 'Dirección de correo electrónico';
        txtMy6 = 'Apellido';
        txtMy7 = 'Género';
        txtMy8 = 'Guardar cambios';
          break;
      case "en-US":
        txtMy1 = 'Basic Information';
        txtMy2 = 'Change Password';
        txtMy3 = 'First name';
        txtMy4 = 'Username';
        txtMy5 = 'Email address';
        txtMy6 = 'Last name';
        txtMy7 = 'Gender';
        txtMy8 = 'Save Changes';
          break;
      case "pt":
        txtMy1 = 'Informação básica';
        txtMy2 = 'Mudar senha';
        txtMy3 = 'Primeiro nome';
        txtMy4 = 'Nome do usuário';
        txtMy5 = 'Endereço de email';
        txtMy6 = 'Último nome';
        txtMy7 = 'Gênero';
        txtMy8 = 'Salve as alterações';
          break;
      case "ru":
        txtMy1 = 'Основная информация';
        txtMy2 = 'Сменить пароль';
        txtMy3 = 'Имя';
        txtMy4 = 'Имя пользователя';
        txtMy5 = 'Адрес электронной почты';
        txtMy6 = 'Фамилия';
        txtMy7 = 'Пол';
        txtMy8 = 'Сохранить изменения';
      default:
          
    }
    

    const [datos, setDatos] = useState<any>({})
    
    useEffect(() => {  
        const fetchData = async () => {  
            let tk_code = localStorage.getItem('tq')
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

            const endpoint = "http://api.myadultfan.com/users/me";
            const response = await fetch(endpoint, options)
            const result = await response.text()
            var details = JSON.parse(result);
            console.log("??????"+details.status)
            let newObject: any = {};
            newObject.firstName = details.data.firstName
            newObject.username = details.data.username
            newObject.email = details.data.email
            newObject.lastName = details.data.lastName                        
            setDatos(newObject) 
        }
        fetchData()
            // make sure to catch any error
            .catch(console.error);;
        
    }, [])
   
    const [gender, setGender] = useState('')

    const handleSubmit = async (event:any) => {
        event.preventDefault()

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "tk_code");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": event.target.email.value,
            "firstName": event.target.name.value,
            "gender": gender,
            "lastName": event.target.lname.value,
            "username": event.target.username.value
        });
        
        var requestOptions:RequestInit = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };

          fetch("http://api.myadultfan.com/users", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }
let firstName, username, email, lastName = ''
    if(datos!==null){
       firstName = datos.firstName
        console.log("LOco de la cabeza "+datos.firstName) 
        username = datos.username
        email = datos.email  
        lastName = datos.lastName
    }    
    
    return (
        <section>
            <NavbarUsr />
            <div className="m-8 md:m-12">
                <div className=" flex gap-4 mb-32 justify-around w-full lg:text-lg text-sm lg:justify-start ">
                    <a className="md:py-2 md:px-2 text-blue-450 border-b-[3px] border-blue-450 font-semibold ">{txtMy1}</a>
                    <Link href='/admin/users/MyInfo/ChangePassword'>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300">{txtMy2}</a>
                    </Link>
                </div>
                <div className="w-fit m-auto ">
                    <form onSubmit={handleSubmit} className="bg-white rounded px-4 pt-6 pb-8 mb-4">
                        <div className="mb-6 lg:mb-24 grid grid-cols-1 md:grid-cols-2 gap-9  ">
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='name'>
                                        {txtMy3}
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" 
                                value={firstName}></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        {txtMy4}
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" 
                                value={username}></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        {txtMy5}
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" value={email}></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
                                        {txtMy6}
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="lname" type="text" value={lastName}></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genero">
                                        {txtMy7}
                                    </label>
                                </div>
                                <select name="genero" id="genero" className="select select-info w-full max-w-xs py-2 text-sm border-gray-400 border rounded-md bg-white bg-clip-padding"  
                                onChange={(e) => {setGender(e.target.value)} } defaultValue={'male'} >
                                <option className="text-sm" value={'male'}>Male</option>
                                <option className="text-sm" value={'female'}>Female</option>
                                <option className="text-sm" value={'transgender'}>Transgender</option>
                                </select>
                            </div>
                     

                            <div className="grid grid-cols-1 my-3 mb-3">
                                <div>
                                    <div className="flex justify-center">
                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col w-full h-[148px] hover:cursor-pointer">
                                                <div className="flex flex-col items-center justify-center">
                                                    <CardMedia
                                                        component="img"
                                                        image="/assets/img/iconos doc-10.png"
                                                        alt=""
                                                        sx={{
                                                            width: "144px",
                                                        }}
                                                    />
                                                </div>
                                                <input type="file" className="opacity-0" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-blue-450 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                {txtMy8}
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </section >
    );
};





