import Footer from "../components/Footer";
import Header from "../components/Header";
import Particle from "../components/Particle";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/About.module.css";
import ImportantBar from "../components/importantBar";


const About = () => {
  return (
    <div style={{color:'whitesmoke'}}>
      <Head>
        <title>DevStation | About us</title>
        <meta
          name="description"
          content="DevStation is a community of developers who are passionate about learning and sharing their knowledge with others."
          title="DevStation | About us"
        />
      </Head>
      <Header />
      <ImportantBar/>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>DevStation</h1>
          <p className={styles.description}>
            An Open Source Community that helps tech enthusiasts to grow their
            skills in the tech industry.
          </p>
        </div>
        <div className={styles.main}>
          <h2 className={styles.subtitle}>Our Vision</h2>
          <p className={styles.text}>
            To be a leading resource for developers to learn, connect, and
            collaborate. We aim to support the growth and development of tech
            professionals by providing access to high-quality resources and
            opportunities.
          </p>
          <h2 className={styles.subtitle}>Our Mission</h2>
          <p className={styles.text}>
            To create a welcoming and inclusive environment where tech
            enthusiasts of all levels can come together to learn, share
            knowledge, and build meaningful connections. We strive to provide a
            platform for developers to discuss their ideas and projects, and to
            offer a range of resources and opportunities to help them grow and
            succeed in their careers.
          </p>
          <h2 className={styles.subtitle}>Our Goal</h2>
          <p className={styles.text}>
            To empower tech professionals to reach their full potential and make
            a positive impact in the tech industry. We believe that by providing
            access to valuable resources and opportunities, we can help tech
            enthusiasts to grow and succeed in their careers.
          </p>
        </div>
        <div className={styles.aside}>
          <h2 className={styles.asideTitle}>What We Offer</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Jobs and internships</li>
            <li className={styles.listItem}>Hackathons</li>
            <li className={styles.listItem}>Meet ups</li>
            <li className={styles.listItem}>Mentorship</li>
            <li className={styles.listItem}>Workshops from industry experts</li>
            <li className={styles.listItem}>Industrial visits</li>
            <li className={styles.listItem}>Open source projects</li>
          </ul>
        </div>
        <div className={styles.join}>
          <h2 className={styles.joinTitle}>Join Our Community</h2>
          <p className={styles.joinText}>
            DevStation is a community of tech enthusiasts who are passionate
            about learning, sharing knowledge, and building meaningful
            connections. If you are interested in joining our community, click
            the button below to join our Discord server.
          </p>
          <Link
            href="https://discord.io/devstation"
            target="_blank"
            // rel="noreferrer noopner"
          >
            <h1 className={styles.joinButton}>Join Now</h1>
          </Link>
        </div>
      </div>
      <Footer />
      <Particle />
    </div>
  );
};

export default About;
