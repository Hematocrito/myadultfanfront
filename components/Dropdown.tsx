import Router from "next/router";

/* Id de prueba 8d0bb92e-ad3b-439e-81ff-e09b2a692577*/
function reenviarES() {
    const {pathname} = Router;
    console.log('PATH ! '+pathname);
    switch (pathname) {        
        case '/login/fans':
            Router.push('/es');            
            break;
        case '/register/fans':
            Router.push('/es/register/fans');
            break;
        case '/register/model':
            Router.push('/es/register/model');
            break;
        case '/register/model-full':
            Router.push('/es/register/model-full');
            break;
        case '/feed':
            Router.push('/es/feed');
            break;
        case '/influencers/id/feed':
            Router.push('/es/influencers/id/feed');
            break;
        case '/admin/model/Earning/EarningReport':
            Router.push('/es/admin/model/Earning/EarningReport');
            break;
        case '/terms-of-service':
            Router.push('/es/terms-of-service'); 
            break;
        case '/usc2257':
            Router.push('/es/usc2257'); 
            break;
        case '/contact-us':
            Router.push('/es/contact-us'); 
            break;
        case '/complaints-policy':
            Router.push('/es/complaints-policy'); 
            break;
        case '/privacy-policy':
            Router.push('/es/privacy-policy'); 
            break;
        case '/dmca':
            Router.push('/es/dmca'); 
            break;
        case '/california-privacy-right':
            Router.push('/es/california-privacy-right'); 
            break;
    }
}
function reenviarEN() {
    const {pathname} = Router;
    switch (pathname) {
        case '/login/fans':
            Router.push('/en-US');
            break;
        case '/register/fans':
            Router.push('/en-US/register/fans');
            break;
        case '/register/model':
            Router.push('/en-US/register/model');
            break;
        case '/register/model-full':
            Router.push('/en-US/register/model-full');
            break;
        case '/feed':
            Router.push('/en-US/feed');
            break;
        case '/influencers/id/feed':
            Router.push('/en-US/influencers/id/feed');
            break;
        case '/admin/model/Earning/EarningReport':
            Router.push('/en-US/admin/model/Earning/EarningReport');
            break;
        case '/terms-of-service':
            Router.push('/en-US/terms-of-service'); 
            break;
        case '/usc2257':
            Router.push('/en-US/usc2257'); 
            break;
        case '/contact-us':
            Router.push('/en-US/contact-us'); 
            break;
        case '/complaints-policy':
            Router.push('/en-US/complaints-policy'); 
            break;
        case '/privacy-policy':
            Router.push('/en-US/privacy-policy'); 
            break;
        case '/dmca':
            Router.push('/en-US/dmca'); 
            break;
        case '/california-privacy-right':
            Router.push('/en-US/california-privacy-right'); 
            break;
    }
}
function reenviarPT() {
    const {pathname} = Router;
    console.log('PATH ! '+pathname);
    switch (pathname) {
        case '/login/fans':
            Router.push('/pt/login/fans');
            break;
        case '/register/fans':
            Router.push('/pt/register/fans');
            break;
        case '/register/model':
            Router.push('/pt/register/model');
            break;    
        case '/register/model-full':
            Router.push('/pt/register/model-full');
            break;
        case '/feed':
            Router.push('/pt/feed');
            break;
        case '/influencers/id/feed':
            Router.push('/pt/influencers/id/feed');
            break;
        case '/admin/model/Earning/EarningReport':
            Router.push('/pt/admin/model/Earning/EarningReport');
            break;
        case '/terms-of-service':
            Router.push('/pt/terms-of-service'); 
            break;
        case '/usc2257':
            Router.push('/pt/usc2257'); 
            break;
        case '/contact-us':
            Router.push('/pt/contact-us'); 
            break;
        case '/complaints-policy':
            Router.push('/pt/complaints-policy'); 
            break;
        case '/privacy-policy':
            Router.push('/pt/privacy-policy'); 
            break;
        case '/dmca':
            Router.push('/pt/dmca'); 
            break;
        case '/california-privacy-right':
            Router.push('/pt/california-privacy-right'); 
            break;
    }
}
function reenviarRU() {
    const {pathname} = Router;
    switch (pathname) {
        case '/login/fans':
            Router.push('/ru/login/fans');
            break;
        case '/register/fans':
            Router.push('/ru/register/fans');
            break;
        case '/register/model':
            Router.push('/ru/register/model');
            break;
        case '/register/model-full':
            Router.push('/ru/register/model-full');
            break;
        case '/feed':
            Router.push('/ru/feed');
            break;
        case '/influencers/id/feed':
            Router.push('/ru/influencers/id/feed');
            break;
        case '/admin/model/Earning/EarningReport':
            Router.push('/pt/admin/model/Earning/EarningReport');
            break;
        case '/terms-of-service':
            Router.push('/ru/terms-of-service'); 
            break;
        case '/usc2257':
            Router.push('/ru/usc2257'); 
            break;
        case '/contact-us':
            Router.push('/ru/contact-us'); 
            break;
        case '/complaints-policy':
            Router.push('/ru/complaints-policy'); 
            break;
        case '/privacy-policy':
            Router.push('/ru/privacy-policy'); 
            break;
        case '/dmca':
            Router.push('/ru/dmca'); 
            break;
        case '/california-privacy-right':
            Router.push('/ru/california-privacy-right'); 
            break;
    }
}

export default function  Dropdown(){
    return (
        <select className="font-myriad font-medium bg-white bg-clip-text text-lg text-white" name="selector_idioma" defaultValue={'DEFAULT'}>
            <option className="bg-white text-blue-450" onClick={reenviarEN} value="DEFAULT">
                English
            </option>
            <option className="bg-white text-blue-450" onClick={reenviarES}>
                Español
            </option>
            <option className="bg-white text-blue-450" onClick={reenviarPT}>
                Português
            </option>
            <option className="bg-white text-blue-450" onClick={reenviarRU}>
                Русский
            </option>
        </select>
    );
  }