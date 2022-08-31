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
import CountrySelect from "./wrappers/CountrySelect";
import checkboxv2css from "styles/modules/checkboxv2.module.scss";
import { TextInputLine } from "./wrappers/TextInputLine";
import { useRouter } from "next/router";
import Router from "next/router";

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

const RegisterViewModel = (props: any) => {
  const [genders, setGenders] = useState(["Male", "Female", "Trans"]);

  const router = useRouter();
  let txtMod1,txtMod2,txtMod3,txtMod4,txtMod5,txtMod6,txtMod7,texto8,txtMod9,txtMod10,txtMod11,txtMod12;
  let txtMod13,txtMod14,txtMod15,txtMod16,txtMod17,txtMod18,txtMod19,txtMod20,txtMod21;
  let arregloEN = ["Male", "Female", "Trans"];
  let arregloES = ["Masculino", "Femenino", "Trans"];
  let arregloPT = ["Macho", "Fêmeo", "Trans"];
  let arregloRU = ["Мужской", "женский", "Транс"];
  let genero1,genero2, genero3;
  switch(router.locale) {    
    case "es":
      txtMod1 = "CONVIERTETE";
      txtMod2 = "EN INFLUENCER";
      txtMod3 = 'Tu correo electrónico';
      txtMod4 = 'Tu contraseña';
      txtMod10 = 'Procesamiento de datos personales';
      txtMod11 = 'Al marcar esta casilla, certifico que tengo al menos 18 años, tengo la capacidad para celebrar contratos legalmente vinculantes y he leído y acepto los';
      txtMod12 = 'Términos de servicio';
      txtMod13 = 'Comunicación';
      txtMod14 = 'Acepto recibir correos electrónicos con noticias y actualizaciones de mi familia de productos adultfan';
      txtMod15 = 'Crea tu cuenta';
        break;
    case "en-US":
      txtMod1 = "BECOME";
      txtMod2 = "AN INFLUENCER";
      txtMod3 = 'Your email';
      txtMod4 = 'Your password';      
      txtMod10 = 'Personal Data Processing';
      txtMod11 = 'By checking this box, I certify that I am at least 18 years old, have the capacity to enter into legally binding contracts, and have read and agree to the';
      txtMod12 = 'Terms of service';
      txtMod13 = 'Comunication';
      txtMod14 = 'I agree to recieve e-mails whith news and updates from myadultfan family of products';
      txtMod15 = 'Create your Account';
      break;
    case "pt":
      txtMod1 = "SEJA";
      txtMod2 = "UM INFLUENCIADOR";
      txtMod3 = 'Seu email';
      txtMod4 = 'Sua senha';
      txtMod10 = 'Processamento de dados pessoais';
      txtMod11 = 'Ao marcar esta caixa, certifico que tenho pelo menos 18 anos, tenho capacidade para celebrar contratos juridicamente vinculativos, li e concordo com os';
      txtMod12 = 'Termos de serviço';
      txtMod13 = 'Comunicação';
      txtMod14 = 'Concordo em receber e-mails com notícias e atualizações da minha família de produtos adultfan';
      txtMod15 = 'Crie sua conta';
        break;
    case "ru":
      txtMod1 = "СТАНЬТЕ";
      txtMod2 = "ИНФЛЮЕНСЕРОМ";
      txtMod3 = 'Ваш адрес электронной почты';
      txtMod4 = 'Ваш пароль';
      txtMod5 = 'Имя пользователя ej: brad10...';
      txtMod6 = 'Адрес электронной почты';
      txtMod7 = 'Пол';
      texto8 = {arregloRU};
      genero1=arregloRU[0];
      genero2=arregloRU[1];
      genero3=arregloRU[2];
      txtMod9 = '*Имена пользователей и пароли вводятся с учетом регистра.';
      txtMod10 = 'Обработка персональных данных';
      txtMod11 = 'Установив этот флажок, я подтверждаю, что мне исполнилось 18 лет, что я могу заключать юридически обязывающие договоры, а также прочитал и согласен с';
      txtMod12 = 'Условия обслуживания';
      txtMod13 = 'Коммуникация';
      txtMod14 = 'Я согласен получать электронные письма с новостями и обновлениями моего семейства продуктов для взрослых';
      txtMod15 = 'Создать учетную запись';
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
    formState: { errors },
    reset,
    control,
  } = useForm({ mode: "onBlur", resolver: yupResolver(validationSchema) });

  async function onSubmit({ email, password }: any) {
    console.log("EMAIL", email);
    console.log("PASSWORD", password);

    Router.push({
      pathname: "/register/model-full",
      query: { correo: email, clave: password },
    });
  }

  // const { FormGroup, register } = useRegisterController();
  console.table(errors);
  return (
    <PublicContainer>
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
          {txtMod1}
        </h2>
        <h1 className="text-blue-450 text-xl md:text-3xl font-extrabold font-lemon-milk">
          {txtMod2} 
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInputLine
          placeHolder={txtMod3}
          fieldName="email"
          register={register}
          errors={errors}
        />

        <TextInputLine
          placeHolder={txtMod4}
          fieldName="password"
          register={register}
          errors={errors}
          type="password"
        />

        <div className="py-2 px-1">
          <header className="text-sm text-blue-450 font-bold">
            {txtMod10}
          </header>
          <div className={`${checkboxv2css.content} mt-2`}>
            <label className="container">
              <p className="text-xs relative -top-1 ">
                {txtMod11}
              </p>

              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="py-2 px-1">
          <header className="text-sm text-blue-450 font-bold">
            {txtMod13}
          </header>

          <div className={`${checkboxv2css.content} mt-2`}>
            <label className="container">
              <p className="text-xs relative -top-1 ">
                {txtMod14}
              </p>

              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="mt-10 mb-4 flex flex-col items-center justify-center">
          <button type="submit" className="font-medium  rounded-3xl w-52 px-1 py-1 text-lg my-2 bg-gradient-to-r from-[#05D6F2] to-[#28B2C3]  text-white">
            {txtMod15}
          </button>
        </div>
      </form>
    </PublicContainer>
  );
};


export default RegisterViewModel;