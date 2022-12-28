import Image from "next/image";
import React from "react";
import styles from "../styles/Welcome.module.css";
// import Particle from './Particle'
import Support from "../assets/images/background.png";
import Bubble from "../assets/images/bubble.png";
import SOS from "../assets/images/sos.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
// import Events from './Events'
const Welcome = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col   md:px-20  px-5 md:py-20 py-3">
        <div className="md:w-3/2 w-full ">
          <h1 className="md:text-4xl  text-xl  text-left items-center">
            {" "}
            <span className="text-yellow-500">DEV</span>
            <span className="text-yellow-500">STATION COMMUNITY</span>
          </h1>

          <p className="md:text-xl  text-md text-justify py-10 items-center align-center justify-center text-yellow-200 max-w-2xl">
            DevStation is an Open Source Community that helps tech enthusiasts
            to grow their self in tech. It provides free resources for the
            developers as well as the beginners. We provide a platform for the
            developers to discuss their ideas and projects. We are also
            providing Jobs & internships, hackathons,meet ups, Mentorship,
            Workshops from Industry Experts, Industrial visits,Open Source
            Projects & Much More!!!
          </p>

          {/* <div className='flex justify-center'> */}
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
                </span>{" "}
              </h1>
            </Link>
          </button>
          {/* </div> */}
          {/* </Link> */}
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
        {/* <div className='md:px-20  px-5 bg-[#0E0C0C] rounded-2xl'>
          <p className={styles.gradPara}>COMMUNITIES /PARTNERS THAT WE ARE WORKING WITH !!</p>
        </div> */}
        <div className={styles.Stats}>
          <div className={styles.Stats_head}>
            COMMUNITIES /PARTNERS THAT WE ARE WORKING WITH !!
          </div>
          <div className={styles.Stats_holder}>
            <div className={styles.stats_block}>
              <div className={styles.stats_data}>
                <Image src={Bubble} alt="" />
              </div>
              {/* <div className={styles.stats_datatype}>
                        Amazon
                    </div> */}
            </div>
            <div className={styles.stats_block}>
              <div className={styles.stats_data}>
                <Image src={SOS} alt="" />
              </div>
              {/* <div className={styles.stats_datatype}>
                        Paytm
                    </div> */}
            </div>
            {/* <div className={styles.stats_block}>
                    <div className={styles.stats_data}>
                    <img src="https://cdn.worldvectorlogo.com/logos/tata-consultancy-services.svg" alt="" />
                    </div>
                    <div className={styles.stats_datatype}>
                       TCS
                    </div>
                </div> */}
            {/* <div className={styles.stats_block}>
                    <div className={styles.stats_data}>
                    <img src="https://financialit.net/sites/default/files/hitachi_vantara_0.jpg" alt="" />
                    </div>
                    <div className={styles.stats_datatype}>
                      Hitachi Vantara
                    </div>
                </div> */}
            {/* <div className={styles.stats_block}>
                    <div className={styles.stats_data}>
                    <img src="https://www.cognizant.com/content/dam/cognizant_foundation/Dotcomimage/CognizantLogo400.jpg" alt="" />
                    </div>
                    <div className={styles.stats_datatype}>
                      Cognizant
                    </div>
                </div> */}
            {/* <div className={styles.stats_block}>
                    <div className={styles.stats_data}>
                    <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1415386231/utypaslbyxwfuwhfdzxd.png" alt="" />
                    </div>
                    <div className={styles.stats_datatype}>
                     Infosys
                    </div>
                </div> */}
            {/* <div className={styles.stats_block}>
                    <div className={styles.stats_data}>
                    <img src="https://brc.org.uk/media/675924/deloitte.png" alt="" />
                    </div>
                    <div className={styles.stats_datatype}>
                     Deloitte
                    </div>
                </div> */}
            {/* <div className={styles.stats_block}>
                    <div className={styles.stats_data}>
                    <img src="https://i.gadgets360cdn.com/large/Teos_website_small_1650287397786.jpg" alt="" />
                    </div>
                    <div className={styles.stats_datatype}>
                     Tezos India
                    </div>
                </div> */}
            {/* <div className={styles.stats_block}>
                    <div className={styles.stats_data}>
                    <img src="https://imageio.forbes.com/specials-images/imageserve/5c13d2f64bbe6f0f2aa26233/0x0.jpg?format=jpg&crop=416,416,x0,y0,safe&height=416&width=416&fit=bounds" alt="" />
                    </div>
                    <div className={styles.stats_datatype}>
                     Cisco
                    </div> 
                 </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
