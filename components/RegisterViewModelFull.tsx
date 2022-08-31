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
          <h1 className="font-lemon-milk text-xl md:text-2xl font-extrabold text-black leading-0 mb-3 mt-3 text-center">
              INFLUENCER REGISTER
          </h1>
        </div>
        <div className="max-w-[70%] mx-auto grid grid-cols-2 gap-4 font-mono text-white text-sm font-bold leading-6 pb-2 pt-2">
          <a href="#">
            <CardMedia
              component="img"
              image="/assets/img/iconos redes-01.png"
              alt=""
              sx={{
                width: "144px",
              }}
            />
          </a>

          <a href="#">
            <CardMedia
              component="img"
              image="/assets/img/iconos redes-03.png"
              alt=""
              sx={{
                width: "144px",
              }}
            />
          </a>
        </div>
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
