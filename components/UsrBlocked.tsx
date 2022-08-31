import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { CardMedia } from "@mui/material";
import { useRouter } from "next/router";
import { tableStyling, columns, rows } from './UsersBlockedTable';
import Table from 'react-tailwind-table';
import PopupBlock from './PopupBlock';
import NavbarMod from './NavbarMod';

// TODO integrate

export const MyInfo = (props: { admin: "model" | "fans" }) => {
    const router = useRouter();
    let txtMy1,txtMy2,txtMy3,txtMy4,txtMy5,txtMy6,txtMy7,txtMy8;
    switch(router.locale) {    
      case "es":
        txtMy1 = 'Información básica';
        txtMy2 = 'Cambia la contraseña';
        txtMy3 = 'Primer nombre';
        txtMy4 = 'Nombre de usuario';
        txtMy5 = 'Dirección de correo electrónico';
        txtMy6 = 'Apellido';
        txtMy7 = 'Género';
        txtMy8 = 'Guardar cambios';
          break;
      case "en-US":
        txtMy1 = 'Basic Information';
        txtMy2 = 'Change Password';
        txtMy3 = 'First name';
        txtMy4 = 'Username';
        txtMy5 = 'Email address';
        txtMy6 = 'Last name';
        txtMy7 = 'Gender';
        txtMy8 = 'Save Changes';
          break;
      case "pt":
        txtMy1 = 'Informação básica';
        txtMy2 = 'Mudar senha';
        txtMy3 = 'Primeiro nome';
        txtMy4 = 'Nome do usuário';
        txtMy5 = 'Endereço de email';
        txtMy6 = 'Último nome';
        txtMy7 = 'Gênero';
        txtMy8 = 'Salve as alterações';
          break;
      case "ru":
        txtMy1 = 'Основная информация';
        txtMy2 = 'Сменить пароль';
        txtMy3 = 'Имя';
        txtMy4 = 'Имя пользователя';
        txtMy5 = 'Адрес электронной почты';
        txtMy6 = 'Фамилия';
        txtMy7 = 'Пол';
        txtMy8 = 'Сохранить изменения';
      default:
          
    }

    return (
        <section>
          <NavbarMod />
            <div className="mx-0 md:mx-56">
                <h1 className='text-lg md:text-2xl font-semibold mb-5 mt-10 ml-11 md:ml-0'>Blacklist</h1>
                <div className=" flex gap-4 mb-12 justify-around w-full lg:text-lg text-sm lg:justify-start ">
                    <a className="md:py-2 md:px-2 text-blue-450 border-b-[3px] border-blue-450 font-medium">Blacklist Users</a>
                    <Link href={'/admin/model/Blocked/BlockCountry'}>
                        <a className="md:py-2 md:px-2 text-black font-medium hover:text-blue-450 transition duration-300">Blacklist Countries</a>
                    </Link>
                </div>
                <div>
                  <PopupBlock />
                </div>
                <div className='w-5/6 m-auto mt-6 font-sans'>                    
                    <Table styling={tableStyling} columns={columns} rows={rows} show_search={false} should_export={false} per_page={5} />
                </div>    
            </div>            
        </section >
    );
};