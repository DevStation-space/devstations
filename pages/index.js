import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import CommunityPartners from "../components/CommunityPartners";
import OngoingEvent from "../components/OngoingEvent";
import Stats from "../components/Stats";
import Team from "../components/Team";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-center gap-5 h-[80vh] max-w-screen-lg mx-auto ">
        <div className="flex flex-col justify-center text-center md:text-left md:w-1/2">
          <h1 className="text-3xl mb-10">
            <span className="text-yellow-500">DEV</span>
            <span className="">STATION COMMUNITY</span>
          </h1>

          <p className="md:text-xl text-md text-justify">
            DevStation is an Open Source Community that helps tech enthusiasts
            to grow their skills in tech. It provides free resources for the
            developers as well as beginners. We provide a platform for
            developers to discuss their ideas and projects. We also provide Jobs
            & internships, hackathons, meet-ups, Mentorship, Workshops from
            Industry Experts, Industrial visits, Open Source Projects & Much
            More!!!
          </p>

          <Link
            href="https://discord.io/devstation"
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-row items-center justify-center  gap-2 mt-10 text-xl font-bold text-white bg-yellow-500 px-5 py-3 rounded-xl hover:bg-black hover:text-yellow-500"
          >
            Join Us
            <BsArrowRight />
          </Link>
        </div>

        <div className="md:w-1/2">
          <Image
            src="/assets/img/background.png"
            alt="support"
            width={2000}
            height={900}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <br />
      <br />
      <CommunityPartners />
      <br />
      <br />
      <OngoingEvent />
      <br />
      <br />
      <Stats />
      <br />
      <br />
      <Team />
      <br />
      <br />
    </div>
  );
}
