import Image from "next/image";
import styles from "../styles/Welcome.module.css";
import Support from "../assets/images/background.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import data from "./community.json"
const Welcome = () => {
  const community = data.communityPartner.communityDetails;
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
          <div className={`${styles.Stats_head} text-lg md:text-xl`}>
            COMMUNITIES /PARTNERS THAT WE ARE WORKING WITH !!
          </div>
          <div className={styles.Stats_holder}>
            {community.map((member) => (
              <div className={styles.stats_block} key={member.id}>
                <div className={styles.stats_data}>
                  <Image
                    src={member.logo}
                    alt={member.name}
                    width={400}
                    height={400}
                    className='bg-transparent'
                  />
                  </div>
                  <h1 className='text-white px-2 py-1 text-2xl '>
                    {member.name}
                  </h1>
                  </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
