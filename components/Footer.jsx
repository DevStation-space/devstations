import Link from "next/link";
import { BsLinkedin, BsTwitter} from "react-icons/bs";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import {MdOutlineMailOutline} from "react-icons/md";
const Footer = () => (
  <div className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
        <div className="flex flex-col gap-1 items-center text-center md:text-left md:items-start">
          <h1 className="text-xl font-bold mb-4 text-center">Organization</h1>
          
              <Link href="/about">About</Link>
           
              <Link href="/#privacy">Privacy</Link>
           
              <Link href="/#tnc">Terms & Conditions</Link>
          
      
        </div>
        <div className="flex flex-col gap-1 items-center text-center md:text-left md:items-start">
          <h1 className="text-xl font-bold mb-4 text-center">Community</h1>
              <Link
                href="https://devstations.hashnode.dev/"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </Link>
              <Link href="/event" >
                Events
              </Link>
        </div>
        <div className="flex flex-col gap-1 items-center text-center md:text-left md:items-start">
          <h1 className="text-xl font-bold mb-4 text-center ">Socials</h1>
         
              <Link
                href="https://www.instagram.com/dev__station/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <FaInstagram className="mr-2"/> Instagram
              </Link>
           
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <BsLinkedin className="mr-2"/>
                Linkedin
              </Link>
            
              <Link
                href="https://twitter.com/Devs_Station"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <BsTwitter className="mr-2"/>
                Twitter
              </Link>
          
        </div>
        <div className="items-center text-center md:text-left md:items-start flex flex-col gap-1 ">
          <h1 className="text-xl font-bold mb-4">Contact</h1>
          
              <Link
                href="mailto:devstationspace@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <MdOutlineMailOutline className="mr-2" />
                Email
              </Link>
          
              <Link
                href="https://discord.io/devstation"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <FaDiscord className="mr-2" />
                Discord
              </Link>
           
        </div>
      </div>
      
      <p className="text-center mt-8">
        &copy; {new Date().getFullYear()} <span className="text-yellow-400 ">DEV </span>STATION All Rights
        Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
