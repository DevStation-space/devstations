import React from "react";
import { FaWhatsapp, FaDiscord } from "react-icons/fa";
import Link from "next/link";
import Whatweoffer from "./Whatweoffer";
import { BsTwitter } from "react-icons/bs";
import Team from "../../components/Team";

const index = () => {
  return (
    <div className=" min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-8 py-8 whiteGlassmorphism">
        <dl className="text-white text-center">
          <dt className="text-4xl font-bold py-6">Join Our Community</dt>
          <dd className="text-xl font-thin pb-6">
            Join our community to get the latest updates and news about our
            projects and events.
          </dd>
          <dd className="flex flex-row justify-center gap-6">
            <Link
              href="https://twitter.com/Devs_Station"
              traget="_blank"
              alt="twitter"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center">
                <div className="bg-blue-400 text-white rounded-xl p-4">
                  <BsTwitter className="text-5xl" />
                </div>
                <h1 className="pt-2">Join Twitter</h1>
              </div>
            </Link>

            <Link
              href="https://chat.whatsapp.com/H2F5iAyMcvp2kqScdiNn0i"
              traget="_blank"
              alt="whatsapp"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center">
                <div className="bg-green-400 text-white rounded-xl p-4">
                  <FaWhatsapp className="text-5xl" />
                </div>
                <h1 className="pt-2">Join Whatsapp</h1>
              </div>
            </Link>

            <Link
              href="https://discord.io/devstation"
              traget="_blank"
              alt="discord"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center">
                <div className="bg-purple-600 text-white rounded-xl p-4">
                  <FaDiscord className="text-5xl" />
                </div>
                <h1 className="pt-2">Join Discord</h1>
              </div>
            </Link>
          </dd>
        </dl>
        <br />
        <br />
        <Whatweoffer />
        <br />
        <br />
        <Team />
      </div>
    </div>
  );
};

export default index;
