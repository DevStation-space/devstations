import Head from "next/head";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Particle from "../components/Particle";
import Reach from "../components/Reach";
import Welcome from "../components/Welcome";
import styles from "../styles/Home.module.css";
import Team from "../components/Team";
import Partners from "../components/Partners";
import ImportantBar from "../components/importantBar";


export default function Home() {


  return (
    <div className={`${styles.wrapper}`}>
      <Head>
        <meta name="title" content="DEV STATION" />
        <meta name="description" content="DevStation is an Open Source Community that helps tech enthusiasts to grow their self in tech. It provides free resources for the developers as well as the beginners. We provide a platform for the developers to discuss their ideas and projects. " />
        <meta name="keywords" content="community, hackathon,events,workshop, session, job, internship " />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <Header />
      {/* <ImportantBar/> */}
      <Welcome />
      <Partners />
      <Events />
      <Reach />
      <Team />
      <Footer />
      <Particle />
    </div>
  );
}
