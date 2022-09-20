import Image from "next/dist/client/image";
import styles from "styles/login.module.css";
import Logo from "public/logo.jpg";
import { AppLink } from "utils/appLink";
import { authService } from "services";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { PublicContainer } from "components/wrappers/PublicContainer";
import { MiniContainer } from "components/wrappers/MiniContainer";
import { Component } from "react";
import { TextInputLine } from "components/wrappers/TextInputLine";
import { CardMedia } from "@mui/material";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";
import Navbar from "./Navbar";


const LoginModel = (props: { login: "model" | "fans" }) => {
  // Sección de Idiomas
  const router = useRouter();
  let texto1, texto2, texto3, texto4, texto5;
  switch (router.locale) {
    case "es":
      texto1 = "Tu correo electrónico";
      texto2 = "Tu contraseña";
      texto3 =
        "*Los nombres de usuario y las contraseñas distinguen entre MAYUSCULAS y MINUSCULAS";
      texto4 = "¿Se te olvidó tu contraseña?";
      texto5 = "Registrarse";
      break;
    case "en-US":
      texto1 = "Your email";
      texto2 = "Your password";
      texto3 = "*Usernames and passwords are CASE SENSITIVE";
      texto4 = "Forgot password?";
      texto5 = "Register";
      break;
    case "pt":
      texto1 = "Seu email";
      texto2 = "Sua senha";
      texto3 =
        "*Nomes de usuário e senhas são sensíveis a maiúsculas e minúsculas";
      texto4 = "Esqueceu sua senha?";
      texto5 = "Registro";
      break;
    case "ru":
      texto1 = "Ваш адрес электронной почты";
      texto2 = "Ваш пароль";
      texto3 = "*Имена пользователей и пароли вводятся с учетом регистра";
      texto4 = "Забыли пароль?";
      texto5 = "регистр";
    default:
  }

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("*Email is required").email("*Email invalid"),
    password: Yup.string().required("*Password is required"),
  });

  // get functions to build form with useForm() hook
  const {
    register,
    //handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(validationSchema) });

  const handleSubmit = async (event:any) => {
    event.preventDefault()

    // Get data from the form.
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = 'https://api.myadultfan.com/auth/login/email'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    const result = await response.text()
    var myToken = JSON.parse(result);
    const tken = myToken.data.token
    localStorage.setItem('tkWomen', tken);
    localStorage.setItem('sesion', 'true');
    if(myToken.status===0){
      router.push('/influencers/id/feed');
    }else if(myToken.statusCode===400){
      alert("Error")
    }else if(myToken.statusCode===404){
      alert("Not found")
    }
  }
  
  return (
  <div>
    <Navbar />
    <PublicContainer>      
      <h2 className="text-blue-450 text-xl font-extrabold font-lemon-milk text-center mt-2">
        INFLUENCER
      </h2>
      <h1 className="text-black text-lg md:text-lg font-extrabold font-lemon-milk text-center
      mb-5">
        SIGN IN
      </h1>
      
      <p className="text-center text-black font-myriad font-bold">With</p>
      {/*
        <a className="object-fit" onClick={() => signIn("google", { callbackUrl: "/influencers" })}>
          <CardMedia
            component="img"
            image="/assets/img/iconos redes-01.png"
            alt=""            
          />
  </a>*/}
      <button type="button" className="text-gray-400 bg-white hover:bg-blue-150 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-semibold rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 first-letter:mb-2 w-full border-blue-150 border-2 my-5">          
        <svg version="1.1" className="w-6 ml-14 " id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
        <g>
          <path fill="#FF7976" d="M32.709,0.835c-9.453,0-17.881,4.146-23.591,10.719c-1.74,2.005-3.231,4.232-4.417,6.641l10.501,8.021
            c1.217-3.693,3.567-6.862,6.64-9.104c3.043-2.217,6.795-3.527,10.866-3.527c4.398,0,8.37,1.559,11.491,4.109l9.079-9.066
            C47.747,3.81,40.654,0.835,32.709,0.835z"/>
          <path fill="#E3443A" d="M4.702,18.194l10.501,8.021c1.217-3.693,3.567-6.862,6.64-9.104c3.043-2.217,6.795-3.527,10.866-3.527
            c4.398,0,8.37,1.559,11.491,4.109l9.079-9.066c-5.533-4.816-12.625-7.792-20.57-7.792"/>
          <path fill="#F4D72C" d="M14.268,32c0-0.287,0.021-0.57,0.034-0.854c0.082-1.716,0.387-3.37,0.901-4.931L4.702,18.194
            c-1.931,3.917-3.051,8.303-3.177,12.952C1.517,31.431,1.5,31.714,1.5,32c0,0.287,0.017,0.571,0.024,0.856
            c0.126,4.643,1.246,9.027,3.172,12.94l10.498-8.036c-0.509-1.553-0.812-3.2-0.892-4.905C14.289,32.571,14.268,32.288,14.268,32z"/>
          <path fill="#F7B92B" d="M4.697,45.796l10.498-8.036c-0.509-1.553-0.812-3.2-0.892-4.905c-0.013-0.285-0.034-0.568-0.034-0.856
            c0-0.287,0.021-0.57,0.034-0.854c0.082-1.716,0.387-3.37,0.901-4.931L4.702,18.194"/>
          <path fill="#F7B92B" d="M1.5,32"/>
          <path fill="#59C96E" d="M43.074,47.691c-2.813,1.772-6.356,2.725-10.365,2.725c-2.346,0-4.581-0.446-6.641-1.239
            c-1.517-0.584-2.933-1.365-4.226-2.305c-3.072-2.237-5.423-5.396-6.64-9.086l-10.501,8.02c1.184,2.405,2.672,4.629,4.409,6.631
            c5.71,6.58,14.144,10.729,23.599,10.729c2.86,0,5.671-0.382,8.355-1.126c4.462-1.238,8.574-3.479,11.979-6.641L43.074,47.691z"/>
          <path fill="#40A557" d="M4.702,45.806c1.184,2.405,2.672,4.629,4.409,6.631c5.71,6.58,14.144,10.729,23.599,10.729
            c2.86,0,5.671-0.382,8.355-1.126c4.462-1.238,8.574-3.479,11.979-6.641l-9.97-7.707c-2.813,1.772-6.356,2.725-10.365,2.725
            c-2.346,0-4.581-0.446-6.641-1.239c-1.517-0.584-2.933-1.365-4.226-2.305"/>
          <path fill="#0FAEF4" d="M61.791,26H59.92H33v5.146v1.71V38h16.449c-0.837,4-3.115,7.636-6.375,9.691l9.97,7.707
            c2.734-2.538,5.005-5.723,6.639-9.407c1.792-4.036,2.817-8.87,2.817-14.182C62.5,29.969,62.217,28,61.791,26z"/>
          <path fill="#4087ED" d="M53.044,55.398c2.734-2.538,5.025-5.759,6.659-9.443c1.792-4.036,2.807-8.852,2.807-14.163
            c0-1.841-0.293-3.792-0.719-5.792H60"/>
          <polyline fill="#4087ED" points="33,31 33,32.856 33,38 49,38 	"/>
        </g>
        </svg>
        &nbsp;&nbsp;Sign in with Google
      </button>        
      
      <p className="text-center text-black mb-4 font-myriad font-bold">Or by email</p>
      <form onSubmit={handleSubmit} >
        <TextInputLine
          placeHolder={texto1}
          fieldName="email"
          register={register}
          errors={errors}
        />

        <TextInputLine
          placeHolder={texto2}
          fieldName="password"
          register={register}
          errors={errors}
          type="password"
        />

        <span className="text-xs text-black font-light text-center w-full block ">
          {texto3}
        </span>
        <div className="mt-10 mb-4 flex flex-col items-center justify-center">
          {/* className="bg-gradient-to-r from-[#05D6F2] to-[#28B2C3] text-white
          font-semibold px-16 py-1 rounded-full block mx-auto" */}
          <button
            type="submit"
            className="font-medium  rounded-3xl w-52 px-1 py-1 text-lg my-2 bg-gradient-to-r from-[#05D6F2] to-[#28B2C3]  text-white"
          >
            Sign in
          </button>

          <span className="text-xs leading-loose text-blue-450 font-semibold mb-2 cursor-pointer">
            {texto4}
          </span>          
        </div>
      </form>
      <div className="flex flex-col items-center justify-center">
          <button
            onClick={() => router.push("/register/model-full")}
            className="border-2 font-medium shadow-md text-black shadow-black/30 border-white rounded-3xl w-52 px-1 py-1 text-lg my-2"
          >
            {texto5}
          </button>
      </div>      
    </PublicContainer>
    
  </div>
  );
};


export default LoginModel;