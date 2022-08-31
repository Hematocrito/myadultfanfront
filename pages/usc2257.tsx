import { PublicContainer } from 'components/wrappers/PublicContainer';
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  let txtUsc1,parrafUsc1,txtUsc2,parrafUsc2,txtUsc3,parrafUsc3;
  switch(router.locale) {    
    case "es":
      txtUsc1 = '18 USC Aviso de cumplimiento de la sección 2257';
      parrafUsc1 = 'Todas las personas que aparecen en cualquier representación visual de una conducta sexualmente explícita real que aparece o está contenida de otro modo en madultfan.com tenían más de dieciocho (18) años en el momento en que se creó la imagen visual.';
      txtUsc2 = 'Declaración de exención -- Contenido producido por terceros:';
      parrafUsc2 = 'Los propietarios y operadores de myadultfan.com no son los';
      txtUsc3 = 'productores';
      parrafUsc3 = 'como dicho término se define en 18 U.S.C. 2257 o jurisprudencia posterior, de cualquiera de los contenidos visuales contenidos en este sitio web. Todos los terceros que carguen contenido en este sitio web deben adherirse y cumplir con USC 2257. De conformidad con el Título 18 U.S.C. §2257(h)(2)(B)(v) y 47 U.S.C. §230(c), los operadores de este sitio web se reservan el derecho de eliminar el contenido publicado por terceros que los operadores consideren indecente, obsceno, difamatorio o inconsistente con sus políticas y términos de servicio.';
        break;
    case "en-US":
      txtUsc1 = '18 U.S.C. Section 2257 Compliance Notice';
      parrafUsc1 = 'All persons that appear in any visual portrayal of actual sexually explicit conduct appearing or otherwise contained within myadultfan.com were over the age of eighteen (18) years at the time the visual image was created.';
      txtUsc2 = 'Exemption Statement -- Content Produced by Third Parties:';
      parrafUsc2 = 'The owners and operators of myadultfan.com are not the';
      txtUsc3 = 'producers';
      parrafUsc3 = 'as such term is defined in 18 U.S.C. 2257 or subsequent case law, of any of the visual content contained in this website. All Third Parties that upload content on to this website must adhere to, and comply with USC 2257. Pursuant to Title 18 U.S.C. §2257(h)(2)(B)(v) and 47 U.S.C. §230(c), the operators of this website reserve the right to delete content posted by Third Parties which operators deem to be indecent, obscene, defamatory or inconsistent with their policies and terms of service.';
        break;
    case "pt":
      txtUsc1 = '18 U.S.C. Seção 2257 Aviso de Conformidade';
      parrafUsc1 = 'Todas as pessoas que aparecem em qualquer representação visual de conduta sexualmente explícita real aparecendo ou de outra forma contida no myadultfan.com tinham mais de dezoito (18) anos no momento em que a imagem visual foi criada.';
      txtUsc2 = 'Declaração de isenção -- Conteúdo produzido por terceiros:';
      parrafUsc2 = 'Os proprietários e operadores do myadultfan.com não são os';
      txtUsc3 = 'produtores';
      parrafUsc3 = 'como tal termo é definido em 18 U.S.C. 2257 ou jurisprudência posterior, de qualquer conteúdo visual contido neste site. Todos os Terceiros que carregam conteúdo neste site devem aderir e cumprir com a USC 2257. De acordo com o Título 18 U.S.C. §2257(h)(2)(B)(v) e 47 U.S.C. §230(c), os operadores deste site reservam-se o direito de excluir o conteúdo postado por terceiros que os operadores considerem indecentes, obscenos, difamatórios ou inconsistentes com suas políticas e termos de serviço.';
        break;
    case "ru":
      txtUsc1 = '18 USC Уведомление о соответствии разделу 2257';
      parrafUsc1 = 'Все лица, которые появляются в любом визуальном изображении фактического сексуального поведения, появляющегося или иным образом содержащегося на myadultfan.com, были старше восемнадцати (18) лет на момент создания визуального изображения';
      txtUsc2 = 'Заявление об исключении — Контент, созданный третьими лицами:';
      parrafUsc2 = 'Владельцы и операторы myadultfan.com не являются';
      txtUsc3 = 'производители';
      parrafUsc3 = 'как этот термин определен в 18 U.S.C. 2257 или последующим судебным прецедентам любого визуального контента, содержащегося на этом веб-сайте. Все третьи стороны, которые загружают контент на этот веб-сайт, должны соблюдать и соблюдать положения USC 2257. В соответствии с разделом 18 U.S.C. §2257(h)(2)(B)(v) и 47 U.S.C. §230(c), операторы этого веб-сайта оставляют за собой право удалять контент, размещенный третьими сторонами, который операторы считают непристойным, непристойным, клеветническим или несовместимым с их политикой и условиями обслуживания';
    default:
        
  }

  return (
    <PublicContainer>
      <h1 className="text-blue-450 uppercase font-bold mt-2">USC 2257</h1>
      <div className="text-xs font-medium text-black">
        {txtUsc1}
        <br />
        <br />
        {parrafUsc1}
        <br />
        <br />
        {txtUsc2}
        <br />
        <br />
        {parrafUsc2} &quot;{txtUsc3}&quot; {parrafUsc3} 
      </div>
    </PublicContainer>
  );
};
