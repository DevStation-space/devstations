import Events from "../components/Events";
import Particle from "../components/Particle";
import Reach from "../components/Reach";
import Welcome from "../components/Welcome";
import styles from "../styles/Home.module.css";
import Team from "../components/Team";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <div className={`${styles.wrapper}`}>
      {/* <ImportantBar/> */}
      <Welcome />
      <div className="md:px-6 lg:px-20">
        <Partners />
        <Events />
        <Reach />
        <Team />
      </div>
      <Particle />
    </div>
  );
}
