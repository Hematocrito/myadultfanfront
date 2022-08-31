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


export const RegisterView = (props: any) => {
  const [genders, setGenders] = useState(["Male", "Female", "Trans"]);


  const router = useRouter();
  let texto1,texto2,texto3,texto4,texto5,texto6,texto7,texto8,texto9,texto10,texto11,txt12;
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
      texto1 = "Crea tu";
      texto2 = "cuenta gratis!";
      texto3 = "Primer nombre";
      texto4 = 'Apellido';
      texto5 = 'Nombre de usuario ej: brad10...';
      texto6 = 'Dirección de correo electrónico';
      texto7 = 'Género';
      texto8 = arregloES;
      genero1=arregloES[0];
      genero2=arregloES[1];
      genero3=arregloES[2];
      texto9 = '*Los nombres de usuario y las contraseñas distinguen entre mayúsculas y minúsculas';
      texto10 = 'Procesamiento de datos personales';
      texto11 = 'Al marcar esta casilla, certifico que tengo al menos 18 años, tengo la capacidad para celebrar contratos legalmente vinculantes y he leído y acepto los';
      txt12 = 'Términos de servicio';
      txt13 = 'Comunicación';
      txt14 = 'Acepto recibir correos electrónicos con noticias y actualizaciones de mi familia de productos adultfan';
      txt15 = 'Crea tu cuenta';
      txt16 = '¿Ya tienes una cuenta?';
      txt17 = 'aquí';
      txt18 = '¡Volverse modelo!';
      txt19 = 'Registrarse aquí';
      txt20 = 'Registro de fans';
      txt21 = 'Registro de modelos';
        break;
    case "en-US":
      texto1 = "Create your";
      texto2 = "free account!";
      texto3 = "First Name";
      texto4 = 'Last Name';
      texto5 = 'Username ej: brad10...';
      texto6 = 'Email address';
      texto7 = 'Gender';
      texto8 = arregloEN;
      genero1=arregloEN[0];
      genero2=arregloEN[1];
      genero3=arregloEN[2];
      texto9 = '*Usernames and passwords are CASE SENSITIVE';
      texto10 = 'Personal Data Processing';
      texto11 = 'By checking this box, I certify that I am at least 18 years old, have the capacity to enter into legally binding contracts, and have read and agree to the';
      txt12 = 'Terms of service';
      txt13 = 'Comunication';
      txt14 = 'I agree to recieve e-mails whith news and updates from myadultfan family of products';
      txt15 = 'Create your Account';
      txt16 = 'Have an account already?';
      txt17 = 'here';
      txt18 = 'Become a model!';
      txt19 = 'Register here';
      txt20 = 'Fans Register';
      txt21 = 'Models Register';
      break;
    case "pt":
      texto1 = "Crie o seu";
      texto2 = "Conta gratis!";
      texto3 = "Primeiro nome";
      texto4 = 'Último nome';
      texto5 = 'Nome de usuário ej: brad10...';
      texto6 = 'Endereço de email';
      texto7 = 'Gênero sexual';
      texto8 = arregloPT;
      genero1=arregloPT[0];
      genero2=arregloPT[1];
      genero3=arregloPT[2];
      texto9 = '*Nomes de usuário e senhas são sensíveis a maiúsculas e minúsculas';
      texto10 = 'Processamento de dados pessoais';
      texto11 = 'Ao marcar esta caixa, certifico que tenho pelo menos 18 anos, tenho capacidade para celebrar contratos juridicamente vinculativos, li e concordo com os';
      txt12 = 'Termos de serviço';
      txt13 = 'Comunicação';
      txt14 = 'Concordo em receber e-mails com notícias e atualizações da minha família de produtos adultfan';
      txt15 = 'Crie sua conta';
      txt16 = 'Já tem uma conta?';
      txt17 = 'aqui';
      txt18 = 'Torne-se um modelo!';
      txt19 = 'Registre-se aqui';
      txt20 = 'registro de fãs';
      txt21 = 'Registro de modelos';
        break;
    case "ru":
      texto1 = "Создайте свой";
      texto2 = "бесплатный аккаунт!";
      texto3 = "Имя";
      texto4 = 'Фамилия';
      texto5 = 'Имя пользователя ej: brad10...';
      texto6 = 'Адрес электронной почты';
      texto7 = 'Пол';
      texto8 = {arregloRU};
      genero1=arregloRU[0];
      genero2=arregloRU[1];
      genero3=arregloRU[2];
      texto9 = '*Имена пользователей и пароли вводятся с учетом регистра.';
      texto10 = 'Обработка персональных данных';
      texto11 = 'Установив этот флажок, я подтверждаю, что мне исполнилось 18 лет, что я могу заключать юридически обязывающие договоры, а также прочитал и согласен с';
      txt12 = 'Условия обслуживания';
      txt13 = 'Коммуникация';
      txt14 = 'Я согласен получать электронные письма с новостями и обновлениями моего семейства продуктов для взрослых';
      txt15 = 'Создать учетную запись';
      txt16 = 'У вас уже есть аккаунт?';
      txt17 = 'здесь';
      txt18 = 'Стань моделью!';
      txt19 = 'Зарегистрируйтесь здесь';
      txt20 = 'регистрация болельщика';
      txt21 = 'Регистрация моделей';
    default:
        
  }

  
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
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(validationSchema) });


  
  async function onSubmit({firstName, lastName, username, email, password, genero, termsOfService }: any ) {
    console.log("Succeed!"+genero);
    console.log("Succeed!"+termsOfService);
  }

  // const { FormGroup, register } = useRegisterController();
  
  return (
    <>
      <PublicContainer className="md:w-[430px] lg:w-[430px]">
        <div className="flex items-center justify-around">
          <AppLink
            href={"/register/fans"}
            styles={styles.link}
            active={styles.linkActive}
          >
            Fans Register
          </AppLink>
          <AppLink
            href={"/register/model"}
            styles={styles.link}
            active={styles.linkActive}
          >
            Model Register
          </AppLink>
        </div>
        <div className="max-w-[70%] mx-auto grid grid-cols-2 gap-4 font-mono text-white text-sm font-bold leading-6 pb-2 sm:pb-4 pt-8 sm:pt-12">
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
            {texto1}
          </h2>
          <h1 className="text-blue-450 text-xl md:text-3xl font-extrabold font-lemon-milk">
            {texto2}
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <select name="genero" id="genero" className="select select-info w-full max-w-xs py-2 text-sm border-blue-450 border rounded-md bg-white bg-clip-padding">
              <option className="text-sm" selected value={'Male'}>{genero1}</option>
              <option className="text-sm" value={'Female'}>{genero2}</option>
              <option className="text-sm" value={'Trans'}>{genero3}</option>
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
              {texto11}{" "}
              <span className="text-blue-450">{txt12}</span>
            </Checkbox>
          </div>
          <div className="py-2 px-1">
            <header className="text-sm text-blue-450 font-bold">
              {txt13}
            </header>
            <Checkbox errors={errors} fieldName="data" register={register}>
              {txt14}
            </Checkbox>
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
          <Link href={"/login/fans"}>
            <a className="text-blue-450 font-semibold">Login {txt17}</a>
          </Link>
        </div>
        <div className="font-light text-gray-800 text-center">
          {txt18}{" "}
          <Link href={"/register/fans"}>
            <a className="text-blue-450 font-semibold">{txt19}</a>
          </Link>
        </div>
      </div>
    </>
  );
};
