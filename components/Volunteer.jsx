import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Team.module.css";
import dta from "./team.json";
import { HiOutlineMail } from "react-icons/hi";
const Volunteer = () => {
  const volunteer = dta.volunteerData.volunteer;
  return (
    <div className={styles.team}>
      <div className={styles.Stats__head}>Our Volunteer</div>
      <div>
        <div className={styles.wrapper}>
          {volunteer.map((volunteer) => (
            <div className={styles.teamMember} key={volunteer.id}>
              <div
                className={`${styles.imgBox} rounded-full md:h-[180px] md:w-[180px] h-[120px] w-[120px]`}
              >
                <Image
                  src={`${volunteer.image}`}
                  alt={volunteer.name}
                  height={200}
                  width={200}
                  className={`${styles.teamMember__img} rounded-full`}
                />
              </div>
              <h1 className={styles.title}>{volunteer.name}</h1>
              <h2 className={styles.subtitle}>{volunteer.role}</h2>
              <div className={styles.social}>
                <ul className={styles.socialItem}>
                  <Link href={volunteer.email}>
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
  );
};

export default Volunteer;
