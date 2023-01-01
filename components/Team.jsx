import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Team.module.css";
import dta from "./team.json";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Team = () => {
  const memberData = dta.teamMembers.memberData;
  return (
    <div className={styles.team}>
      <div className={styles.Stats__head}>Our Team</div>

      <div className={styles.wrapper}>
        {
          memberData.map((member) => (
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
          ))[0]
        }

        {
          memberData.map((member) => (
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
          ))[1]
        }

        {
          memberData.map((member) => (
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
          ))[2]
        }
      </div>
      <div className="text-center justify-center flex px-5 py-3 ">
        <Link href="/Teams">
          <button className="bg-blue-600 text-xl px-2 py-1 rounded-lg hover:bg-blue-900 shadow-yellow-300 shadow-md">
            Load More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Team;
