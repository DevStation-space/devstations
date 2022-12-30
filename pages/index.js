import Head from "next/head";
import { useEffect, useState } from "react";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Particle from "../components/Particle";
import Welcome from "../components/Welcome";
import styles from "../styles/Home.module.css";
import Reach from "../components/Reach";


export default function Home() {


  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Dev Station</title>
        <meta name="description" content="Dev Station " />
      </Head>
      <Header />
      <Welcome />
      <Events  />
      <Reach />
      <Footer />
      <Particle />
    </div>
  );
}
