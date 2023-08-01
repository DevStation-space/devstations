import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCode,
  faUsers,
  faHandHoldingHeart,
  faChalkboardTeacher,
  faIndustry,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

const Whatweoffer = () => {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">What Do We Offer?</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center p-4 rounded-lg border items-center  flex justify-center   gap-2">
          <FontAwesomeIcon icon={faBriefcase} className="text-4xl mb-4" />
          Jobs and Internships
        </div>
        <div className="text-center p-4 rounded-lg border items-center  flex justify-center   gap-2">
          <FontAwesomeIcon icon={faCode} className="text-4xl mb-4" />
          Hackathons
        </div>
        <div className="text-center p-4 rounded-lg border items-center  flex justify-center   gap-2">
          <FontAwesomeIcon icon={faUsers} className="text-4xl mb-4" />
          Meet-ups
        </div>
        <div className="text-center p-4 rounded-lg border items-center  flex justify-center   gap-2">
          <FontAwesomeIcon
            icon={faHandHoldingHeart}
            className="text-4xl mb-4"
          />
          Mentorship
        </div>
        <div className="text-center p-4 rounded-lg border items-center  flex justify-center   gap-2">
          <FontAwesomeIcon
            icon={faChalkboardTeacher}
            className="text-4xl mb-4"
          />
          Workshops from Industry Experts
        </div>
        <div className="text-center p-4 rounded-lg border items-center  flex justify-center   gap-2">
          <FontAwesomeIcon icon={faIndustry} className="text-4xl mb-4" />
          Industrial Visits
        </div>
        <div className="text-center p-4 rounded-lg border items-center  flex justify-center   gap-2">
          <FontAwesomeIcon icon={faCodeBranch} className="text-4xl mb-4" />
          Open Source Projects
        </div>
      </div>
    </div>
  );
};

export default Whatweoffer;
