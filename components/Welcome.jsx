import Image from "next/image";
import React from "react";
import styles from "../styles/Welcome.module.css";
import Support from "../assets/images/background.png";
import Bubble from "../assets/images/bubble.png";
import SOS from "../assets/images/sos.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
const Welcome = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col   md:px-20  px-5 md:py-20 py-3">
        <div className="md:w-3/2 w-full ">
          <h1 className="md:text-4xl  text-xl  text-left items-center">
            {" "}
            <span className="text-yellow-500">DEV</span>
            <span className="">STATION COMMUNITY</span>
          </h1>

          <p className="md:text-xl  text-md text-justify py-10 items-center align-center justify-center  max-w-2xl">
            DevStation is an Open Source Community that helps tech enthusiasts
            to grow their self in tech. It provides free resources for the
            developers as well as the beginners. We provide a platform for the
            developers to discuss their ideas and projects. We are also
            providing Jobs & internships, hackathons ,meet ups, Mentorship,
            Workshops from Industry Experts, Industrial visits,Open Source
            Projects & Much More!!!
          </p>


          <button className="px-3 py-2 bg-[#ffec04] hover:bg-pink-500 hover:cursor-pointer justify-center rounded-full md:text-2xl text-md">
            <Link
              href="https://discord.io/devstation"
              target="_blank"
              rel="noreferrer noopener"
            >
              <h1 className="flex flex-row items-center  justify-between text-[#212121] font-serif">
                Join Us
                <span className=" item-center  justify-between text-center p-1">
                  <BsArrowRight />
                </span>
              </h1>
            </Link>
          </button>
        </div>
        <div className="  ">
          <Image
            src={Support}
            alt="support"
            width={600}
            height={600}
            className="bg-transparent "
          />
        </div>
      </div>

      <div>
        <div className={styles.Stats}>
          <div className={styles.Stats_head}>
            COMMUNITIES /PARTNERS THAT WE ARE WORKING WITH !!
          </div>
          <div className={styles.Stats_holder}>
            <div className={styles.stats_block}>
              <div className={styles.stats_data}>
                <Image src={Bubble} alt="" />
              </div>
            </div>
            <div className={styles.stats_block}>
              <div className={styles.stats_data}>
                <Image src={SOS} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
