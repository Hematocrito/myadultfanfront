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
import { useRouter } from "next/router";

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

export const RegisterViewModel = (props: any) => {
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
      txtMod3 = "Primer nombre";
      txtMod4 = 'Apellido';
      txtMod5 = 'Nombre de usuario ej: brad10...';
      txtMod6 = 'Dirección de correo electrónico';
      txtMod7 = 'Género';
      texto8 = arregloES;
      genero1=arregloES[0];
      genero2=arregloES[1];
      genero3=arregloES[2];
      txtMod9 = '*Los nombres de usuario y las contraseñas distinguen entre mayúsculas y minúsculas';
      txtMod10 = 'Procesamiento de datos personales';
      txtMod11 = 'Al marcar esta casilla, certifico que tengo al menos 18 años, tengo la capacidad para celebrar contratos legalmente vinculantes y he leído y acepto los';
      txtMod12 = 'Términos de servicio';
      txtMod13 = 'Comunicación';
      txtMod14 = 'Acepto recibir correos electrónicos con noticias y actualizaciones de mi familia de productos adultfan';
      txtMod15 = 'Crea tu cuenta';
      txtMod16 = '¿Ya tienes una cuenta?';
      txtMod17 = 'aquí';
      txtMod18 = '¡Volverse modelo!';
      txtMod19 = 'Registrarse aquí';
      txtMod20 = 'Sube una foto tuya sosteniendo tu documento de identidad en tu cara';
      txtMod21 = 'Cargue prueba de uno de los siguientes: número de seguro social o número de seguro nacional o pasaporte o una identificación con fotografía diferente a su verificación con foto.';
        break;
    case "en-US":
      txtMod1 = "BECOME";
      txtMod2 = "AN INFLUENCER";
      txtMod3 = "First Name";
      txtMod4 = 'Last Name';
      txtMod5 = 'Username ej: brad10...';
      txtMod6 = 'Email address';
      txtMod7 = 'Gender';
      texto8 = arregloEN;
      genero1=arregloEN[0];
      genero2=arregloEN[1];
      genero3=arregloEN[2];
      txtMod9 = '*Usernames and passwords are CASE SENSITIVE';
      txtMod10 = 'Personal Data Processing';
      txtMod11 = 'By checking this box, I certify that I am at least 18 years old, have the capacity to enter into legally binding contracts, and have read and agree to the';
      txtMod12 = 'Terms of service';
      txtMod13 = 'Comunication';
      txtMod14 = 'I agree to recieve e-mails whith news and updates from myadultfan family of products';
      txtMod15 = 'Create your Account';
      txtMod16 = 'Have an account already?';
      txtMod17 = 'here';
      txtMod18 = 'Become a model!';
      txtMod19 = 'Register here';
      txtMod20 = 'Upload a photo of yourself holding your identity bdocument to your face';
      txtMod21 = 'Please upload proof of one of either of the following: social security number or national isurance number or passport or a different photographic id to your photo verification.';
      break;
    case "pt":
      txtMod1 = "SEJA";
      txtMod2 = "UM INFLUENCIADOR";
      txtMod3 = "Primeiro nome";
      txtMod4 = 'Último nome';
      txtMod5 = 'Nome de usuário ej: brad10...';
      txtMod6 = 'Endereço de email';
      txtMod7 = 'Gênero sexual';
      texto8 = arregloPT;
      genero1=arregloPT[0];
      genero2=arregloPT[1];
      genero3=arregloPT[2];
      txtMod9 = '*Nomes de usuário e senhas são sensíveis a maiúsculas e minúsculas';
      txtMod10 = 'Processamento de dados pessoais';
      txtMod11 = 'Ao marcar esta caixa, certifico que tenho pelo menos 18 anos, tenho capacidade para celebrar contratos juridicamente vinculativos, li e concordo com os';
      txtMod12 = 'Termos de serviço';
      txtMod13 = 'Comunicação';
      txtMod14 = 'Concordo em receber e-mails com notícias e atualizações da minha família de produtos adultfan';
      txtMod15 = 'Crie sua conta';
      txtMod16 = 'Já tem uma conta?';
      txtMod17 = 'aqui';
      txtMod18 = 'Torne-se um modelo!';
      txtMod19 = 'Registre-se aqui';
      txtMod20 = 'Carregue uma foto sua segurando seu documento de identidade em seu rosto';
      txtMod21 = 'Envie um comprovante de um dos seguintes: número de seguro social ou número de seguro nacional ou passaporte ou uma identificação fotográfica diferente para sua verificação de foto.';
        break;
    case "ru":
      txtMod1 = "СТАНЬТЕ";
      txtMod2 = "ИНФЛЮЕНСЕРОМ";
      txtMod3 = "Имя";
      txtMod4 = 'Фамилия';
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
      txtMod16 = 'У вас уже есть аккаунт?';
      txtMod17 = 'здесь';
      txtMod18 = 'Стань моделью!';
      txtMod19 = 'Зарегистрируйтесь здесь';
      txtMod20 = 'Загрузите фотографию, на которой вы держите документ, удостоверяющий личность, у лица';
      txtMod21 = 'Пожалуйста, загрузите подтверждение одного из следующих документов: номер социального страхования, номер национальной страховки, паспорт или другое удостоверение личности с фотографией для проверки фотографии.';
    default:
        
  }

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
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({ mode: "onBlur", resolver: yupResolver(validationSchema) });

  async function onSubmit(data: any) {
    console.log("data", data);
    return authService
      .register(data)
      .then((request) => {
        console.log("request :>> ", request);
        reset();
        // get return url from query parameters or default to '/'
        // const returnUrl: any = router.query.returnUrl || '/';
        // router.push(returnUrl);
      })
      .catch((error) => {
        console.log("error :>> ", error);
        // setError('apiError', { message: error });
      });
  }

  // const { FormGroup, register } = useRegisterController();
  console.table(errors);
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
        <div className="max-w-[70%] mx-auto grid grid-cols-3 gap-4 font-mono text-white text-sm font-bold leading-6 py-6">
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
              image="/assets/img/iconos redes-02.png"
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
          <div className="grid grid-cols-2 gap-3 -my-3">
            <TextInputRegister
              label={txtMod3}
              fieldName="firstName"
              register={register}
              errors={errors}
            />
            <TextInputRegister
              label={txtMod4}
              fieldName="lastName"
              register={register}
              errors={errors}
            />
          </div>
          <TextInputRegister
            label={txtMod5}
            fieldName="username"
            register={register}
            errors={errors}
          />
          <TextInputRegister
            label={txtMod6}
            fieldName="email"
            register={register}
            errors={errors}
          />
          <div className="grid grid-cols-2 gap-3 -my-3">
            <CountrySelect />
            <div className="my-3">
              <label className="px-1 text-xs">{txtMod7}</label>
              <select className="select select-info w-full py-2 text-sm border-blue-450 border rounded-md bg-white bg-clip-padding">
                <option className="text-sm" selected>{genero1}</option>
                <option className="text-sm">{genero2}</option>
                <option className="text-sm">{genero3}</option>
              </select>
            </div>
          </div>

          {/* <span className="sm:px-1 text-xs text-red-500">
          {errors.country?.message}
        </span> */}

          <div className="grid grid-cols-2 gap-3 -my-3">
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
                      <input type="file" className="opacity-0" />
                    </label>
                  </div>
                </div>
              </div>
              <CardMedia
                component="img"
                image="/assets/img/iconos-02.png"
                alt=""
                sx={{
                  height: "148px",
                }}
              />
            </div>
            <p className="text-xs text-center text-gray-500">
              {txtMod20}
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
                      <input type="file" className="opacity-0" />
                    </label>
                  </div>
                </div>
              </div>

              <CardMedia
                component="img"
                image="/assets/img/iconos-02.png"
                alt=""
                sx={{
                  height: "148px",
                }}
              />
            </div>
            <p className="text-xs text-center text-gray-500">
              {txtMod21}
            </p>
          </div>

          <span className="text-sm font-light text-center w-full block">
            {txtMod9}
          </span>
          <div className="py-2 px-1">
            <header className="text-sm text-blue-450 font-bold">
              {txtMod10}
            </header>
            <Checkbox
              errors={errors}
              fieldName="termsOfService"
              register={register}
            >
              {txtMod11}{" "}
              <span className="text-blue-450">{txtMod12}</span>
            </Checkbox>
          </div>
          <div className="py-2 px-1">
            <header className="text-sm text-blue-450 font-bold">
              {txtMod13}
            </header>
            <Checkbox errors={errors} fieldName="data" register={register}>
              {txtMod14}
            </Checkbox>
          </div>
          <footer className="flex flex-col items-center justify-center">
            <button
              type="submit"
              className="mb-8 bg-gradient-to-r from-[#05D6F2] to-[#28B2C3] text-white text-base md:text-xl font-semibold px-4 md:px-8 py-1 rounded-full block mx-auto"
            >
              {txtMod15}
            </button>
          </footer>
        </form>
      </PublicContainer>
      <div className="mb-8">
        <div className="font-light text-gray-800 mt-3 text-center">
          {txtMod16}{" "}
          <Link href={"/login/fans"}>
            <a className="text-blue-450 font-semibold">Login {txtMod17}</a>
          </Link>
        </div>
        <div className="font-light text-gray-800 text-center">
          {txtMod18}{" "}
          <Link href={"/register/fans"}>
            <a className="text-blue-450 font-semibold">{txtMod19}</a>
          </Link>
        </div>
      </div>
    </>
  );
};
