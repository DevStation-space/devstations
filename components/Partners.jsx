import React from "react";
import styles from "../styles/Partners.module.css";
import Image from "next/image";
const Partners = () => {
  return (
    <div>
      <div className={styles.partners}>
        <h3 className="mb-8">OUR COMMUNITY MEMBERS COME FROM</h3>
        <div className="flex flex-wrap items-center gap-12 gap-y-7">
            <Image src="/img/community/bubble.png" alt="logo" width={150} height={150} />
            <Image src="/img/community/sos.png" alt="logo" width={150} height={150} />
        </div>
      </div>
    </div>
  );
};
export default Partners;
