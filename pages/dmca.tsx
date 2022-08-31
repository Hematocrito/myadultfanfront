import { PublicContainer } from 'components/wrappers/PublicContainer';
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  let parraDmca1,parraDmca2;
  switch(router.locale) {    
    case "es":
      parraDmca1 = 'myadultfan.com respeta los derechos de propiedad intelectual de terceros y cumple voluntariamente con la Ley de derechos de autor del milenio digital (DMCA). myadultfan.com ha implementado una política para eliminar a los infractores reincidentes de los derechos de autor. Una copia de nuestra política de infractores reincidentes (RIP) está disponible a pedido de nuestros usuarios.';
      parraDmca2 = 'Tenga en cuenta que, según la DMCA, cualquier persona que, a sabiendas, haga declaraciones falsas importantes en una notificación de infracción reclamada o en una contranotificación puede ser responsable de daños y perjuicios.';
        break;
    case "en-US":
      parraDmca1 = 'myadultfan.com respects the intellectual property rights of third parties and voluntarily complies with the Digital Millennium Copyright Act (DMCA). myadultfan.com has implemented a policy to terminate repeat copyright infringers. A copy of our repeat infringer policy (RIP) is available upon request to our users.';
      parraDmca2 = 'Please note that, under the DMCA, any person who knowingly makes material misrepresentations in a notification of claimed infringement or in a counter-notification may be liable for damages.';
        break;
    case "pt":
      parraDmca1 = 'myadultfan.com respeita os direitos de propriedade intelectual de terceiros e cumpre voluntariamente o Digital Millennium Copyright Act (DMCA). myadultfan.com implementou uma política para encerrar infratores reincidentes de direitos autorais. Uma cópia de nossa política de infratores reincidentes (RIP) está disponível mediante solicitação aos nossos usuários.';
      parraDmca2 = 'Por favor, note que, sob a DMCA, qualquer pessoa que conscientemente faça declarações falsas materiais em uma notificação de violação alegada ou em uma contra-notificação pode ser responsabilizada por danos.';
        break;
    case "ru":
      parraDmca1 = 'myadultfan.com уважает права интеллектуальной собственности третьих лиц и добровольно соблюдает Закон об авторском праве в цифровую эпоху (DMCA). myadultfan.com внедрил политику прекращения повторных нарушений авторских прав. Копия нашей политики в отношении повторных нарушений (RIP) доступна по запросу для наших пользователей';
      parraDmca2 = 'Обратите внимание, что в соответствии с DMCA любое лицо, которое сознательно вносит существенные искажения в уведомление о заявленном нарушении или во встречном уведомлении, может нести ответственность за ущерб';
    default:
        
  }

  return (
    <PublicContainer>
      <h1 className="text-blue-450 uppercase font-bold mt-2">DMCA</h1>
      <div className="text-xs font-medium text-black">
        {parraDmca1}
        <br />
        <br />
        {parraDmca2}
      </div>
    </PublicContainer>
  );
};
