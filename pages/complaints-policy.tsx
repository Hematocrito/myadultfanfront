import { Button, Input } from 'components';
import { PublicContainer } from 'components/wrappers/PublicContainer';
import { useFormControl, useFormGroup } from 'hooks';
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  let txtComplin1,parraComplin1;
  let txtComplin2: string = '';
  let txtComplin3: string = '';
  let txtComplin4: string = '';
  switch(router.locale) {    
    case "es":
      txtComplin1 = 'Política de quejas';
      parraComplin1 = 'Estamos haciendo todo lo posible para que disfrute del contenido proporcionado. Si, en cualquier caso, tiene alguna queja, háganoslo saber. Todas las quejas serán revisadas y resueltas dentro de los siete días hábiles.';
      txtComplin2 = 'Nombre';
      txtComplin3 = 'Queja';
      txtComplin4 = 'Enviar';
        break;
    case "en-US":
      txtComplin1 = 'Complaints Policy';
      parraComplin1 = 'We are doing our best so you will enjoy the content provided. If, in any case, you have a complaint, please let us know. All complaints will be reviewed and resolved within seven business days.';
      txtComplin2 = 'Name';
      txtComplin3 = 'Complaint';
      txtComplin4 = 'Send';
        break;
    case "pt":
      txtComplin1 = 'Política de reclamações';
      parraComplin1 = 'Estamos fazendo o nosso melhor para que você aproveite o conteúdo fornecido. Se, em qualquer caso, você tiver uma reclamação, por favor nos avise. Todas as reclamações serão analisadas e resolvidas dentro de sete dias úteis.';
      txtComplin2 = 'Nome';
      txtComplin3 = 'Reclamação';
      txtComplin4 = 'Mandar';
        break;
    case "ru":
      txtComplin1 = 'Политика жалоб';
      parraComplin1 = 'Мы делаем все возможное, чтобы вам понравился предоставленный контент. Если, в любом случае, у вас есть жалоба, сообщите нам об этом. Все жалобы будут рассмотрены и разрешены в течение семи рабочих дней';
      txtComplin2 = 'Имя';
      txtComplin3 = 'Жалоба';
      txtComplin4 = 'Отправлять';
    default:
        
  }

  const Form = useFormGroup({
    name: useFormControl(['']),
    email: useFormControl(['']),
    url: useFormControl(['']),
    complaint: useFormControl(['']),
  });

  const send = (data: any) => {
    console.log('data :>> ', data);
  };
  return (
    <PublicContainer>
      <h1 className="text-blue-450 text-center uppercase font-bold my-1">
        {txtComplin1}
      </h1>
      <div className="text-xs text-center px-4 font-light text-black">
       {parraComplin1}
      </div>
      <form onSubmit={Form.handleSubmit(send)}>
        <Input name="name" formGroup={Form} mode="light">
          {txtComplin2}['']
        </Input>
        <Input name="email" formGroup={Form} mode="light">
          {['Email', '']}
        </Input>
        <Input name="url" formGroup={Form} mode="light">
          {['Url', '']}
        </Input>
        <Input name="complaint" formGroup={Form} mode="light">
          {txtComplin3}['']
        </Input>
        <div className="flex items-center justify-center">
          <Button type="solid" mode="submit">
            {txtComplin4}
          </Button>
        </div>
      </form>
    </PublicContainer>
  );
};
