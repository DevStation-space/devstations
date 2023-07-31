import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="title" content="DEV STATION" />
        <meta name="description" content="DevStation is an Open Source Community that helps tech enthusiasts to grow their self in tech. It provides free resources for the developers as well as the beginners. We provide a platform for the developers to discuss their ideas and projects. " />
        <meta name="keywords" content="community, hackathon,events,workshop, session, job, internship " />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
