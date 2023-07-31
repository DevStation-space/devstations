import Image from "next/image";
import Support from "../assets/images/background.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Welcome = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col" style={{ padding: "20px" }}>
        <div className="md:w-3/5 w-full md:pr-20">
          <h1 className="md:text-4xl text-2xl text-left items-center">
            {" "}
            <span className="text-yellow-500">DEV</span>
            <span className="">STATION COMMUNITY</span>
          </h1>

          <p className="md:text-xl text-sm md:py-10 py-5 items-center text-justify max-w-2xl">
            DevStation is an Open Source Community that helps tech enthusiasts
            to grow their skills in tech. It provides free resources for the
            developers as well as beginners. We provide a platform for
            developers to discuss their ideas and projects. We also provide Jobs
            & internships, hackathons, meet-ups, Mentorship, Workshops from
            Industry Experts, Industrial visits, Open Source Projects & Much
            More!!!
          </p>

          <button className="px-3 py-2 bg-[#ffec04] hover:bg-pink-500 hover:cursor-pointer justify-center rounded-full md:text-xl text-sm">
            <Link
              href="https://discord.io/devstation"
              target="_blank"
              rel="noreferrer noopener"
            >
              <h1 className="flex flex-row items-center justify-between text-[#212121] font-serif">
                Join Us
                <span className="item-center justify-between text-center p-1">
                  <BsArrowRight />
                </span>
              </h1>
            </Link>
          </button>
        </div>
        <div className="md:w-2/5 w-full mt-10 md:mt-0">
          <Image
            src={Support}
            alt="support"
            width={600}
            height={600}
            className="bg-transparent"
          />
        </div>
      </div>
    </>
  );
};

export default Welcome;
