import Image from 'next/image';
import Dmca from 'public/dmca_logo.png';
import Logo from 'public/logoWhite.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  let footTxt1,footTxt2,footTxt3,footTxt4,footTxt5;
  switch(router.locale) {    
    case "es":
      footTxt1 = 'Términos de servicio',
      footTxt2 = 'Política de privacidad';
      footTxt3 = 'Contáctanos';
      footTxt4 = 'Derechos de privacidad de California';
      footTxt5 = 'Política de quejas';
        break;
    case "en-US":
      footTxt1 = 'Term of service';
      footTxt2 = 'Privacy & Policy';
      footTxt3 = 'Contact Us';
      footTxt4 = 'California Privacy Rights';
      footTxt5 = 'Complaints Policy';
        break;
    case "pt":
      footTxt1 = 'Termos de serviço';
      footTxt2 = 'Política de Privacidade';
      footTxt3 = 'Entre em contato conosco';
      footTxt4 = 'Direitos de privacidade da Califórnia';
      footTxt5 = 'Política de Reclamações';
        break;
    case "ru":
      footTxt1 = 'Срок службы';
      footTxt2 = 'Политика конфиденциальности';
      footTxt3 = 'Связаться с нами';
      footTxt4 = 'Права на конфиденциальность в Калифорнии';
      footTxt5 = 'Политика жалоб';
    default:
        
  }

  const year = new Date().getFullYear();
  return (
    <footer className="bg-blue-450 py-2 w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 grid-rows-4 gap-2 text-stone-50 mb-2">
        <Link href={'/terms-of-service'}>
          <a className="text-sm font-semibold">{footTxt1}</a>
        </Link>
        <Link href={'/privacy-policy'}>
          <a className="text-sm font-semibold">{footTxt2}</a>
        </Link>
        <Link href={'/usc2257'}>
          <a className="text-sm font-semibold">USC2257</a>
        </Link>
        <Link href={'/dmca'}>
          <a className="text-sm font-semibold">DMCA</a>
        </Link>
        <Link href={'/contact-us'}>
          <a className="text-sm font-semibold">{footTxt3}</a>
        </Link>
        <Link href={'/california-privacy-right'}>
          <a className="text-sm font-semibold">{footTxt4}</a>
        </Link>
        <Link href={'/complaints-policy'}>
          <a className="text-sm font-semibold">{footTxt5}</a>
        </Link>
      </div>
      <div className="flex items-center justify-center w-[90%] text-sm">
        <div className="h-4 relative aspect-[6/1]">
          <Image src={Logo} layout="fill" alt="logo"></Image>
        </div>
        <span className="font-semibold ml-1 text-stone-50">
          &copy; Copyright {year}
        </span>
      </div>
      <div className="w-16 h-5 sm:w-20 relative">
        <Image src={Dmca} alt="dmca" layout="fill" />
      </div>
    </footer>
  );
};

export default Footer;
