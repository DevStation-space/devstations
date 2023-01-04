import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Team.module.css";
import dta from "./team.json";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Team = () => {
  const memberData = dta.teamMembers.memberData;
  return (
    <div className={styles.team} style={{ padding: '65px',height: '100vh'}}>
      <div className={styles.Stats__head}>Our Team</div>

      <div className={styles.wrapper}>
        {
          memberData.map((member) => (
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
          ))[0]
        }

        {
          memberData.map((member) => (
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
          ))[1]
        }

        {
          memberData.map((member) => (
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
          ))[2]
        }
      </div>
      <div className="text-center justify-center flex px-5 py-3 ">
        <Link href="/Teams">
          <button className="bg-blue-600 text-xl px-2 py-1 rounded-lg hover:bg-blue-900 shadow-yellow-300 shadow-md">
            View Team
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Team;
