import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Dev Station</title>
        {/* <link rel="icon" href="../assets/images/favicon.ico" /> */}

      </Head>
     <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;
