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
        <title>Dev Station</title>
        <meta name="description" content="Dev Station " />
      </Head>
      <Header />
      <ImportantBar/>
      <Welcome />
      <Partners/>
      <Events  />
      <Reach />
      <Team />
      <Footer />
      <Particle />
    </div>
  );
}
