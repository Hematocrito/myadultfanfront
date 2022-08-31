import Link from 'next/link';
import { useRouter } from "next/router";
import { AiFillStar } from 'react-icons/ai';


export const ModelChangePassword = (props: { admin: "model" | "fans" }) => {
    const router = useRouter();
    let txtPas1,txtPas2,txtPas3,txtPas4,txtPas5,txtPas6,txtPas7,txtPas9;
    switch(router.locale) {    
      case "es":
        txtPas1 = 'Información básica';
        txtPas2 = 'Información bancaria';
        txtPas3 = 'Bloquear países';
        txtPas4 = 'Cambia la contraseña';
        txtPas5 = 'Contraseña';
        txtPas6 = 'Guardar cambios';
        txtPas7 = 'Confirmar Contraseña';
        txtPas9 = 'Información de suscripción';
          break;
      case "en-US":
        txtPas1 = 'Basic Information';
        txtPas2 = 'Banking Information';
        txtPas3 = 'Block Countries';
        txtPas4 = 'Change Password';
        txtPas5 = 'Password';
        txtPas6 = 'Save Changes';
        txtPas7 = 'Confirm Password';
        txtPas9 = 'Subscription Information';
          break;
      case "pt":
        txtPas1 = 'Informação básica';
        txtPas2 = 'Informação bancária';
        txtPas3 = 'Bloquear países';
        txtPas4 = 'Mudar senha';
        txtPas5 = 'Senha';
        txtPas6 = 'Salve as alterações';
        txtPas7 = 'Confirme sua senha';
        txtPas9 = 'Informações de assinatura';
          break;
      case "ru":
        txtPas1 = 'Основная информация';
        txtPas2 = 'Банковская информация';
        txtPas3 ='Блокировать страны';
        txtPas4 = 'Сменить пароль';
        txtPas5 = 'Пароль';
        txtPas6 = 'Сохранить изменения';
        txtPas7 = 'Подтвердить Пароль';
        txtPas9 = 'Информация о подписке';
      default:
          
    }

    return (
        <section >
            <div className="m-8 md:m-12">
                <div className=" flex gap-4 mb-12 justify-around w-full lg:text-lg text-sm lg:justify-start ">
                    <Link href={'/admin/model/Information/BasicInfo'}>
                        <a className=" md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">{txtPas1}</a>
                    </Link>
                    <Link href={'/admin/model/Information/BankingInfo'}>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">{txtPas2}</a>
                    </Link>
                    <Link href={'/admin/model/Information/SubsInfo'}>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">{txtPas9}</a>
                    </Link>
                    <Link href={'/admin/model/Information/BlockCountries'}>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">{txtPas3}</a>
                    </Link>
                    <a className="md:py-2 md:px-2 text-blue-450 border-b-[3px] border-blue-450 font-semibold">{txtPas4}</a>
                </div>

                <div className="w-fit m-auto ">
                    <form className="bg-white rounded px-4 pt-6 pb-8 mb-4">
                        <div className="mb-6 lg:mb-24 flex flex-col md:flex-row gap-9 lg:gap-40 ">
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        {txtPas5}
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*************"></input>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        {txtPas7}
                                    </label>
                                </div>
                                <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*************"></input>
                            </div>

                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-blue-450 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                {txtPas6}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section >
    );
};