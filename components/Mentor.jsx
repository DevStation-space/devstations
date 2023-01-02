import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Team.module.css";
import dta from "./team.json";
import { HiOutlineMail } from "react-icons/hi";

const Mentor = () => {
    const mentor = dta.mentorData.mentor;
  return (
    <div>
        <div className={styles.team}>
      <div className={styles.Stats__head}>Mentors</div>
      <div>
        <div className={styles.wrapper}>
          {mentor.map((mentor) => (
            <div className={styles.teamMember} key={mentor.id}>
              <div
                className={`${styles.imgBox} rounded-full md:h-[180px] md:w-[180px] h-[120px] w-[120px]`}
              >
                <Image
                  src={`${mentor.image}`}
                  alt={mentor.name}
                  height={200}
                  width={200}
                  className={`${styles.teamMember__img} rounded-full`}
                />
              </div>
              <h1 className={styles.title}>{mentor.name}</h1>
              <h2 className={styles.subtitle}>{mentor.role}</h2>
              <div className={styles.social}>
                <ul className={styles.socialItem}>
                  <Link href={mentor.email}>
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
    </div>
  )
}

export default Mentor