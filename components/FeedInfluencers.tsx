import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import NavbarMod from "./NavbarMod";

const Publication = dynamic(() => import('./Publication'),
  { loading: () => <p>Loading ...</p> });

export default function FeedInfluencers() {
  const router = useRouter();
  let texto1, texto2, texto3, texto4, texto5;
  switch (router.locale) {
    case "es":
      texto1 = 'Tu correo electrónico';
      texto2 = 'Tu contraseña';
      texto3 = "*Los nombres de usuario y las contraseñas distinguen entre MAYUSCULAS y MINUSCULAS";
      texto4 = "¿Se te olvidó tu contraseña?";
      texto5 = "Registrarse";
      break;
    case "en-US":
      texto1 = 'Your email';
      texto2 = 'Your password';
      texto3 = "*Usernames and passwords are CASE SENSITIVE";
      texto4 = "Forgot password?";
      texto5 = "Register";
      break;
    case "pt":
      texto1 = 'Seu email';
      texto2 = 'Sua senha';
      texto3 = "*Nomes de usuário e senhas são sensíveis a maiúsculas e minúsculas";
      texto4 = "Esqueceu sua senha?";
      texto5 = "Registro";
      break;
    case "ru":
      texto1 = 'Ваш адрес электронной почты';
      texto2 = 'Ваш пароль';
      texto3 = "*Имена пользователей и пароли вводятся с учетом регистра";
      texto4 = "Забыли пароль?";
      texto5 = "регистр";
    default:

  }

  const [more, setMore] = useState(true);
  const [datos, setDatos] = useState([]);

  useEffect(() => {  
    //Para que es esta sesión??
    let localSesion = localStorage.getItem('sesion')  
    console.log("SESION FEED"+localSesion)
    const fetchData = async () => {    
      let tk_code = localStorage.getItem('tkWomen')
      console.log("TOKEN "+tk_code);
      let token:any = tk_code? tk_code: ''

      var myHeaders = new Headers();
      myHeaders.append("Authorization", token);

      var options:RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      const endpoint = "https://api.myadultfan.com/feeds/performers";
      const response = await fetch(endpoint, options);
      const result:any = await response.json();

      let arreglo:any = []
      const items = result.data.data.map((item:any)=>{
        let feed:any = {};  
        feed.id = item._id 
        feed.texto = item.text  
        feed.creado = item.createdAt
        feed.nombre = item['performer']['username']
        feed.avatar = item['performer']['avatar']
        feed.photo = item['files'][0]['url'] 
        //console.log(item['files'][0]['url'])
        arreglo.push(feed)
      })
      setDatos(arreglo)      
    }
    fetchData()
            // make sure to catch any error
            .catch(console.error);;
    }, [])
    
  return (
    <>
      {datos.map((dato: any) => (
        <div key={dato.id} className="md:mx-[33%]">
          <Publication file={dato} />
        </div>
      ))}
      {more && (
        <div className="flex justify-center">
          <button className="bg-white text-gray-400 font-extrabold text-center rounded-xl self-center my-2 px-6 py-1 text-base border border-gray-400">
            Load more post
          </button>
        </div>
      )}
    </>
  );
}
