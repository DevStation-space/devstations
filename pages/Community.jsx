import React from "react";
import styles from "../styles/Community.module.css";
import { FaWhatsapp, FaDiscord } from "react-icons/fa";


import Link from "next/link";
import Whatweoffer from "../components/Whatweoffer";
import Teams from "../components/Team";
import Header from "../components/Header";

import { BsTwitter } from "react-icons/bs";
const Community = () => {
  return (
    <div style={{ color: "whitesmoke" }}>
   
    
      <div >
        <div >
          
        </div>
       
        <dl>
          <dt className="text-4xl text-center font-bold py-10">
            Join Our Community
          </dt>
          <dd className="text-xl text-center font-thin py-10">
            Join our community to get the latest updates and news about our
            projects and events.
          </dd>
          <dd className="flex flex-row justify-center">
            <div className="flex flex-row justify-center">
              <Link
                href="https://twitter.com/Devs_Station"
                traget="_blank"
                alt="twitter"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col">
                  <h1 className="align-center justify-center text-center px-10 py-4 ">
                    <BsTwitter className="bg-blue-400 text-5xl p-2 rounded-xl" />
                  </h1>
                  <h1>Join Twitter</h1>
                </div>
              </Link>
            </div>
            <div className="flex flex-row justify-center">
              <Link
                href="https://chat.whatsapp.com/H2F5iAyMcvp2kqScdiNn0i"
                traget="_blank"
                alt="whatsapp"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col">
                  <h1 className="align-center justify-center text-center px-10 py-4 ">
                    <FaWhatsapp className="bg-green-400 text-5xl p-2 rounded-xl" />
                  </h1>
                  <h1>Join Whatsapp</h1>
                </div>
              </Link>
            </div>
            <div className="flex flex-row justify-center">
            <Link
                href="https://discord.io/devstation"
                traget="_blank"
                alt="dicord"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col">
                  <h1 className="align-center justify-center text-center px-10 py-4 ">
                    <FaDiscord className="bg-purple-600 text-5xl p-2 rounded-xl" />
                  </h1>
                  <h1>Join Discord</h1>
                </div>
              </Link>
            </div>
           
             
           
          </dd>
        </dl>
        

        <Whatweoffer />
        <Teams />
      
      </div>
    </div>
  );
};

export default Community;
