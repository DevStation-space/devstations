import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Team = () => {
  const memberData = [
    {
      id: "1",
      name: "Kanishak Chaurasia",
      role: "Founder",
      bio: "I'm founder of DEV STATION and final year student, I'm opportunity seeker , Fun fact about me is I make connections with people easily and I'm a good listener.  ",
      image: " /assets/img/team/kanishak.png",
      email: "kanishakchaurasia2@gmail.com",
      social: {
        twitter: "https://twitter.com/kanishkchauras4",
        instagram: "https://www.instagram.com/kanishak_chaurasia",
        linkedin: "https://www.linkedin.com/Kanishak-Chaurasia-1101",
        github: "https://www.github.com/kanishak11-cyber",
      },
    },
    {
      id: "2",
      name: "Vaishnavi Sharma",
      role: "Community Manager",
      bio: "I'm a community manager of DEV STATION and  sophomore student, I'm opportunity seeker , Fun fact about me is I make connections with people easily and I'm a good listener. ",
      image: " /assets/img/team/vaishnavi.png",
      email: "vaish1306navi@gmail.com",
      social: {
        twitter: "https://twitter.com/yoongles_paw",
        instagram: "https://www.instagram.com/deletedomo",
        linkedin: "https://www.linkedin.com/in/vaishnavi-sharma-156412249",
        github: "https://github.com/ssjhyyk",
      },
    },
    {
      id: "3",
      name: "Gyan Ratan",
      role: "Technical Lead",
      bio: "I am a Final yr. student and a technical lead at DEV STATION. I am a web developer and a competitive programmer. I am a quick learner and a good listener. ",
      image: " /assets/img/team/gyan.png",
      email: "gyanratan636@outlook.com",
      social: {
        twitter: "https://twitter.com/GyanRat20102986",
        instagram: "https://www.instagram.com/kanishak_chaurasia",
        linkedin: "https://www.linkedin.com/in/gyanratan636/",
        github: "https://www.github.com/Gyan-Ratan",
      },
    },
    {
      id: "4",
      name: "Himanshu Verma",
      role: "Graphic Lead",
      bio: " I am a Graphic Lead at DEV STATION. I am a quick learner and a good listener. ",
      image: " /assets/img/team/himanshu.png",
      email: "himanshu2020cs135@gmail.com",
      social: {
        twitter: "https://twitter.com/Himansh44602292",
        instagram: "https://www.instagram.com/hi.manshu.10",
        linkedin: "https://www.linkedin.com/in/himanshu-verma-a1031b214",
        github: "https://github.com/Himanshu-Verma-IO",
      },
    },

    {
      id: "5",
      name: "Shalini Yadav",
      role: "Web Developer",
      bio: "I am a Web Developer at DEV STATION. I am a quick learner and a good listener. ",
      image: " /assets/img/team/shalini.png",
      email: "shalini2020csai080@abesit.edu.in",
      social: {
        twitter: "https://twitter.com/Shalini39615839",
        instagram: "https://www.instagram.com/shellyy_yadavv",
        linkedin: "",
        github: "",
      },
    },
  ];
  return (
    <div className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>

      <div className=" gap-8">
        <Carousel
          showIndicators={true}
          autoPlay
          interval={5000}
          infiniteLoop
          showArrows
          showStatus={false}
          showThumbs={false}
        >
          {memberData.map((member) => (
            <div
              key={member.id}
              className="whiteGlassmorphism rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <div className="blur-3xl h-20 w-20 bg-white z-[-1] top-10 "></div>
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-contain"
              />
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <p className="text-lg mb-4">{member.role}</p>
              <p className="text-white text-justify">{member.bio}</p>
              
              <div className="flex mt-6">
                <SocialLink
                  href={member.social.github}
                  icon={<FaGithub size={20} />}
                />
                <SocialLink
                  href={member.social.twitter}
                  icon={<FaTwitter size={20} />}
                />
                <SocialLink
                  href={member.social.linkedin}
                  icon={<FaLinkedinIn size={20} />}
                />
                <SocialLink
                  href={member.social.instagram}
                  icon={<FaInstagram size={20} />}
                />
                <SocialLink
                  href={`mailto:${member.email}`}
                  icon={<HiOutlineMail size={20} />}
                />
              </div><div className="bg-violet-800 h-20 w-20 z-[-10] blur-3xl flex justify-start items-start"></div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon }) => {
  return (
    <Link href={href} alt={href} rel="noopener noreferrer" target="_blank">
      <div className="mx-2 text-gray-600 hover:text-blue-500 transition-colors duration-300 ease-in-out">
        {icon}
      </div>
    </Link>
  );
};

export default Team;
