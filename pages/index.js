import Head from "next/head";
import Particle from "../components/Particle";
import Welcome from "../components/Welcome";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Dev Station</title>
        <meta name="description" content="Dev Station " />
      </Head>
      {/* <Header /> */}
      <Particle/>
      <Welcome/>
      {/* <Footer /> */}
    </div>
  );
}
