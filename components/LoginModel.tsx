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
    const endpoint = 'http://api-temp.myadultfan.com/auth/login/email'

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
    <h2 className="text-black text-xs md:text-sm font-extrabold font-lemon-milk text-center">
        Influencers
      </h2>
      <h1 className="text-blue-450 text-xl md:text-2xl font-extrabold font-lemon-milk text-center -mt-1
      mb-4">
          SIGN IN
      </h1>
      <p className="text-center text-black mb-3 font-myriad font-bold">With</p>
      <div className="max-w-[70%] mx-auto grid grid-cols-2 gap-4 place-items-center text-white text-sm font-bold leading-6 pb-3 sm:pb-6">
        <a className="place-self-end" onClick={() => signIn("google", { callbackUrl: "/influencers" })}>
          <CardMedia
            component="img"
            image="/assets/img/iconos redes-01.png"
            alt=""
            sx={{
              width: "95px",
            }}
          />
        </a>

        <a className="place-self-start" onClick={() => signIn("twitter", { callbackUrl: "/influencers" })}>
          <CardMedia
            component="img"
            image="/assets/img/iconos redes-03.png"
            alt=""
            sx={{
              width: "95px",
            }}
          />
        </a>
      </div>
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
            onClick={() => router.push("/register/model")}
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