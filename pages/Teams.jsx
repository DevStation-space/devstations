import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Team.module.css";
import dta from "../components/team.json";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Particle from "../components/Particle";
import Volunteer from "../components/Volunteer";
import Mentor from "../components/Mentor";
import ImportantBar from "../components/importantBar";
const Teams = () => {
  const memberData = dta.teamMembers.memberData;
  return (
    <div style={{color:'whitesmoke'}}>
      <Head>
        <title>Teams</title>
      </Head>
      <Header />
      <ImportantBar />
      <div className={styles.team}>
        <div className={styles.Stats__head}>Our Team</div>
        <div>
          <div className={styles.wrapper}>
            {memberData.map((member) => (
              <div className={styles.teamMember} key={member.id}>
              <div className={styles.imgBoder}></div>
              <div className={styles.iconGitCover}></div>
              <div className={styles.iconStyleGit}>
                <Link  href={member.social.github}  alt={member.name}  rel="noopener noreferrer"
                    target="_blank"
                  >
                  <FaGithub size={25}/>
                </Link>
                </div>
                <div className={styles.iconTwitCover}></div>
                <div className={styles.iconStyleTwit}>
                <Link  href={member.social.twitter}  alt={member.name}  rel="noopener noreferrer"
                    target="_blank"
                  >
                  <FaTwitter size={25}/>
                </Link>
                </div>
                <div className={styles.iconLinCover}></div>
                <div className={styles.iconStyleLin}>
                <Link href={member.social.linkedin} alt={member.name} rel="noopener noreferrer"
                    target="_blank"
                  >
                  <FaLinkedinIn size={25} />
                </Link>
                </div>
                <div className={styles.iconInstaCover}></div>
                <div className={styles.iconStyleInsta}>
                <Link  href={member.social.instagram}  alt={member.name}  rel="noopener noreferrer"
                    target="_blank"
                  >
                  <FaInstagram size={25} />
                </Link>
                </div>
                <div className={styles.iconEmailCover}></div>
                <div className={styles.iconStyleEmail}>
                <Link  href={`mailto:${member.email}`}  alt={member.name}  rel="noopener noreferrer"
                    target="_blank"
                  >
                  <HiOutlineMail size={25} />
                </Link>
              </div>
              <div className={`${styles.imgBox} rounded-full md:h-[180px] md:w-[180px] h-[120px] w-[120px]`}>
              <Image
                src={`${member.image}`}
                alt={member.name}
                height={100}
                width={100}
                className={`${styles.teamMember__img}  rounded-full`}
              />
              </div>
              
              <h1 className={styles.title}>{member.name}</h1>
              <h2 className={styles.subtitle}>{member.role}</h2>
            </div>
            ))}
          </div>
        </div>
      </div>
      <Volunteer />
      <Mentor />
      <Footer />
      <Particle />

    </div>
  );
};

export default Teams;
