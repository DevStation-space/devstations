import React from "react";
import styles from "../styles/Community.module.css";
import { FaWhatsapp, FaDiscord } from "react-icons/fa";
import Image from "next/image";
import Img1 from "../assets/images/Frame 3.png";
import Particle from "../components/Particle";
import Link from "next/link";
import Whatweoffer from "../components/Whatweoffer";
import Teams from "../components/Team";
import Header from "../components/Header";
import Footer from "../components/Footer";

const community = () => {
  return (
    <>
      <Header />
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={`${styles.backImg} `}>
            <Image
              src={Img1}
              alt="images"
              height={300}
              width={300}
              className="m-10 h-[200p]"
            />
          </div>
        </div>
        <div className={styles.para2}>
          <div className={styles.para1}>
            <p>Join Our Community Related Content</p>
          </div>
          <div className={styles.icons}>
            <Link
              href="https://chat.whatsapp.com/H2F5iAyMcvp2kqScdiNn0i"
              traget="_blank"
              alt="whatsapp"
            >
              <div className={styles.icon1}>
                <FaWhatsapp />
                Join Whatsapp
              </div>
            </Link>
            <Link
              href="https://discord.io/devstation"
              traget="_blank"
              alt="dicord"
            >
              <div className={styles.icon2}>
                <FaDiscord />
                Join Discord
              </div>
            </Link>
          </div>
        </div>

        <Whatweoffer />
        <Teams />
        <Footer />
        <Particle />
      </div>
    </>
  );
};

export default community;
