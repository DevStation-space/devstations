import React from "react";
import styles from "../styles/Whatweoffer.module.css";

const Whatweoffer = () => {
  return (
    <div className={styles.what__we__offer}>
      <div className={styles.offer}>
        {/* <span>What Do</span>
          <span> We</span> 
          <span> Offer ?</span>
        </div>
        <div className={styles.container}>
        <div className={styles.flex}>1</div>
        <div className={styles.flex}>2</div>
        <div className={styles.flex}>3</div>
        </div> */}
        <div className={styles.para2}>
          <h2>What We Offer</h2>
          <p>
            Our community offers a variety of resources and support for
            developers, including:
          </p>
          <ul>
            <li>Technical assistance and guidance</li>
            <li>Networking and collaboration opportunities</li>
            <li>Access to exclusive events and workshops</li>
            <li>Mentorship and career development support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Whatweoffer;
