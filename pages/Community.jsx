import React from 'react'
import styles from "../styles/Community.module.css";
import { FaWhatsapp, FaDiscord } from 'react-icons/fa';
import Image from 'next/image'
import Img1 from '../assets/images/Frame 3.png'
const Community = () => {
  return (
    <div className={styles.back2}>
    <div className={styles.background}>
      <div className={styles.backImg}>
        <Image src={Img1} alt="images"/>
      </div>
      <div className={styles.para2}>
      <p className={styles.para1}>Join Our Community Related Content</p>
      <div className={styles.icons}>
      <div className={styles.icon1}>
        <FaWhatsapp/>
        Join Whatsapp
      </div>
      <div className={styles.icon2}>
          <FaDiscord/>
        Join Discord
      </div>
      </div>
      </div>
      <div className={styles.what__we__offer}>
        <h1>What Do<br/>We<br/> Offer ?</h1>
      </div>

      <div className={styles.teams}>
        Our Team
      </div>
    </div>
    </div>
  )
}

export default Community