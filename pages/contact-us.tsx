import { Button, Input } from 'components';
import { PublicContainer } from 'components/wrappers/PublicContainer';
import { useFormControl, useFormGroup } from 'hooks';
import { Required } from 'validators';
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  let txtContac1,txtContac2;
  let txtContac3: string = '';
  let txtContac4: string = '';
  let txtContac5: string = '';
  let txtContac6: string = '';
  switch(router.locale) {    
    case "es":
      txtContac1 = 'Contáctanos';
      txtContac2 = 'Complete toda la información al lado y nos pondremos en contacto con usted dentro de las 48 horas.';
      txtContac3 = 'Enviar';
      txtContac4 = 'Tu nombre válido';
      txtContac5 = 'Tu email válido';
      txtContac6 = 'Tu mensaje';
        break;
    case "en-US":
      txtContac1 = 'Contact US';
      txtContac2 = 'Please fill out all the info beside and we will get back to you with-in 48hrs';
      txtContac3 = 'Send';
      txtContac4 = 'Your valid name';
      txtContac5 = 'Your valid email';
      txtContac6 = 'Your message';
        break;
    case "pt":
      txtContac1 = 'Contate-Nos';
      txtContac2 = 'Por favor, preencha todas as informações ao lado e entraremos em contato com você em 48 horas';
      txtContac3 = 'Mandar';
      txtContac4 = 'Seu nome válido';
      txtContac5 = 'Seu e-mail válido';
      txtContac6 = 'Sua mensagem';
        break;
    case "ru":
      txtContac1 = 'Связаться с нами';
      txtContac2 = 'Пожалуйста, заполните всю информацию рядом, и мы свяжемся с вами в течение 48 часов';
      txtContac3 = 'Отправлять';
      txtContac4 = 'Ваше действительное имя';
      txtContac5 = 'Ваш действующий адрес электронной почты';
      txtContac6 = 'Твое сообщение';
    default:
        
  }

  const ContactForm = useFormGroup({
    name: useFormControl(['', [Required]]),
    email: useFormControl(['', [Required]]),
    message: useFormControl(['', [Required]]),
  });

  const send = (data: any) => {
    console.log('data', data);
  };

  return (
    <PublicContainer>
      <h1 className="text-blue-450 text-center uppercase font-bold my-1">
        {txtContac1}
      </h1>
      <div className="text-xs text-center px-4 font-light text-black">
        {txtContac2}
      </div>
      <form onSubmit={ContactForm.handleSubmit(send)}>
        <Input name="name" formGroup={ContactForm} mode="light">
        {txtContac4}['']
        </Input>
        <Input name="email" formGroup={ContactForm} mode="light">
        {txtContac5}['']
        </Input>
        <Input name="message" formGroup={ContactForm} mode="light">
          {txtContac6}['']
        </Input>
        <div className="flex items-center justify-center">
          <Button type="solid" mode="submit">
            {txtContac3}
          </Button>
        </div>
      </form>
    </PublicContainer>
  );
};
