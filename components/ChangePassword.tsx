import Link from 'next/link';
import { useRouter } from "next/router";
import { AiFillStar } from 'react-icons/ai';
import NavbarUsr from './NavbarUsr';


export const ChangePassword = (props: { admin: "model" | "fans" }) => {
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
          <NavbarUsr />  
            <div className="m-8 md:m-12">
            <div className=" flex gap-4 mb-12 justify-around w-full lg:text-lg text-sm lg:justify-start ">
                    <Link href='/admin/users/MyInfo' >
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300">{txtCh1}</a>
                    </Link>
                    <a className="md:py-2 md:px-2 text-blue-450 border-b-[3px] border-blue-450 font-semibold ">{txtCh2}</a>
                </div>

                <div className="w-fit m-auto ">
                    <form className="bg-white rounded px-4 pt-6 pb-8 mb-4">
                        <div className="mb-6 lg:mb-24 flex flex-col md:flex-row gap-9 lg:gap-40 ">
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        {txtCh3}
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*************"></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        {txtCh4}
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*************"></input>
                            </div>

                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-blue-450 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                {txtCh8}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section >
    );
};