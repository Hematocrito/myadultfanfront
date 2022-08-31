import { PublicContainer } from 'components/wrappers/PublicContainer';
import { useRouter } from "next/router";

export default () => {

  const router = useRouter();
  let txtTerm1,txtTerm2,txtTerm3,txtTerm4,txtTerm5,txtTerm6,txtTerm7,txtTerm8;
  let termParr1, termParr2,termParr3,termParr4,termParr5,termParr6,termParr7;
  switch(router.locale) {    
    case "es":
      txtTerm1 = "Términos del servicio";
      txtTerm2 = 'Bienvenido a';
      termParr1 = 'El sitio web solo se ofrece y está disponible para Usuarios mayores de 18 años. Al utilizar el sitio web, usted declara y garantiza que tiene 18 años de edad. Si no cumple con todas estas condiciones, no debe acceder ni utilizar el Sitio Web.';
      termParr2 = 'El sitio web es un sitio web de redes sociales y un servicio de aplicación que permite a los Usuarios crear un perfil, cargar fotos y videos en su perfil, establecer un precio de suscripción mensual pagadero por otros Usuarios que deseen ver su Contenido de usuario y, por lo tanto, generar ingresos de los Fans.';
      termParr3 = 'Estos Términos rigen su uso del sitio web, incluido cualquier contenido, funcionalidad y servicio. al registrarse y utilizar myadultfan.com, usted acepta y acepta estar sujeto y cumplir con estos Términos. Si no desea aceptar estos Términos de servicio, no debe acceder ni utilizar el sitio web.';
      termParr4 = 'Toda la información de registro y perfil de la cuenta de usuario es veraz y precisa, y cualquier Contenido de usuario que proporcione es suyo y no infringe los derechos de propiedad intelectual ni ningún otro derecho de propiedad de un tercero.';
      txtTerm3 = 'Política de cancelación';
      termParr5 = 'Puede cancelar su suscripción en cualquier momento para evitar futuras facturas. Para cancelar su suscripción y evitar futuras facturas simplemente seleccione ';
      txtTerm4 = 'Facturación';
      termParr6 = 'desde el menú de configuración de myadultfan.com para cambiar sus preferencias de facturación. Esto evitará que se acumulen más cargos. No tendrá derecho a un reembolso parcial de las tarifas de membresía no utilizadas si ha utilizado los servicios durante cualquier parte de su período de facturación.';
      txtTerm5 = 'Reportes y Quejas.';
      termParr7 = '(a) Informes de contenido. Cualquier persona que identifique contenido en el sitio web que crea que es ilegal, que infrinja nuestros Términos y condiciones, o que infrinja de otro modo una regulación o norma, puede presentar una queja a nuestro equipo de atención al cliente las 24 horas, los 7 días de la semana, por correo electrónico, mensajería. Todas las solicitudes se revisan dentro de los siete (7) días hábiles. Si dicha revisión arroja evidencia de contenido ilegal o contenido que viola los Términos y condiciones de la Compañía o nuestra Política de cumplimiento, el contenido se eliminará de inmediato de nuestro sistema. (b) Apelaciones de deportación. Cualquier persona representada en el contenido del sitio web puede enviar una apelación para que se elimine ese contenido a nuestro equipo de atención al cliente las 24 horas, los 7 días de la semana, por correo electrónico o mensajería. Si no se puede establecer el consentimiento, o si la persona representada en el contenido puede demostrar que el consentimiento es nulo según la ley aplicable, el contenido identificado se eliminará con efecto inmediato. Si la Compañía no está de acuerdo con que el consentimiento sea nulo según la ley aplicable, la Compañía debe permitir que un organismo neutral resuelva dicho desacuerdo, a expensas de la Compañía.';
      txtTerm6 = 'Nombre';
      txtTerm7 = 'Queja';
      txtTerm8 = 'Enviar';
      break;
    case "en-US":
      txtTerm1 = 'Terms of Service';
      txtTerm2 = 'Welcome to the';
      termParr1 = 'The website is only offered and available to Users who are 18 years of age or older. By using the Website, you represent and warrant that you are 18 years of age. If you do not meet all of these conditions, you must not acces or use the Website.';
      termParr2 = 'The Website is a social media website and application service which allows Users to create a profile, upload photos and videos into their profile, set a monthly subscription price payable by other Users who wish to view their User Content and thereby generate revenue from Fans.';
      termParr3 = 'These Terms govern your use of the Website, including any content, functionality, and services. by registering with and using myadultfan.com, you hereby accept and agree to be bound by and abide by these Terms. If you do not want to agree to these Terms of Service, you must not access or use the Website.';
      termParr4 = 'All User Account registration and profile information is thuthful and accurate and that any User Content you provide is your own and does not infringe the intellectual property rights or any other proprietorial rights of a third party.';
      txtTerm3 = 'Cancellation Policy';
      termParr5 = 'You may cancel your subscription at any timr to prevent future billing. To cancel your subscription and prevent future billing simply select';
      txtTerm4 = 'Billing';
      termParr6 = 'from the settings menu of myadultfan.com to change your billing preferences. This will prevent any further charges from accurring. You will not be entitled to a partial refund of any unused membership fees if you have used the services for any part of your billing period.';      
      termParr7 = '(a) Content Reporting. Any person who identifies content on the Website that they believe to be illegal, in violation of our Terms and Conditions, or otherwise in violation of a regulation or standard, is able to submit a complaint to our 24/7 Customer Support Team via email, messaging. All requests are reviewed within seven (7) business days. If any such review yields evidence of illegal content, or content that violates the Companys Terms and Conditions or our Compliance Policy, the content will be immediately removed from our system. (b) Appeals for Removal. Any person depicted in content on the Website is able to submit an appeal to have that content removed to our 24/7 Customer Support Team via email, messaging. If consent cannot be established, or if the person depicted in the content can demonstrate that the consent is void under applicable law, the identified content will be removed with immediate effect. If the Company disagrees that consent is void under applicable law, the Company must allow such disagreement to be resolved by a neutral body, at the Companys expense.';
      txtTerm6 = 'Name';
      txtTerm7 = 'Complaint';
      txtTerm8 = 'Send';
      break;
    case "pt":
      txtTerm1 = 'Termos de serviço';
      txtTerm2 = 'Bem vindo à';
      termParr1 = 'O site é oferecido e está disponível apenas para usuários com 18 anos de idade ou mais. Ao usar o Site, você declara e garante que tem 18 anos de idade. Se você não atender a todas essas condições, não deverá acessar ou usar o Site.';
      termParr2 = 'O Site é um site de mídia social e serviço de aplicativo que permite aos Usuários criar um perfil, fazer upload de fotos e vídeos em seu perfil, definir um preço de assinatura mensal a pagar por outros Usuários que desejam visualizar seu Conteúdo de Usuário e, assim, gerar receita de Fãs.';
      termParr3 = 'Estes Termos regem o uso do Site, incluindo qualquer conteúdo, funcionalidade e serviços. ao se registrar e usar myadultfan.com, você aceita e concorda em ficar vinculado e cumprir estes Termos. Se você não quiser concordar com estes Termos de Serviço, você não deve acessar ou usar o Site.';
      termParr4 = 'Todas as informações de registro e perfil da Conta de Usuário são verdadeiras e precisas e qualquer Conteúdo de Usuário que você fornecer é seu e não infringe os direitos de propriedade intelectual ou quaisquer outros direitos de propriedade de terceiros.';
      txtTerm3 = 'Política de cancelamento';
      termParr5 = 'Você pode cancelar sua assinatura a qualquer momento para evitar cobranças futuras. Para cancelar sua assinatura e evitar cobranças futuras, basta selecionar';
      txtTerm4 = 'Cobrança';
      termParr6 = 'no menu de configurações do myadultfan.com para alterar suas preferências de cobrança. Isso evitará que outras cobranças ocorram. Você não terá direito a um reembolso parcial de quaisquer taxas de associação não utilizadas se tiver usado os serviços por qualquer parte do seu período de cobrança.';
      termParr7 = '(a) Relatório de Conteúdo. Qualquer pessoa que identifique conteúdo no site que acredite ser ilegal, violando nossos Termos e Condições ou violando um regulamento ou padrão, pode enviar uma reclamação à nossa Equipe de Suporte ao Cliente 24 horas por dia, 7 dias por semana, por e-mail, Mensagens. Todas as solicitações são analisadas em até 7 (sete) dias úteis. Se qualquer revisão apresentar evidências de conteúdo ilegal ou conteúdo que viole os Termos e Condições da Empresa ou nossa Política de Conformidade, o conteúdo será imediatamente removido do nosso sistema. (b) Apelações para Remoção. Qualquer pessoa retratada no conteúdo do site pode enviar um recurso para que esse conteúdo seja removido para nossa equipe de suporte ao cliente 24 horas por dia, 7 dias por semana, por e-mail ou mensagens. Se o consentimento não puder ser estabelecido, ou se a pessoa retratada no conteúdo puder demonstrar que o consentimento é nulo de acordo com a lei aplicável, o conteúdo identificado será removido com efeito imediato. Se a Empresa discordar que o consentimento é nulo de acordo com a lei aplicável, a Empresa deve permitir que tal desacordo seja resolvido por um órgão neutro, às custas da Empresa.';
      txtTerm6 = 'Nome';
      txtTerm7 = 'Reclamação';
      txtTerm8 = 'Mandar';
        break;
    case "ru":
      txtTerm1 = 'условия обслуживания';
      txtTerm2 = 'Добро пожаловать в';
      termParr1 = 'Веб-сайт предлагается и доступен только Пользователям в возрасте 18 лет и старше. Используя Веб-сайт, вы заявляете и гарантируете, что вам исполнилось 18 лет. Если вы не соответствуете всем этим условиям, вы не должны заходить на Веб-сайт или использовать его.';
      termParr2 = 'Веб-сайт представляет собой веб-сайт социальной сети и службу приложений, которая позволяет Пользователям создавать профиль, загружать фотографии и видео в свой профиль, устанавливать ежемесячную стоимость подписки, которую должны оплачивать другие Пользователи, желающие просматривать свой Пользовательский контент и тем самым получать доход от Поклонников.';
      termParr3 = 'Настоящие Условия регулируют использование вами Веб-сайта, включая любой контент, функциональные возможности и услуги. регистрируясь и используя myadultfan.com, вы тем самым принимаете и соглашаетесь соблюдать настоящие Условия. Если вы не хотите соглашаться с настоящими Условиями обслуживания, вы не должны заходить на Веб-сайт или использовать его.';
      termParr4 = 'Вся регистрационная информация об Учетной записи пользователя и информация о профиле являются достоверными и точными, и что любой Пользовательский контент, который вы предоставляете, является вашим собственным и не нарушает права интеллектуальной собственности или любые другие права собственности третьих лиц.';
      txtTerm3 = 'Политика отмены';
      termParr5 = 'Вы можете отменить подписку в любое время, чтобы предотвратить выставление счетов в будущем. Чтобы отменить подписку и предотвратить выставление счетов в будущем, просто выберите';
      txtTerm4 = 'Выставление счетов';
      termParr6 = 'в меню настроек myadultfan.com, чтобы изменить свои платежные предпочтения. Это предотвратит дальнейшие расходы. Вы не имеете права на частичное возмещение любых неиспользованных членских взносов, если вы использовали услуги в течение какой-либо части вашего расчетного периода.';
      termParr7 = '(а) Отчеты о содержании. Любое лицо, которое идентифицирует контент на Веб-сайте, который, по его мнению, является незаконным, нарушающим наши Положения и условия или иным образом нарушающим правила или стандарты, может подать жалобу в нашу круглосуточную службу поддержки клиентов по электронной почте, обмен сообщениями. Все запросы рассматриваются в течение семи (7) рабочих дней. Если какой-либо такой обзор выявит доказательства незаконного контента или контента, нарушающего Условия и положения Компании или нашу Политику соответствия, контент будет немедленно удален из нашей системы. (b) Апелляции об удалении. Любое лицо, изображенное в контенте на Веб-сайте, может подать апелляцию на удаление этого контента в нашу круглосуточную службу поддержки клиентов по электронной почте или в сообщениях. Если согласие не может быть установлено или если лицо, изображенное в контенте, может продемонстрировать, что согласие является недействительным в соответствии с применимым законодательством, идентифицированный контент будет удален с немедленным вступлением в силу. Если Компания не согласна с тем, что согласие является недействительным в соответствии с применимым законодательством, Компания должна позволить разрешить такое несогласие нейтральному органу за счет Компании.';
      txtTerm6 = 'Имя';
      txtTerm7 = 'Жалоба';
      txtTerm8 = 'Отправлять' ;
    default:
          
  }

  return (
    <PublicContainer>
      <h1 className="text-blue-450 uppercase font-bold">{txtTerm1}</h1>
      <div className="text-xs font-medium text-black">
        {txtTerm2} &quot;myadultfan.com&quot; website
        <br />
        <br />
        {termParr1}
        <br />
        <br />
        {termParr2}
        <br />
        <br />
        {termParr3}
        <br />
        <br />
        {termParr4}
      </div>
      <h1 className="text-blue-450 uppercase font-bold mt-2">
        {txtTerm3}
      </h1>
      <div className="text-xs font-medium text-black">
        {termParr5} &apos;{txtTerm4}&apos; {termParr6}
        <br />
      </div>
      <h1 className="text-blue-450 uppercase font-bold mt-2">
        {txtTerm5}
      </h1>
      <p className="text-xs font-medium text-black">
        {termParr7}
      </p>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder={txtTerm6}
          className="border-b border-blue-450 h-12 outline-none text-gray-600"
        />
        <input
          type="text"
          placeholder="Email"
          className="border-b border-blue-450 h-12 outline-none text-gray-600"
        />
        <input
          type="text"
          placeholder="Url"
          className="border-b border-blue-450 h-12 outline-none text-gray-600"
        />
        <input
          type="text"
          placeholder={txtTerm7}
          className="border-b border-blue-450 h-12 outline-none text-gray-600"
        />
        <button className="bg-blue-450 rounded-xl mt-2 text-white font-bold max-w-fit px-4 self-center">
          {txtTerm8}
        </button>
      </form>
    </PublicContainer>
  );
};
