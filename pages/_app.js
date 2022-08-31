// TODO: delete this file if no have use

import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
// import Container from '../components/Container';
import { authService } from "../services/auth.service";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import Layout from 'components/Layout';
import Head from "next/head";
import Navbar from "components/Navbar";
import { Outlet } from "utils/Outlet";
import Footer from "components/Footer";
import './../styles/profile.css';
const { userValue } = authService.user;

function MyApp({ Component, pageProps }) {
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   console.log({ subscriber });
  //   if (subscriber) subscriber.subscribe(setUser);
  //   // suscriber.suscribe(setUser);
  // }, []);

  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <div className="flex flex-col overflow-x-hidden bg-white min-h-screen">
        <Head>
          <title>My Adult fan</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
            integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
            crossOrigin="anonymous"
          ></link>
        </Head>
        
        <section className="h-full min-h-screen">
        
          <Outlet>
            {/* <Navbar user={userValue} /> }
            {/* {authorized &&  */}
            <Component {...pageProps} />
            {/* } */}
          </Outlet>
        </section>
        <Footer></Footer>
      </div>
    </SessionProvider>
  );
}

export default MyApp;
