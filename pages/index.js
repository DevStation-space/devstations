import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Dev Station</title>
        <link rel="icon" href="../assets/images/favicon.ico" />
        <meta name="description" content="Dev Station " />
      </Head>
      <section className={styles.section}>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>

      </section>
      {/* <Header /> */}
      home
      <Welcome/>
      {/* <Footer /> */}
    </div>
  );
}
