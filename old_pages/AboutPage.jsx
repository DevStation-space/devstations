import Footer from "../components/Footer";
import Particle from "../components/Particle";
import Link from "next/link";
import Whatweoffer from "../components/Whatweoffer";

const AboutPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-yellow-500">Dev</span>Station
          </h1>
          <p className="text-lg">
            An Open Source Community that helps tech enthusiasts to grow their
            skills in the tech industry.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
            <p>
              To be a leading resource for developers to learn, connect, and
              collaborate. We aim to support the growth and development of tech
              professionals by providing access to high-quality resources and
              opportunities.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p>
              To create a welcoming and inclusive environment where tech
              enthusiasts of all levels can come together to learn, share
              knowledge, and build meaningful connections. We strive to provide
              a platform for developers to discuss their ideas and projects, and
              to offer a range of resources and opportunities to help them grow
              and succeed in their careers.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Our Goal</h2>
            <p>
              To empower tech professionals to reach their full potential and
              make a positive impact in the tech industry. We believe that by
              providing access to valuable resources and opportunities, we can
              help tech enthusiasts to grow and succeed in their careers.
            </p>
          </div>
        </div>
        <br />
        <Whatweoffer />
        <br />
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-lg">
            DevStation is a community of tech enthusiasts who are passionate
            about learning, sharing knowledge, and building meaningful
            connections. If you are interested in joining our community,{" "}
            <span className="text-yellow-500">
              click the button below to join our Discord server
            </span>
            .
          </p>
          <Link
            href="https://discord.io/devstation"
            target="_blank"
            className="inline-block px-6 py-3 mt-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
