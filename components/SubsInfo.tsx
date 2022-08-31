import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { useRouter } from "next/router";

export const SubsInfo = (props: { admin: "model" | "fans" }) => {
    const router = useRouter();
    let txtSub1,txtSub2,txtSub3,txtSub4,txtSub5,txtSub6,txtSub7,txtSub8,txtSub9;
    switch(router.locale) {    
      case "es":
        txtSub1 = 'Información básica';
        txtSub2 = 'Información bancaria';
        txtSub3 = 'Bloquear países';
        txtSub4 = 'Cambia la contraseña';
        txtSub5 = 'Precio de suscripción mensual';
        txtSub6 = 'Precio de suscripción de seis meses';
        txtSub7 = 'Precio de suscripción anual';
        txtSub8 = 'Guardar cambios';
        txtSub9 = 'Información de suscripción';
          break;
      case "en-US":
        txtSub1 = 'Basic Information';
        txtSub2 = 'Banking Information';
        txtSub3 = 'Block Countries';
        txtSub4 = 'Change Password';
        txtSub5 = 'Monthly Subscription Price';
        txtSub6 = 'Six Month Subscription Price';
        txtSub7 = 'Yearly Subscription Price';
        txtSub8 = 'Save Changes';
        txtSub9 = 'Subscription Information';
          break;
      case "pt":
        txtSub1 = 'Informação básica';
        txtSub2 = 'Informação bancária';
        txtSub3 = 'Bloquear países';
        txtSub4 = 'Mudar senha';
        txtSub5 = 'Preço de assinatura mensal';
        txtSub6 = 'Preço de assinatura de seis meses';
        txtSub7 = 'Preço de assinatura anual';
        txtSub8 = 'Salve as alterações';
        txtSub9 = 'Informações de assinatura';
          break;
      case "ru":
        txtSub1 = 'Основная информация';
        txtSub2 = 'Банковская информация';
        txtSub3 ='Блокировать страны';
        txtSub4 = 'Сменить пароль';
        txtSub5 = 'Ежемесячная стоимость подписки';
        txtSub6 = 'Стоимость шестимесячной подписки';
        txtSub7 = 'Стоимость годовой подписки';
        txtSub8 = 'Сохранить изменения';
        txtSub9 = 'Информация о подписке';
      default:
          
    }

    return (
        <section >
            <div className="m-8 md:m-12">
                <div className=" flex gap-4 mb-12 justify-between w-4/5 lg:text-lg text-sm lg:justify-start overflow-scroll  md:overflow-visible">
                    <Link href={'/admin/model/Information/BasicInfo'}>
                        <a className=" md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">{txtSub1}</a>
                    </Link>
                    <Link href={'/admin/model/Information/BankingInfo'}>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">{txtSub2}</a>
                    </Link>
                    <a className="md:py-2 md:px-2 text-blue-450 border-b-[3px] border-blue-450 font-semibold">{txtSub9}</a>
                    <Link href={'/admin/model/Information/BlockCountries'}>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">{txtSub3}</a>
                    </Link>
                    <Link href={'/admin/model/Information/ChangePassword'}>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">{txtSub4}</a>
                    </Link>
                </div>


            </div>
            <section className='mb-12'>
                <div className="w-3/4 m-auto ">
                    <form className="bg-white rounded px-4 pt-6 pb-8 mb-4">
                        <div className="mb-6 lg:mb-24 grid grid-cols-1 md:grid-cols-2   gap-9   ">
                            <div>
                                <div className='flex gap-1 '>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor='mname'>
                                        {txtSub5}
                                    </label>
                                </div>
                                <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="mname" type="text" placeholder="$7.99"></input>
                            </div>
                            <div>
                                <div className='flex gap-1 '>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="smonth">
                                        {txtSub6}
                                    </label>
                                </div>
                                <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="smonth" type="text" placeholder="$38.35"></input>
                            </div>
                            <div>
                                <div className='flex gap-1 '>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="ysubs">
                                        {txtSub7}
                                    </label>
                                </div>
                                <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="ysubs" type="text" placeholder="$57.52"></input>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-blue-450 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                {txtSub8}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </section >
    );
};