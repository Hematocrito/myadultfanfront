import Link from 'next/link';
import { useRouter } from "next/router";
import { AiFillStar } from 'react-icons/ai';
import { BlockCountries } from './BlockCountries';
import Multiselect from './Multiselect';
import NavbarMod from './NavbarMod';



export const CountryBlocked = (props: { admin: "model" | "fans" }) => {
    const router = useRouter();
    let txtCh1,txtCh2,txtCh3,txtCh4,txtMy5,txtMy6,txtMy7,txtCh8;
    switch(router.locale) {    
      case "es":
        txtCh1 = 'Información básica';
        txtCh2 = 'Cambia la contraseña';
        txtCh3 = 'Contraseña';
        txtCh4 = 'Confirmar Contraseña';
        txtCh8 = 'Guardar cambios';
          break;
      case "en-US":
        txtCh1 = 'Basic Information';
        txtCh2 = 'Change Password';
        txtCh3 = 'Password';
        txtCh4 = 'Confirm Password';
        txtCh8 = 'Save Changes';
          break;
      case "pt":
        txtCh1 = 'Informação básica';
        txtCh2 = 'Mudar senha';
        txtCh3 = 'Senha';
        txtCh4 = 'Confirme sua senha';
        txtCh8 = 'Salve as alterações';
          break;
      case "ru":
        txtCh1 = 'Основная информация';
        txtCh2 = 'Сменить пароль';
        txtCh3 = 'Пароль';
        txtCh4 = 'Подтвердить Пароль';
        txtCh8 = 'Сохранить изменения';
      default:
          
    }

    return (
        <section >
          <NavbarMod />
            <div className="mx-0 md:mx-56">
                <h1 className='text-lg md:text-2xl font-semibold mb-5 mt-10 ml-11 md:ml-0'>Blacklist</h1>
                <div className=" flex gap-4 mb-12 justify-around w-full lg:text-lg text-sm lg:justify-start ">
                    <Link href={'/admin/model/Blocked/BlockUsers'}>
                        <a className="md:py-2 md:px-2 text-black font-medium hover:text-blue-450 transition duration-300">Blacklist Users</a>
                    </Link>
                    <a className="md:py-2 md:px-2 text-blue-450 border-b-[3px] border-blue-450 font-medium">Blacklist Countries</a>
                </div>
        

                <div className="w-fit justify-start">
                    <Multiselect />
                </div>
            </div>
        </section >
    );
};