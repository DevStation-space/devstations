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
import ImportantBar from "../components/importantBar";

const Community = () => {
  return (
    <div style={{ color: "whitesmoke" }}>
      <Header />
      {/* <ImportantBar/> */}
      <div className={styles.background}>
        <div className={styles.container}>
          {/* <div className={`${styles.backImg} `}>
            <Image
              src={Img1}
              alt="images"
              height={300}
              width={300}
              className="m-10 h-[200p]"
            />
          </div> */}
        </div>
        <div className={styles.para1}>
          <p>Join Our Community Related Content</p>
        </div>
        <div className="px-10 flex flex-row text-xl py-20 justify-center">
          <div className=" flex flex-1 flex-row justify-evenly">
            <Link
              href="https://chat.whatsapp.com/H2F5iAyMcvp2kqScdiNn0i"
              traget="_blank"
              alt="whatsapp"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col ">
                <h1 className="align-center justify-center text-center px-10 py-4 ">
                  <FaWhatsapp className="bg-green-600 text-5xl rounded-xl" />
                </h1>
                <h1>Join Whatsapp</h1>
              </div>
            </Link>
            <Link
              href="https://discord.io/devstation"
              traget="_blank"
              alt="dicord"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col">
                <h1 className="align-center justify-center text-center px-10 py-4 ">
                  <FaDiscord className="bg-purple-600 text-5xl  rounded-xl"/>
                </h1>
                <h1>Join Discord</h1>
              </div>
            </Link>
          </div>
        </div>

        <Whatweoffer />
        <Teams />
        <Footer />
        <Particle />
      </div>
    </div>
  );
};

export default Community;
