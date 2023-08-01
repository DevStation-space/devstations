import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const router = useRouter();
  const { pathname } = router;

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Community",
      path: "/community",
    },
    {
      name: "Team",
      path: "/team",
    },
    {
      name: "Events",
      path: "/event",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/#services",
    },
  ];

  return (
    <div className="fixed w-full  shadow-3xl text-white  py-3 bg-black z-[100] px-4  md:px-20  shadow-sm shadow-current  ">
      <div className="flex items-center justify-between h-16 ">
        <Link
          href="/"
          className="flex flex-row justify-center items-center text-xl "
        >
          <img
            src="/assets/img/logo.png"
            alt="logo"
            className="h-16 w-16 lg:h-20 lg:w-20 cursor-pointer"
          />
          <div className="text-[#ffec04]">
            DEV <span className="text-white">STATION</span>
          </div>
        </Link>
        <div className="lg:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setToggle(!toggle)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#ffec04]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {toggle ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex gap-3 md:text-xl text-lg">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                pathname === link.path
                  ? "text-[#ffec04]   whiteGlassmorphism px-4 py-3"
                  : "text-white  blueGlassmorphism px-4 py-3"
              } hover:text-[#ffec04] hover: `}
            >
              <div>{link.name}</div>
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`${
          toggle ? "hidden" : "flex bg-black bg-opacity-90 mt-4"
        } lg:hidden flex-col gap-3 absolute  w-full py-5 text-center shadow-xl lg:bg-transparent lg:shadow-none lg:w-auto lg:flex-row lg:gap-3  `}
      >
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              pathname === link.path ? "text-[#ffec04]  " : "text-white"
            } hover:text-[#ffec04]  `}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
