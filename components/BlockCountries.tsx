import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import ReactFlagsSelect from "react-flags-select";
import { useState } from 'react';
import { Co, Ar, Us, Ca, Br } from "react-flags-select";
import { useRouter } from "next/router";


export const BlockCountries = (props: { admin: "model" | "fans" }) => {
    const router = useRouter();
    let txtBlo1,txtBlo2,txtBlo3,txtBlo4,txtBlo5,txtBlo6,txtBlo9;
    switch(router.locale) {    
      case "es":
        txtBlo1 = 'Información básica';
        txtBlo2 = 'Información bancaria';
        txtBlo3 = 'Bloquear países';
        txtBlo4 = 'Cambia la contraseña';
        txtBlo5 = 'Seleccione los países que desea bloquear';
        txtBlo6 = 'Guardar cambios';
        txtBlo9 = 'Información de suscripción';
          break;
      case "en-US":
        txtBlo1 = 'Basic Information';
        txtBlo2 = 'Banking Information';
        txtBlo3 = 'Block Countries';
        txtBlo4 = 'Change Password';
        txtBlo5 = 'Select countries you want to block';
        txtBlo6 = 'Save Changes';
        txtBlo9 = 'Subscription Information';
          break;
      case "pt":
        txtBlo1 = 'Informação básica';
        txtBlo2 = 'Informação bancária';
        txtBlo3 = 'Bloquear países';
        txtBlo4 = 'Mudar senha';
        txtBlo5 = 'Selecione os países que você deseja bloquear';
        txtBlo6 = 'Salve as alterações';
        txtBlo9 = 'Informações de assinatura';
          break;
      case "ru":
        txtBlo1 = 'Основная информация';
        txtBlo2 = 'Банковская информация';
        txtBlo3 ='Блокировать страны';
        txtBlo4 = 'Сменить пароль';
        txtBlo5 = 'Выберите страны, которые хотите заблокировать';
        txtBlo6 = 'Сохранить изменения';
        txtBlo9 = 'Информация о подписке';
      default:
          
    }

    const [selected, setSelected] = useState("");
    return (
        <section >
            <div className="m-8 md:m-12">
                <div className=" flex gap-4 mb-12 justify-between w-4/5 lg:text-lg text-sm lg:justify-start overflow-scroll  md:overflow-visible">
                    <Link href={'/admin/model/Information/BasicInfo'}>
                        <a className=" md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">{txtBlo1}</a>
                    </Link>
                    <Link href={'/admin/model/Information/BankingInfo'}>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">{txtBlo2}</a>
                    </Link>
                    <Link href={'/admin/model/Information/SubsInfo'}>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">{txtBlo9}</a>
                    </Link>

                    <a className="md:py-2 md:px-2 text-blue-450 border-b-[3px] border-blue-450 font-semibold">{txtBlo3}</a>
                    <Link href={'/admin/model/Information/ChangePassword'}>
                        <a className="md:py-2 md:px-2 text-gray-400 font-semibold hover:text-blue-450 transition duration-300 cursor-pointer">{txtBlo4}</a>
                    </Link>
                </div>


            </div>
            <section className='mb-12'>
                <div className="w-3/4 m-auto ">
                    <form className="bg-white rounded px-4 pt-6 pb-8 mb-4">
                        <div className="mb-6 lg:mb-1 flex justify-center m-auto w-full gap-9   ">
                            <div className='w-full'>
                                <div className='flex gap-1 '>
                                    <AiFillStar className='w-3 h-3 text-orange-500' />
                                    <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor='mname'>
                                        {txtBlo5}
                                    </label>
                                </div>
                                {/* <input className="shadow  appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="mname" type="text" placeholder="$7.99"></input> */}
                                <ReactFlagsSelect
                                    className=''
                                    countries={["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA",
                                        "BW", "BR", "IO", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV"
                                        , "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "PF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GU", "GT", "GG", "GN", "GW", "HT", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM"
                                        , "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ"
                                        , "MM", "NA", "NR", "NP", "NL", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RO", "RU", "RW", "KN", "LC", "WS", "SM", "ST", "SA", "SN", "RS", "SC"
                                        , "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "SS", "ES", "LK", "SD", "SR", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UY", "UZ", "VU", "VE", "VN", "VI", "YE", "ZM", "ZW"
                                    ]}
                                    customLabels={{
                                        AF: "Afghanistan",
                                        AL: "Albania",
                                        DZ: "Algeria",
                                        AS: "American Samoa",
                                        AD: "Andorra",
                                        AO: "Angola",
                                        AI: "Anguilla",
                                        AG: "Antigua and Barbuda",
                                        AR: "Argentina",
                                        AM: "Armenia",
                                        AW: "Aruba",
                                        AU: "Australia",
                                        AT: "Austria",
                                        AZ: "Azerbaijan",
                                        BS: "Bahamas",
                                        BH: "Bahrain",
                                        BD: "Bangladesh",
                                        BB: "Barbados",
                                        BY: "Belarus",
                                        BE: "Belgium",
                                        BZ: "Belize",
                                        BJ: "Benin",
                                        BM: "Bermuda",
                                        BT: "Bhutan",
                                        BO: "Bolivia, Plurinational State of",
                                        BA: "Bosnia and Herzegovina",
                                        BW: "Botswana",
                                        BR: "Brazil",
                                        IO: "British Indian Ocean Territory",
                                        BG: "Bulgaria",
                                        BF: "Burkina Faso",
                                        BI: "Burundi",
                                        KH: "Cambodia",
                                        CM: "Cameroon",
                                        CA: "Canada",
                                        CV: "Cape Verde",
                                        KY: "Cayman Islands",
                                        CF: "Central African Republic",
                                        TD: "Chad",
                                        CL: "Chile",
                                        CN: "China",
                                        CO: "Colombia",
                                        KM: "Comoros",
                                        CG: "Congo",
                                        CD: "Democratic Republic of the Congo",
                                        CK: "Cook Islands",
                                        CR: "Costa Rica",
                                        CI: "Côte d'Ivoire",
                                        HR: "Croatia",
                                        CU: "Cuba",
                                        CW: "Curaçao",
                                        CY: "Cyprus",
                                        CZ: "Czech Republic",
                                        DK: "Denmark",
                                        DJ: "Djibouti",
                                        DM: "Dominica",
                                        DO: "Dominican Republic",
                                        EC: "Ecuador",
                                        EG: "Egypt",
                                        SV: "El Salvador",
                                        GQ: "Equatorial Guinea",
                                        ER: "Eritrea",
                                        EE: "Estonia",
                                        ET: "Ethiopia",
                                        FK: "Falkland Islands (Malvinas)",
                                        FO: "Faroe Islands",
                                        FJ: "Fiji",
                                        FI: "Finland",
                                        FR: "France",
                                        PF: "French Polynesia",
                                        GA: "Gabon",
                                        GM: "Gambia",
                                        GE: "Georgia",
                                        DE: "Germany",
                                        GH: "Ghana",
                                        GI: "Gibraltar",
                                        GR: "Greece",
                                        GL: "Greenland",
                                        GD: "Grenada",
                                        GU: "Guam",
                                        GT: "Guatemala",
                                        GG: "Guernsey",
                                        GN: "Guinea",
                                        GW: "Guinea-Bissau",
                                        HT: "Haiti",
                                        HN: "Honduras",
                                        HK: "Hong Kong",
                                        HU: "Hungary",
                                        IS: "Iceland",
                                        IN: "India",
                                        ID: "Indonesia",
                                        IR: "Iran, Islamic Republic of",
                                        IQ: "Iraq",
                                        IE: "Ireland",
                                        IM: "Isle of Man",
                                        IL: "Israel",
                                        IT: "Italy",
                                        JM: "Jamaica",
                                        JP: "Japan",
                                        JE: "Jersey",
                                        JO: "Jordan",
                                        KZ: "Kazakhstan",
                                        KE: "Kenya",
                                        KI: "Kiribati",
                                        KP: "North Korea",
                                        KR: "South Korea",
                                        KW: "Kuwait",
                                        KG: "Kyrgyzstan",
                                        LA: "Lao People's Democratic Republic",
                                        LV: "Latvia",
                                        LB: "Lebanon",
                                        LS: "Lesotho",
                                        LR: "Liberia",
                                        LY: "Libya",
                                        LI: "Liechtenstein",
                                        LT: "Lithuania",
                                        LU: "Luxembourg",
                                        MO: "Macao",
                                        MK: "Republic of Macedonia",
                                        MG: "Madagascar",
                                        MW: "Malawi",
                                        MY: "Malaysia",
                                        MV: "Maldives",
                                        ML: "Mali",
                                        MT: "Malta",
                                        MH: "Marshall Islands",
                                        MQ: "Martinique",
                                        MR: "Mauritania",
                                        MU: "Mauritius",
                                        MX: "Mexico",
                                        FM: "Micronesia, Federated States of",
                                        MD: "Republic of Moldova",
                                        MC: "Monaco",
                                        MN: "Mongolia",
                                        ME: "Montenegro",
                                        MS: "Montserrat",
                                        MA: "Morocco",
                                        MZ: "Mozambique",
                                        MM: "Myanmar",
                                        NA: "Namibia",
                                        NR: "Nauru",
                                        NP: "Nepal",
                                        NL: "Netherlands",
                                        NZ: "New Zealand",
                                        NI: "Nicaragua",
                                        NE: "Niger",
                                        NG: "Nigeria",
                                        NU: "Niue",
                                        NF: "Norfolk Island",
                                        MP: "Northern Mariana Islands",
                                        NO: "Norway",
                                        OM: "Oman",
                                        PK: "Pakistan",
                                        PW: "Palau",
                                        PS: "Palestinian Territory",
                                        PA: "Panama",
                                        PG: "Papua New Guinea",
                                        PY: "Paraguay",
                                        PE: "Peru",
                                        PH: "Philippines",
                                        PN: "Pitcairn",
                                        PL: "Poland",
                                        PT: "Portugal",
                                        PR: "Puerto Rico",
                                        QA: "Qatar",
                                        RO: "Romania",
                                        RU: "Russia",
                                        RW: "Rwanda",
                                        KN: "Saint Kitts and Nevis",
                                        LC: "Saint Lucia",
                                        WS: "Samoa",
                                        SM: "San Marino",
                                        ST: "Sao Tome and Principe",
                                        SA: "Saudi Arabia",
                                        SN: "Senegal",
                                        RS: "Serbia",
                                        SC: "Seychelles",
                                        SL: "Sierra Leone",
                                        SG: "Singapore",
                                        SX: "Sint Maarten",
                                        SK: "Slovakia",
                                        SI: "Slovenia",
                                        SB: "Solomon Islands",
                                        SO: "Somalia",
                                        ZA: "South Africa",
                                        SS: "South Sudan",
                                        ES: "Spain",
                                        LK: "Sri Lanka",
                                        SD: "Sudan",
                                        SR: "Suriname",
                                        SZ: "Swaziland",
                                        SE: "Sweden",
                                        CH: "Switzerland",
                                        SY: "Syria",
                                        TW: "Taiwan",
                                        TJ: "Tajikistan",
                                        TZ: "Tanzania",
                                        TH: "Thailand",
                                        TG: "Togo",
                                        TK: "Tokelau",
                                        TO: "Tonga",
                                        TT: "Trinidad and Tobago",
                                        TN: "Tunisia",
                                        TR: "Turkey",
                                        TM: "Turkmenistan",
                                        TC: "Turks and Caicos Islands",
                                        TV: "Tuvalu",
                                        UG: "Uganda",
                                        UA: "Ukraine",
                                        AE: "United Arab Emirates",
                                        GB: "United Kingdom",
                                        US: "United States",
                                        UY: "Uruguay",
                                        UZ: "Uzbekistan",
                                        VU: "Vanuatu",
                                        VE: "Venezuela, Bolivarian Republic of",
                                        VN: "Viet Nam",
                                        VI: "Virgin Islands",
                                        YE: "Yemen",
                                        ZM: "Zambia",
                                        ZW: "Zimbabwe",
                                    }}
                                    
                                    placeholder="Select Countries"
                                    selected={selected}
                                    onSelect={(code) => setSelected(code)} />
                            </div>

                        </div>
                        <div className='grid grid-cols-1 mb-5'>
                            <div className='flex gap-2 items-center'>
                                <Co /> <h1 className='text-lg text-gray-400 uppercase'>Colombia</h1>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Ar /> <h1 className='text-lg text-gray-400 uppercase'>Argentina</h1>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Br /> <h1 className='text-lg text-gray-400 uppercase'>Brasil</h1>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Us /> <h1 className='text-lg text-gray-400 uppercase'>U.S.A</h1>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Ca /> <h1 className='text-lg text-gray-400 uppercase'>Canada</h1>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-blue-450 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                {txtBlo6}
                            </button>

                        </div>
                    </form>
                </div>
            </section>
        </section >
    );
};