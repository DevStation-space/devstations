import React from "react";
import {
  FaMobileAlt,
  FaSearch,
  FaBullhorn,
  FaShoppingCart,
  FaCalendarAlt,
  FaCode,
  FaCubes,
  FaPen,
  FaPalette,
} from "react-icons/fa";
import ContactForm from "./ContactForm";
const index = () => {
  const services = [
    {
      title: "App Development",
      description:
        "We offer custom app development services tailored to your needs.",
      icon: <FaMobileAlt />,
    },
    {
      title: "SEO",
      description:
        "Boost your website's visibility with our Search Engine Optimization services.",
      icon: <FaSearch />,
    },
    {
      title: "Marketing",
      description:
        "Let us help you create effective marketing strategies for your business.",
      icon: <FaBullhorn />,
    },
    {
      title: "E-COMMERCE",
      description:
        "We offer custom e-commerce solutions to help you grow your business.",
      icon: <FaShoppingCart />,
    },
    {
      title: "Event Hosting",
      description:
        "Host successful events with our professional event hosting services.",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Web Development",
      description:
        "We provide top-notch web development services to bring your ideas to life.",
      icon: <FaCode />,
    },
    
    {
      title: "Content Writing",
      description:
        "Engage your audience with compelling content written by our talented writers.",
      icon: <FaPen />,
    },
    {
      title: "Ui/Ux Design",
      description:
        "We offer UI/UX design services to help you create user-friendly apps and websites.",
      icon: <FaPalette />,
    },
    {
      title: "Blockchain/Web3 Apps",
      description:
        "Explore the world of decentralized applications with our blockchain and Web3 development services.",
      icon: <FaCubes />,
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-8 py-8">
      <div className="flex flex-col justify-center align-middle lg:p-9 p-2">
        <div className="flex flex-wrap justify-between align-middle max-w-7xl mx-auto">
          <div className="flex-[50%] ">
            {/* text */}
            <h1 className="text-4xl font-semibold">
              Innovative Solutions for a{" "}
              <span className="text-yellow-500">Tech-Driven</span> World
              <span className="block text-2xl text-[#ffd700] ">Decentralized Innovation Hub</span>
            </h1>
            <p className="text-xl text-justify">
              In a rapidly evolving digital landscape, we offer innovative
              solutions to address modern challenges. Our web design and
              software development services are tailored to your specific needs,
              providing you with the competitive edge you deserve.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/assets/img/rights.png"
              alt="hero"
              className="hero-image"
            />
          </div>
        </div>
      </div>
      <div className="service-section md:py-10 py-4 bg-transparent">
        <div className=" md:mx-auto mx-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <div><ContactForm/></div>
    </div>
  );
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card rounded-lg p-4 shadow-lg border border-gray-200 hover:border-yellow-500 hover:blueGlassmorphism transition duration-300 whiteGlassmorphism">
      <div className="service-icon text-yellow-500 md:text-3xl items-center justify-center text-xl my-2 flex flex-row gap-3">
        {icon}
        <span className="md:text-xl text-md font-bold my-2">{title} </span>
      </div>

      <p className="text-white text-justify">{description}</p>
    </div>
  );
};

export default index;
