import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Team.module.css";
import dta from "./team.json";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Team = () => {
  const memberData = dta.teamMembers.memberData;
  console.log(memberData);
  return (
    <div className={styles.team}>
      <div className={styles.Stats__head}>Our Team</div>

      <div className={styles.wrapper}>
        {memberData.map((member) => (
          <div className={styles.teamMember} key={member.id}>
            <Image
              src={`${member.image}`}
              alt={member.name}
              height={200}
              width={200}
              className={styles.teamMember__img}
            />
            <h1 className={styles.title}>{member.name}</h1>
            <h2 className={styles.subtitle}>{member.role}</h2>
            <div className={styles.social}>
              <ul className={styles.socialItem}>
                <Link href={member.social.github}>
                  <li className={styles.social__github}>
                    <FaGithub />
                  </li>
                </Link>
                <Link href={member.social.twitter}>
                  <li className={styles.social__twitter}>
                    <FaTwitter />
                  </li>
                </Link>
                <Link href={member.social.linkedin}>
                  <li className={styles.social__linkedin}>
                    <FaLinkedin />
                  </li>
                </Link>
                <Link href={member.social.instagram}>
                  <li className={styles.social__instagram}>
                    <FaInstagram />
                  </li>
                </Link>

                <Link href={`mailto:${member.email}`}>
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
  );
};

export default Team;
