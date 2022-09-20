import Link from "next/link";
import styles from "styles/login.module.css";
// import { useRegisterController } from 'controllers';
import { AppLink } from "utils";
import { Input, Button, SelectRounded, Checkbox } from "components";
import SelectReact, { components, OptionProps } from "react-select";
import { PublicContainer } from "components/wrappers/PublicContainer";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { TextInputRegister } from "components/wrappers/TextInputRegister";
import { authService } from "services";
import Image from "next/image";
import { CardMedia } from "@mui/material";
import CountrySelect from "./wrappers/CountrySelect";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Navbar from "./Navbar";

/*
const singleOption = (props: OptionProps<any>) => (
  <components.Option className="inline-block" {...props}>
    <Image src={props.data.flag} alt="flag" height={15} width={30} />
    <span className="leading-5 ml-3">{props.data.name}</span>
  </components.Option>
);

const singleValue = (props: any) => (
  <components.SingleValue className="inline-block" {...props}>
    <Image src={props.data.flag} alt="flag" height={15} width={30} />
    <span className="leading-5 ml-3">{props.data.name}</span>
  </components.SingleValue>
);
*/

const RegisterViewModelFull = (props: any) => {
  const [genders, setGenders] = useState(["Male", "Female", "Trans"]);

  const router = useRouter();
  let texto1,texto2,texto3,texto4,texto5,texto6,texto7,texto8,txt9,txt10;
  let txt13,txt14,txt15,txt16,txt17,txt18,txt19;
  let txt20: string = '';
  let txt21: string = '';
  let arregloEN = ["Male", "Female", "Trans"];
  let arregloES = ["Masculino", "Femenino", "Trans"];
  let arregloPT = ["Macho", "Fêmeo", "Trans"];
  let arregloRU = ["Мужской", "женский", "Транс"];
  let genero1,genero2, genero3;
  switch(router.locale) {    
    case "es":
      texto3 = "Primer nombre";
      texto4 = 'Apellido';
      texto5 = 'Nombre de usuario ej: brad10...';
      texto6 = 'Dirección de correo electrónico';
      texto7 = 'Género';
      texto8 = arregloES;
      genero1=arregloES[0];
      genero2=arregloES[1];
      genero3=arregloES[2];
      txt9 = 'Sube una foto tuya sosteniendo tu documento de identidad en tu cara.';
      txt10 = 'Cargue prueba de uno de los siguientes: número de seguro social o número de seguro nacional o pasaporte o una identificación con fotografía diferente a su verificación con foto.';
      txt15 = 'Crea tu cuenta';
      txt16 = '¿Ya tienes una cuenta?';
      txt17 = 'aquí';
      txt18 = '¡Volverse modelo!';
      txt19 = 'Registrarse aquí';
      txt20 = 'Registro de fans';
      txt21 = 'Registro de modelos';
        break;
    case "en-US":
      texto3 = "First Name";
      texto4 = 'Last Name';
      texto5 = 'Username ej: brad10...';
      texto6 = 'Email address';
      texto7 = 'Gender';
      texto8 = arregloEN;
      genero1=arregloEN[0];
      genero2=arregloEN[1];
      genero3=arregloEN[2];
      txt9 = 'Upload a photo of yourself holding your identity bdocument to your face.';
      txt10 = 'Please upload proof of one of either of the following: social security number or national isurance number or passport or a different photographic id to your photo verification.';
      txt15 = 'Create your Account';
      txt16 = 'Have an account already?';
      txt17 = 'here';
      txt18 = 'Become a model!';
      txt19 = 'Register here';
      txt20 = 'Fans Register';
      txt21 = 'Models Register';
      break;
    case "pt":
      texto3 = "Primeiro nome";
      texto4 = 'Último nome';
      texto5 = 'Nome de usuário ej: brad10...';
      texto6 = 'Endereço de email';
      texto7 = 'Gênero sexual';
      texto8 = arregloPT;
      genero1=arregloPT[0];
      genero2=arregloPT[1];
      genero3=arregloPT[2];
      txt9 = 'Carregue uma foto sua segurando seu documento de identidade em seu rosto.';
      txt10 = 'Envie um comprovante de um dos seguintes: número de seguro social ou número de seguro nacional ou passaporte ou uma identificação fotográfica diferente para sua verificação de foto.';
      txt15 = 'Crie sua conta';
      txt16 = 'Já tem uma conta?';
      txt17 = 'aqui';
      txt18 = 'Torne-se um modelo!';
      txt19 = 'Registre-se aqui';
      txt20 = 'registro de fãs';
      txt21 = 'Registro de modelos';
        break;
    case "ru":
      texto3 = "Имя";
      texto4 = 'Фамилия';
      texto5 = 'Имя пользователя ej: brad10...';
      texto6 = 'Адрес электронной почты';
      texto7 = 'Пол';
      texto8 = {arregloRU};
      genero1=arregloRU[0];
      genero2=arregloRU[1];
      genero3=arregloRU[2];
      txt9 = 'Загрузите фотографию, на которой вы держите документ, удостоверяющий личность, у лица.';
      txt10 = 'Пожалуйста, загрузите подтверждение одного из следующих документов: номер социального страхования, номер национальной страховки, паспорт или другое удостоверение личности с фотографией для проверки фотографии.';
      txt15 = 'Создать учетную запись';
      txt16 = 'У вас уже есть аккаунт?';
      txt17 = 'здесь';
      txt18 = 'Стань моделью!';
      txt19 = 'Зарегистрируйтесь здесь';
      txt20 = 'регистрация болельщика';
      txt21 = 'Регистрация моделей';
    default:
        
  }

  const [gender, setGender] = useState('')
  // form validation rules
  const validationSchema = Yup.object().shape({/*
    firstName: Yup.string().required("*First Name is required"),
    lastName: Yup.string().required("*Last Name is required"),
    username: Yup.string().required("*Username is required"),
    email: Yup.string().required("*Email is required").email("*Email invalid"),
    // country: Yup.string().required('*Country is required'),
    password: Yup.string().required("*Password is required"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password")], "*Password are not the same")
      .required("*Password is required"),
    gender: Yup.string().required("*Gender is required"),
    termsOfService: Yup.boolean().isTrue(
      "*You must accept the terms of service"
    ),*/
  });

  // get functions to build form with useForm() hook
  const {
    register,
    //handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({ mode: "onBlur", resolver: yupResolver(validationSchema) });

  const [file1, setFile1] = useState('');
  const [file2, setFile2] = useState('');

  const onChange = (event:any) => {
    const value = event.target.value;
  
    const f1 = event.target.files[0];
    setFile1(f1);
    console.log("!!!!!!!! "+f1)
  }

  const changes = (event:any) => {
    const value = event.target.value;
  
    const f2 = event.target.files[0];
    setFile2(f2);
    //this will return an ARRAY of File     
  }

 const handleSubmit = async (event:any) => {
  
  // Stop the form from submitting and refreshing the page.
  event.preventDefault()

  var myHeaders = new Headers();
  myHeaders.append("Cookie", "connect.sid=s%3ADM1ckCD0iIKtLHVWAZ3K3nPpC72Tgof2.gU2lEL4%2BEJvzPKF3SG7aI7F1ENpxjUB9vSzkcOB0DdA");

  var formdata = new FormData();
  formdata.append("firstName", event.target.firstName.value);
  formdata.append("lastName", event.target.lastName.value);
  formdata.append("username", event.target.username.value);
  formdata.append("password", event.target.password.value);
  formdata.append("email", event.target.email.value);
  formdata.append("gender", gender);
  formdata.append("idVerification", file1, "[PROXY]");
  formdata.append("documentVerification", file2, "[PROXY]");

  
  // API endpoint where we send form data.
  const endpoint = 'http://api.myadultfan.com/auth/performers/register'

  // Form the request for sending data to the server.
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
  };

  const response = await fetch(endpoint, requestOptions)

  // Get the response data from server as JSON.
  // If server returns the name submitted, that means the form works.
  const result = await response.text()
 
  console.log("!!!!!!!!!!! "+ result);
}
  return (
  <div>
  <Navbar />
    <PublicContainer className="md:w-[430px] lg:w-[440px]">      
      <div className="flex items-center justify-around">
        <h1 className="font-lemon-milk text-xl md:text-2xl font-extrabold text-blue-450 leading-0 mb-3 mt-3 text-center">
            INFLUENCER REGISTER
        </h1>
      </div>
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
      <div className="uppercase text-center my-3">
        <h2 className="text-black text-sm md:text-lg font-extrabold font-lemon-milk">
          Create your
        </h2>
        <h1 className="text-blue-450 text-xl md:text-3xl font-extrabold font-lemon-milk">
          free account!
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3 -my-3 mt-4">
          <TextInputRegister
            label={texto3}
            fieldName="firstName"
            register={register}
            errors={errors}
          />
          <TextInputRegister
            label={texto4}
            fieldName="lastName"
            register={register}
            errors={errors}
          />
        </div>
        <TextInputRegister
          label={texto5}
          fieldName="username"
          register={register}
          errors={errors}
        />
        <TextInputRegister
          label={texto6}
          fieldName="email"
          register={register}
          errors={errors}
        />
        <div className="grid grid-cols-2 gap-3 -mt-3 -mb-6">
          <TextInputRegister
            label="Password"
            type="password"
            fieldName="password"
            register={register}
            errors={errors}
          />
          <TextInputRegister
            label="Confirm Password"
            type="password"
            fieldName="passwordConfirmation"
            register={register}
            errors={errors}
          />
        </div>
        <div className="my-3">
          <label htmlFor="genero" className="px-1 text-xs">{texto7}</label>            
          <select name="genero" id="genero" className="select select-info w-full max-w-xs py-2 text-sm border-blue-450 border rounded-md bg-white bg-clip-padding" 
          onChange={(e) => {setGender(e.target.value)} } defaultValue={'select'} >
            <option className="text-sm" value={'select'}>Select</option>
            <option className="text-sm" value={'male'}>{genero1}</option>
            <option className="text-sm" value={'female'}>{genero2}</option>
            <option className="text-sm" value={'transgender'}>{genero3}</option>
          </select>
          
        </div>

        <div>
          <div className="grid grid-cols-2 gap-3 my-3">
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
                    <input type="file" className="opacity-0" onChange={onChange}/>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <CardMedia
                component="img"
                image="/assets/img/iconos doc-08.png"
                alt=""
                sx={{
                  width: "100%",
                }}
              />
            </div>
          </div>
          <p className="text-xs text-center text-gray-500">
            {txt9}
          </p>
        </div>

        <div className="mb-4">
          <div className="grid grid-cols-2 gap-3 my-3">
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
                    <input type="file" className="opacity-0" onChange={changes} />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <CardMedia
                component="img"
                image="/assets/img/iconos doc-09.png"
                alt=""
                sx={{
                  width: "100%",
                }}
              />
            </div>
          </div>
          <p className="text-xs text-center text-gray-500">
            {txt10}
          </p>
        </div>
        <footer className="flex flex-col items-center justify-center">
          <button type="submit" className="mb-8 bg-gradient-to-r from-[#05D6F2] to-[#28B2C3] text-white text-base md:text-xl font-semibold px-4 md:px-8 py-1 rounded-full block mx-auto"
          >
            {txt15}
          </button>
        </footer>
      </form>
    </PublicContainer>
    <div className="mb-8">
      <div className="font-light text-gray-800 mt-3 text-center">
        {txt16}{" "}
        <Link href={"/login/model"}>
          <a className="text-blue-450 font-semibold">Login {txt17}</a>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default RegisterViewModelFull;
