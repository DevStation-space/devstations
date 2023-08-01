import { FaMagic } from "react-icons/fa";
import { IoIosPeople, IoIosSchool } from "react-icons/io";
const Stats = () => {
  return (
    <div><div className="text-2xl uppercase text-center  mb-4">Our Reach</div>
      <div className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-8 blueGlassmorphism">
      
      <div
        id="stats"
        className={`flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-6 rounded-lg shadow-md        
        `}
      >
        <div className="text-center md:text-left flex-row flex whiteGlassmorphism px-5 py-6 items-center">
          <IoIosPeople className="text-4xl mr-5" />
          <h1 className="flex-col flex ">
            2,000+ <span>Community Members</span>
          </h1>
        </div>

        <div className="text-center md:text-left  flex-row flex whiteGlassmorphism px-5 py-6 items-center">
          <FaMagic className="text-4xl mr-5" />
          <h1 className="flex flex-col">
            500+ <span>Opportunities Created</span>
          </h1>
        </div>

        <div className="text-center md:text-left  flex-row flex whiteGlassmorphism px-5 py-6 items-center">
          <IoIosSchool className="text-4xl mr-5" />
          <h1 className="flex flex-col">
            2,000+ <span>College Members</span>
          </h1>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Stats;
