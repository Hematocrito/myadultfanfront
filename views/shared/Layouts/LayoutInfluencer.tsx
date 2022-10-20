import BannerInfluencerImage from "public/assets/img/upload_final.png";
import BannerInfluencer from "components/BannerInfluencer";
import { Navbar } from "views/shared";
import SubscribeInfluencer from "components/SubscribeInfluencer";
import TipModal from "components/TipModal";
import { authService } from "services";
import React, { useState, useEffect } from 'react';

export default function LayoutInfluencer({ children }: any) {
  console.log("Layout")
  const user = authService.userValue;

  const [perfil, setPerfil] = useState<any>({})
  useEffect(() => {  
    const fetchData = async () => {  
        
        let tk_code = localStorage.getItem('tkWomen')
        console.log("TOKEN "+tk_code);
        let token:any = tk_code? tk_code: ''
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Cookie", "connect.sid=s%3ARXgmaXuczqJjqr1AOJwMZgzzG1e1ICgA.BP5u1GbXbWXaL4Nvmvb3kk%2BrEBiJbpux3pXNdpdsFg4");
    
        var options:RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        const endpoint = "https://api.myadultfan.com/users/me";
        const response = await fetch(endpoint, options)
        const result = await response.text()
        var details = JSON.parse(result);
        console.log("??????"+details.status)
        let objeto: any = {};
        objeto.username = details.data.username
        objeto.bio = details.data.bio
        objeto.cover = details.data.cover    
        setPerfil(objeto)                          
    }
    fetchData()
        // make sure to catch any error
        .catch(console.error);;
    
}, [])
console.log("mandado ",perfil.bio)
  var arreglo = [];
  arreglo[0] = perfil.cover
  arreglo[1] = perfil.username
  arreglo[2] = perfil.bio

  return (
    <>
      <BannerInfluencer influencer={arreglo} />
      <SubscribeInfluencer biografia={arreglo[2]} />
      <Navbar
        user={user}
        routes={[
          { title: "FEED", path: "influencers/id/feed" },
          { title: "Clips", path: "influencers/id/clips/all" },
          { title: "PHOTOS", path: "influencers/id/photos" },
          { title: "TIP ME", path: "influencers/id/tipme" },
        ]}
      />
      {children}
      <TipModal />
    </>
  );
}
