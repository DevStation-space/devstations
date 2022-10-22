import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Particle from "../components/Particle";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Dev Station</title>

      </Head>
     <Header/>
     <Particle/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;
