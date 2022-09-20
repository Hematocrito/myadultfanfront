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
import { useState } from "react";
import { authService } from "services";
import Image from "next/image";
import { CardMedia } from "@mui/material";
import { useRouter } from "next/router";
import { MiniContainer } from "./wrappers/MiniContainer";
import Navbar from "./Navbar";

const RegisterView = (props: any) => {

  const router = useRouter();
  let texto1,
    texto2,
    texto3,
    texto4,
    texto5,
    texto6,
    texto7,
    texto8,
    texto9,
    texto10,
    texto11,
    txt12;
  let txt13, txt14, txt15, txt16, txt17, txt18, txt19;
  let txt20: string = "";
  let txt21: string = "";
  let arregloEN = ["Male", "Female", "Trans"];
  let arregloES = ["Masculino", "Femenino", "Trans"];
  let arregloPT = ["Macho", "Fêmeo", "Trans"];
  let arregloRU = ["Мужской", "женский", "Транс"];
  let genero1, genero2, genero3;
  switch (router.locale) {
    case "es":
      texto1 = "Crea tu";
      texto2 = "cuenta gratis!";
      texto3 = "Primer nombre";
      texto4 = "Apellido";
      texto5 = "Nombre de usuario ej: brad10...";
      texto6 = "Dirección de correo electrónico";
      texto7 = "Género";
      texto8 = arregloES;
      genero1 = arregloES[0];
      genero2 = arregloES[1];
      genero3 = arregloES[2];
      texto9 =
        "*Los nombres de usuario y las contraseñas distinguen entre mayúsculas y minúsculas";
      texto10 = "Procesamiento de datos personales";
      texto11 =
        "Al marcar esta casilla, certifico que tengo al menos 18 años, tengo la capacidad para celebrar contratos legalmente vinculantes y he leído y acepto los";
      txt12 = "Términos de servicio";
      txt13 = "Comunicación";
      txt14 =
        "Acepto recibir correos electrónicos con noticias y actualizaciones de mi familia de productos adultfan";
      txt15 = "Crea tu cuenta";
      txt16 = "¿Ya tienes una cuenta?";
      txt17 = "aquí";
      txt18 = "¡Volverse modelo!";
      txt19 = "Registrarse aquí";
      txt20 = "Registro de fans";
      txt21 = "Registro de modelos";
      break;
    case "en-US":
      texto1 = "Create your";
      texto2 = "free account!";
      texto3 = "First Name";
      texto4 = "Last Name";
      texto5 = "Username ej: brad10...";
      texto6 = "Email address";
      texto7 = "Gender";
      texto8 = arregloEN;
      genero1 = arregloEN[0];
      genero2 = arregloEN[1];
      genero3 = arregloEN[2];
      texto9 = "*Usernames and passwords are CASE SENSITIVE";
      texto10 = "Personal Data Processing";
      texto11 =
        "By checking this box, I certify that I am at least 18 years old, have the capacity to enter into legally binding contracts, and have read and agree to the";
      txt12 = "Terms of service";
      txt13 = "Comunication";
      txt14 =
        "I agree to recieve e-mails whith news and updates from myadultfan family of products";
      txt15 = "Create your Account";
      txt16 = "Have an account already?";
      txt17 = "here";
      txt18 = "Become a model!";
      txt19 = "Register here";
      txt20 = "Fans Register";
      txt21 = "Models Register";
      break;
    case "pt":
      texto1 = "Crie o seu";
      texto2 = "Conta gratis!";
      texto3 = "Primeiro nome";
      texto4 = "Último nome";
      texto5 = "Nome de usuário ej: brad10...";
      texto6 = "Endereço de email";
      texto7 = "Gênero sexual";
      texto8 = arregloPT;
      genero1 = arregloPT[0];
      genero2 = arregloPT[1];
      genero3 = arregloPT[2];
      texto9 =
        "*Nomes de usuário e senhas são sensíveis a maiúsculas e minúsculas";
      texto10 = "Processamento de dados pessoais";
      texto11 =
        "Ao marcar esta caixa, certifico que tenho pelo menos 18 anos, tenho capacidade para celebrar contratos juridicamente vinculativos, li e concordo com os";
      txt12 = "Termos de serviço";
      txt13 = "Comunicação";
      txt14 =
        "Concordo em receber e-mails com notícias e atualizações da minha família de produtos adultfan";
      txt15 = "Crie sua conta";
      txt16 = "Já tem uma conta?";
      txt17 = "aqui";
      txt18 = "Torne-se um modelo!";
      txt19 = "Registre-se aqui";
      txt20 = "registro de fãs";
      txt21 = "Registro de modelos";
      break;
    case "ru":
      texto1 = "Создайте свой";
      texto2 = "бесплатный аккаунт!";
      texto3 = "Имя";
      texto4 = "Фамилия";
      texto5 = "Имя пользователя ej: brad10...";
      texto6 = "Адрес электронной почты";
      texto7 = "Пол";
      texto8 = { arregloRU };
      genero1 = arregloRU[0];
      genero2 = arregloRU[1];
      genero3 = arregloRU[2];
      texto9 = "*Имена пользователей и пароли вводятся с учетом регистра.";
      texto10 = "Обработка персональных данных";
      texto11 =
        "Установив этот флажок, я подтверждаю, что мне исполнилось 18 лет, что я могу заключать юридически обязывающие договоры, а также прочитал и согласен с";
      txt12 = "Условия обслуживания";
      txt13 = "Коммуникация";
      txt14 =
        "Я согласен получать электронные письма с новостями и обновлениями моего семейства продуктов для взрослых";
      txt15 = "Создать учетную запись";
      txt16 = "У вас уже есть аккаунт?";
      txt17 = "здесь";
      txt18 = "Стань моделью!";
      txt19 = "Зарегистрируйтесь здесь";
      txt20 = "регистрация болельщика";
      txt21 = "Регистрация моделей";
    default:
  }

  const [gender, setGender] = useState('')
  // form validation rules
  const validationSchema = Yup.object().shape({
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
    ),
  });

  // get functions to build form with useForm() hook
  const {
    register,
    //handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(validationSchema) });

  const handleSubmit = async (event:any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      gender: gender
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = 'http://api.myadultfan.com/auth/users/register'

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

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.text()
   
    console.log("!!!!!!!!!!! "+ result);
  }
  // const { FormGroup, register } = useRegisterController();

  return (
    <div>
      <Navbar />
      <PublicContainer className="md:w-[430px] lg:w-[430px]">
        <div className="flex items-center justify-around">
          <h1 className="font-lemon-milk text-xl md:text-2xl font-extrabold text-blue-450 leading-0 mb-2 mt-3 text-center">
              FANS REGISTER
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
            {texto1}
          </h2>
          <h1 className="text-blue-450 text-xl md:text-3xl font-extrabold font-lemon-milk">
            {texto2}
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3 -my-3">
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
          <span className="text-[11.5px] sm:text-sm font-medium text-center w-full block">
            {texto9}
          </span>
          <div className="py-2 px-1">
            <header className="text-sm text-blue-450 font-bold">
              {texto10}
            </header>
            <Checkbox
              errors={errors}
              fieldName="termsOfService"
              register={register}
            >
              {texto11} <span className="text-blue-450">{txt12}</span>
            </Checkbox>
          </div>
          <div className="py-2 px-1">
            <header className="text-sm text-blue-450 font-bold">{txt13}</header>
            <Checkbox errors={errors} fieldName="data" register={register}>
              {txt14}
            </Checkbox>
          </div>
          <footer className="flex flex-col items-center justify-center">
            <button
              type="submit"
              className="mb-8 bg-gradient-to-r from-[#05D6F2] to-[#28B2C3] text-white text-base md:text-xl font-semibold px-4 md:px-8 py-1 rounded-full block mx-auto"
            >
              {txt15}
            </button>
          </footer>
        </form>
      </PublicContainer>
      <MiniContainer>
        <h2 className="text-black text-sm md:text-lg font-extrabold font-lemon-milk text-center">
          Are you an    
        </h2>
        <h1 className="text-blue-450 text-xl md:text-2xl font-extrabold font-lemon-milk text-center -mt-2">
            INFLUENCER?
        </h1>
        <div className="flex flex-col items-center justify-center mt-2">
          <button
            onClick={() => router.push("/register/model-full")}
            className="border-2 font-medium shadow-md text-black shadow-black/30 border-white rounded-3xl w-52 px-1 py-1 text-lg my-2"
          >
            Register
          </button>
        </div>
      </MiniContainer>
      <div className="mb-8">
        <div className="font-light text-gray-800 mt-3 text-center">
          {txt16}{" "}
          <Link href={"/login/fans"}>
            <a className="text-blue-450 font-semibold">Login {txt17}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default RegisterView;