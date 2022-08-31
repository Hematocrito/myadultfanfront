import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { useRouter } from "next/router";

export const BankingInfo = (props: { admin: "model" | "fans" }) => {
    const router = useRouter();
    let txtBk1,txtBk2,txtBk3,txtBk4,txtBk5,txtBk6,txtBk7,txtBk8,txtBk9,txtBk10,txtBk11,txtBk12,txtBk13,txtBk14,txtBk15,txtBk16,txtBk17,txtBk18;
    switch(router.locale) {    
      case "es":
        txtBk1 = 'Información bancaria';
        txtBk2 = 'Información básica';
        txtBk3 = 'Información de suscripción';
        txtBk4 = 'Bloquear países';
        txtBk5 = 'Cambia la contraseña';
        txtBk6 = 'Primer nombre';
        txtBk7 = 'Artista ganado';
        txtBk8 = 'Apellido';
        txtBk9 = 'Nombre del banco';
        txtBk10 = 'Cuenta bancaria';
        txtBk11 = 'País';
        txtBk12 = 'Estado/País/Provincia';
        txtBk13 = 'Ciudad';
        txtBk14 = 'Dirección';
        txtBk15 = 'Ruta bancaria';
        txtBk16 = 'Código swift del banco';
        txtBk17 = 'Otra forma de pagar';
        txtBk18 = 'Guardar cambios';
          break;
      case "en-US":
        txtBk1 = 'Banking Information';
        txtBk2 = 'Basic Information';
        txtBk3 = 'Subscription Information';
        txtBk4 = 'Block Countries';
        txtBk5 = 'Change Password';
        txtBk6 = 'First name';
        txtBk7 = 'Performer earned';
        txtBk8 = 'Last name';
        txtBk9 = 'Bank name';
        txtBk10 = 'Bank Account';
        txtBk11 = 'Country';
        txtBk12 = 'State/Country/Province';
        txtBk13 = 'City';
        txtBk14 = 'Address';
        txtBk15 = 'Bank Routing';
        txtBk16 = 'Bank swift code';
        txtBk17 = 'Another way to pay';
        txtBk18 = 'Save Change';
          break;
      case "pt":
        txtBk1 = 'Informação bancária';
        txtBk2 = 'Informação básica';
        txtBk3 = 'Informações de assinatura';
        txtBk4 = 'Bloquear países';
        txtBk5 = 'Mudar senha';
        txtBk6 = 'Primeiro nome';
        txtBk7 = 'Artista ganho';
        txtBk8 = 'Último nome';
        txtBk9 = 'Nome do banco';
        txtBk10 = 'Conta bancária';
        txtBk11 = 'País';
        txtBk12 = 'Estado/País/Província';
        txtBk13 = 'Cidade';
        txtBk14 = 'Endereço';
        txtBk15 = 'Encaminhamento bancário';
        txtBk16 = 'Código rápido do banco';
        txtBk17 = 'Outra forma de pagamento';
        txtBk18 = 'Salve as alterações';
          break;
      case "ru":
        txtBk1 = 'Банковская информация';
        txtBk2 = 'Основная информация';
        txtBk3 = 'Информация о подписке';
        txtBk4 = 'Блокировать страны';
        txtBk5 = 'Сменить пароль';
        txtBk6 = 'Имя';
        txtBk7 = 'Исполнитель заработал';
        txtBk8 = 'Фамилия';
        txtBk9 = 'название банка';
        txtBk10 = 'Банковский счет';
        txtBk11 = 'Страна';
        txtBk12 = 'Штат/страна/провинция';
        txtBk13 = 'Город';
        txtBk14 = 'Адрес';
        txtBk15 = 'Банковская маршрутизация';
        txtBk16 = 'Свифт-код банка';
        txtBk17 = 'Другой способ оплаты';
        txtBk18 = 'Сохранить изменения';
      default:
          
    }

    return (
        <section >
            <div className="m-8 md:m-12">
                <div className=" flex gap-4 mb-12 justify-between w-4/5 lg:text-lg text-sm lg:justify-start overflow-scroll  md:overflow-visible">
                    <Link href={'/admin/model/Information/BasicInfo'}>
                        <a className=" md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">{txtBk2}</a>
                    </Link>

                    <a className="md:py-2 md:px-2 text-blue-450 border-b-[3px] border-blue-450 font-semibold">{txtBk1}</a>
                    <Link href={'/admin/model/Information/SubsInfo'}>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">{txtBk3}</a>
                    </Link>
                    <Link href={'/admin/model/Information/BlockCountries'}>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">{txtBk4}</a>
                    </Link>
                    <Link href={'/admin/model/Information/ChangePassword'}>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">{txtBk5}</a>
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
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor='name'>
                                        {txtBk6}
                                    </label>
                                </div>
                                <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="First name"></input>
                            </div>
                            <div>
                                <div className='flex gap-1 '>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
                                        {txtBk8}
                                    </label>
                                </div>
                                <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="lname" type="text" placeholder={txtBk8}></input>
                            </div>
                            <div>
                                <div className='flex gap-1 '>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="bname">
                                        {txtBk9}
                                    </label>
                                </div>
                                <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="bname" type="text" placeholder={txtBk9}></input>
                            </div>
                            <div>
                                <div className='flex gap-1 '>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="baccount">
                                        {txtBk10}
                                    </label>
                                </div>
                                <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="baccount" type="text" placeholder={txtBk10}></input>
                            </div>
                            <div>
                                <div className='flex gap-1 '>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                                        {txtBk11}
                                    </label>
                                </div>
                                <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="country" type="text" placeholder={txtBk11}></input>
                            </div>
                            <div>
                                <div className='flex gap-1 '>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                                        {txtBk12}
                                    </label>
                                </div>
                                <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="state" type="text" placeholder={txtBk12}></input>
                            </div>
                            <div>
                                <div className='flex gap-1 '>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                        {txtBk13}
                                    </label>
                                </div>
                                <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="City"></input>
                            </div>
                            <div>
                                <div className='flex gap-1 '>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                        {txtBk14}
                                    </label>
                                </div>
                                <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder={txtBk14}></input>
                            </div>
                            <div>
                                <div className='flex gap-1 '>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="brouting">
                                        {txtBk15}
                                    </label>
                                </div>
                                <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="brouting" type="text" placeholder={txtBk15}></input>
                            </div>
                            <div>
                                <div className='flex gap-1 '>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="bcode">
                                        {txtBk16}
                                    </label>
                                </div>
                                <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="bcode" type="text" placeholder={txtBk16}></input>
                            </div>
                            <div>
                                <div className='flex gap-1 '>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="ssn">
                                        SSN
                                    </label>
                                </div>
                                <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="ssn" type="text" placeholder="SSN"></input>
                            </div>
                            <div>
                                <div className='flex gap-1 '>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="wpay">
                                        {txtBk17}
                                    </label>
                                </div>
                                <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="wpay" type="text" placeholder={txtBk17}></input>
                            </div>
                            <div>
                                <div className='flex gap-1 '>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="paypal">
                                        Paypal
                                    </label>
                                </div>
                                <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="paypal" type="text" placeholder="Paypal"></input>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-blue-450 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                {txtBk18}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </section >
    );
};