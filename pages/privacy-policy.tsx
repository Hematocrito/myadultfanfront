import { PublicContainer } from 'components/wrappers/PublicContainer';
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  let txtPriva1,txtPriva2,parraPriva1;
  switch(router.locale) {    
    case "es":
      txtPriva1 = 'Política de privacidad';
      txtPriva2 = 'Bienvenido al ';
      parraPriva1 = 'La privacidad no es un concepto nuevo. Los seres humanos siempre han deseado privacidad en su vida social y privada. Pero la idea de la privacidad como derecho humano es un fenómeno relativamente moderno. En todo el mundo se han desarrollado leyes y reglamentos para la protección de datos relacionados con el gobierno, la educación, la salud, los niños, los consumidores, las instituciones financieras, etc. Estos datos son fundamentales para la persona a la que pertenecen. La privacidad y la seguridad de los datos unen a las personas y las industrias y ejecutan sistemas complejos en nuestra sociedad. Desde números de tarjetas de crédito y números de seguro social hasta direcciones de correo electrónico y números de teléfono, nuestra información confidencial de identificación personal es importante. Este tipo de información en manos poco fiables puede tener consecuencias de largo alcance. Las empresas o sitios web que manejan información de clientes deben publicar sus Políticas de privacidad en sus sitios web comerciales. Si posee un sitio web, una aplicación web, una aplicación móvil o una aplicación de escritorio que recopila o procesa datos de usuario, seguramente tendrá que publicar una Política de privacidad en su sitio web (o dar acceso en la aplicación al acuerdo completo de la Política de privacidad)';
        break;
    case "en-US":
      txtPriva1 = 'Privacy & Policy';
      txtPriva2 = 'Welcome to the ';
      parraPriva1 = 'Privacy is not a new concept. Humans have always desired privacy in their social as well as private lives. But the idea of privacy as a human right is a relatively modern phenomenon. Around the world, laws and regulations have been developed for the protection of data related to government, education, health, children, consumers,  financial institutions, etc. This data is critical to the person it  belongs to. Data privacy and security binds individuals and  industries together and runs complex systems in our society. From credit card numbers and social security numbers to email addresses and phone numbers, our sensitive, personally identifiable information is important. This sort of information in unreliable hands can potentially have far-reaching consequences. Companies or websites that handle customer information are required to publish their Privacy Policies on their business websites. If you own a website, web app, mobile app or desktop app that collects or processes user data, you most certainly will have to post a Privacy Policy on your website (or give in-app access to the full Privacy Policy agreement)';
        break;
    case "pt":
      txtPriva1 = 'Política de Privacidade';
      txtPriva2 = 'Bem vindo à ';
      parraPriva1 = 'Privacidade não é um conceito novo. Os seres humanos sempre desejaram privacidade em suas vidas sociais e privadas. Mas a ideia de privacidade como um direito humano é um fenômeno relativamente moderno. Em todo o mundo, leis e regulamentos foram desenvolvidos para a proteção de dados relacionados ao governo, educação, saúde, crianças, consumidores, instituições financeiras, etc. Esses dados são críticos para a pessoa a quem pertencem. A privacidade e a segurança dos dados unem indivíduos e indústrias e executam sistemas complexos em nossa sociedade. De números de cartão de crédito e números de previdência social a endereços de e-mail e números de telefone, nossas informações confidenciais de identificação pessoal são importantes. Esse tipo de informação em mãos não confiáveis ​​pode ter consequências de longo alcance. Empresas ou sites que lidam com informações de clientes são obrigados a publicar suas Políticas de Privacidade em seus sites comerciais. Se você possui um site, aplicativo da web, aplicativo móvel ou aplicativo de desktop que coleta ou processa dados do usuário, certamente terá que publicar uma Política de Privacidade em seu site (ou fornecer acesso no aplicativo ao contrato completo da Política de Privacidade)';
        break;
    case "ru":
      txtPriva1 = 'Политика конфиденциальности';
      txtPriva2 = 'Добро пожаловать в ';
      parraPriva1 = 'Конфиденциальность — не новая концепция. Люди всегда желали уединения как в социальной, так и в личной жизни. Но идея неприкосновенности частной жизни как права человека — относительно новое явление. Во всем мире были разработаны законы и правила для защиты данных, связанных с правительством, образованием, здравоохранением, детьми, потребителями, финансовыми учреждениями и т. д. Эти данные имеют решающее значение для человека, которому они принадлежат. Конфиденциальность и безопасность данных объединяют людей и отрасли и управляют сложными системами в нашем обществе. От номеров кредитных карт и номеров социального страхования до адресов электронной почты и номеров телефонов наша конфиденциальная информация, позволяющая установить личность, очень важна. Такая информация в ненадежных руках потенциально может иметь далеко идущие последствия. Компании или веб-сайты, которые обрабатывают информацию о клиентах, обязаны публиковать свои Политики конфиденциальности на своих бизнес-сайтах. Если вы владеете веб-сайтом, веб-приложением, мобильным приложением или настольным приложением, которое собирает или обрабатывает пользовательские данные, вам, безусловно, придется опубликовать Политику конфиденциальности на своем веб-сайте (или предоставить в приложении доступ к полному соглашению о Политике конфиденциальности)';
    default:
        
  }

  return (
    <PublicContainer>
      <h1 className="text-blue-450 uppercase font-bold mt-2">
        {txtPriva1}
      </h1>
      <div className="text-xs font-medium text-black">
        {txtPriva2} &quot;myadultfan.com&quot; website
        <br />
        <br />
        {parraPriva1}
      </div>
    </PublicContainer>
  );
};
