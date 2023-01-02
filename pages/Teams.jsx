import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Team.module.css";
import dta from "../components/team.json";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Particle from "../components/Particle";
import Volunteer from "../components/Volunteer";
import Mentor from "../components/Mentor";
const Teams = () => {
  const memberData = dta.teamMembers.memberData;
  return (
    <>
      <Particle />
      <Head>
        <title>Teams</title>
      </Head>
      <Header />
      <div className={styles.team}>
        <div className={styles.Stats__head}>Our Team</div>
        <div>
          <div className={styles.wrapper}>
            {memberData.map((member) => (
              <div className={styles.teamMember} key={member.id}>
                <div className={`${styles.imgBox} rounded-full md:h-[180px] md:w-[180px] h-[120px] w-[120px]`}>
              <Image
                src={`${member.image}`}
                alt={member.name}
                height={200}
                width={200}
                className={`${styles.teamMember__img} rounded-full`}
              />
              </div>
                <h1 className={styles.title}>{member.name}</h1>
                <h2 className={styles.subtitle}>{member.role}</h2>
                <div className={styles.social}>
                  <ul className={styles.socialItem}>
                    <Link
                      href={member.social.github}
                      alt={member.name}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <li className={styles.social__github}>
                        <FaGithub />
                      </li>
                    </Link>
                    <Link
                      href={member.social.twitter}
                      alt={member.name}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <li className={styles.social__twitter}>
                        <FaTwitter />
                      </li>
                    </Link>
                    <Link
                      href={member.social.linkedin}
                      alt={member.name}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <li className={styles.social__linkedin}>
                        <FaLinkedin />
                      </li>
                    </Link>
                    <Link
                      href={member.social.instagram}
                      alt={member.name}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <li className={styles.social__instagram}>
                        <FaInstagram />
                      </li>
                    </Link>

                    <Link
                      href={`mailto:${member.email}`}
                      alt={member.name}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <li className={styles.social__email}>
                        <HiOutlineMail />
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
            <Volunteer />
            <Mentor />
      <Footer />
    </>
  );
};

export default Teams;
