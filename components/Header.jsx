import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/images/logo.png";
import styles from "../styles/Header.module.css";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav>
        <div className="flex  justify-between md:px-20 px-4">
          <Link href="/" alt="">
            <div className="flex flex-row justify-center cursor-pointer items-center">
              <div className="w-20 h-20  rounded-full items-center">
                <Image
                  src={Logo}
                  alt="home"
                  className="w-20 h-20 rounded-full  object-cover"
                />
              </div>
              <h1 className="items-center text-2xl py-5">
                <span className="text-[#FFD600] mx-1">DEV</span>STATION
              </h1>
            </div>
          </Link>
          <div className="text-white md:flex hidden   items-center ">
            <div className="flex flex-row  items-center">
              <ul className="flex  ">
                <Link href="/Community">
                  <li className={styles.listItem}>Community</li>
                </Link>

                <Link href="/Teams">
                  <li className={styles.listItem}>Team</li>
                </Link>

                <Link href="/Event">
                  <li className={styles.listItem}>Events</li>
                </Link>

                <Link href="/About">
                  <li className={styles.listItem}>About</li>
                </Link>
                {/* <Link href='https://hack2skill.com/hack/innoverse' alt='hackathon' target='_blank'>
                        <li className='hover:text-black hover:bg-white cursor-pointer px-2 py-1'>Innoverse Registration</li>
                </Link> */}
              </ul>
            </div>
          </div>
          <div className="flex relative items-center">
            {toggleMenu ? (
              <AiOutlineClose
                fontSize={28}
                className="text-white md:hidden cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <HiMenuAlt4
                fontSize={28}
                className="text-white md:hidden cursor-pointer"
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <ul
                className="z-10 fixed top-0 -right-2 p-3 w-[40vw] h-screen shadow-xl md:hidden list-none
                flex flex-col justify-start items-center rounded-md blueGlassmorphism text-white animate-slide-in"
              >
                <li className="text-xl w-full my-2">
                  <AiOutlineClose onClick={() => setToggleMenu(false)} />
                </li>
                <div className="items-center">
                  <ul className="flex flex-col text-xl">
                    <Link href="/Community">
                      <li className={styles.listItem}>Community</li>
                    </Link>

                    <Link href="/Club">
                      <li className={styles.listItem}>Club</li>
                    </Link>

                    <Link href="/Event">
                      <li className={styles.listItem}>Events</li>
                    </Link>

                    <Link href="/About">
                      <li className={styles.listItem}>About</li>
                    </Link>
                    <Link href='https://hack2skill.com/hack/innoverse' alt='hackathon' target='_blank'>
                        <li>Innoverse Registration</li>
                    </Link>

                  </ul>
                </div>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
