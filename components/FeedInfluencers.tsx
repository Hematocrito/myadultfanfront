import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import NavbarMod from "./NavbarMod";

const Publication = dynamic(() => import('./Publication'),
  { loading: () => <p>Loading ...</p> });

export default function FeedInfluencers({ models }: any) {
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
  const [feed, setFeed] = useState<any>({})

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
      const result = await response.text()
      var details = JSON.parse(result);
      
      let publication: any = {};
      publication.id = details.data._id
      publication.type = details.data.type
      publication.text = details.data.text
      publication.fileIds = details.data.fileIds
      console.log("filesId "+publication.fileIds)
    }
    fetchData()
            // make sure to catch any error
            .catch(console.error);;
    }, [])

  return (
    <>
      {models.map((model: any) => (
        <div key={model.id} className="md:mx-[33%]">
          <Publication file={{
    "fileIds": [],
    "pollIds": [],
    "status": "active",
    "isPinned": false,
    "totalLike": 0,
    "totalComment": 0,
    "isSale": false,
    "price": 0,
    "_id": "62b25485db1106d1ebb49060",
    "type": "text",
    "text": "Bla bla bla",
    "orientation": "male",
    "fromSource": "performer",
    "fromSourceId": {
        "_id": "629a497e10c9f89d2df71d0b",
        "name": "Juanpa",
        "firstName": "Juan",
        "lastName": "Lasso",
        "username": "juanpiscamo",
        "gender": "male",
        "avatarId": null
    },
    "pollExpiredAt": "2022-06-21T23:30:13.138Z",
    "createdAt": "2022-06-21T23:30:13.138Z",
    "updatedAt": "2022-06-21T23:30:13.138Z",
    "__v": 0
}} />
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
