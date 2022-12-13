import React from 'react'
import styles from "../styles/Community.module.css";
import { FaWhatsapp, FaDiscord } from 'react-icons/fa';
import Image from 'next/image'
import Img1 from '../assets/images/Frame 3.png'
import Particle from '../components/Particle'

import Whatweoffer from '../components/Whatweoffer';
import Teams from '../components/Teams';
const Community = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
      <div className={styles.backImg}>
        <Image src={Img1} alt="images" />
      </div>
      </div>
      <div className={styles.para2}>
        <div className={styles.para1}>
      <p>Join Our Community Related Content</p>
      </div>
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
    <>
      <Header />
      <div className={styles.background}>

        <Particle />
        <div className={styles.container}>
          <div className={`${styles.backImg} ${styles.shadow}`}>
            
          </div>
          <Image src={Img1} alt="images" height={300} width={300} className='m-10 h-[200p]'  />
        </div>
        <div className={styles.para2}>
          <div className={styles.para1}>
            <p>Join Our Community Related Content</p>
          </div>
          <div className={styles.icons}>
            <Link href='https://chat.whatsapp.com/H2F5iAyMcvp2kqScdiNn0i' traget='_blank' alt='whatsapp' >
            <div className={styles.icon1}>
              <FaWhatsapp />
              Join Whatsapp
            </div>
            </Link>
            <div className={styles.icon2}>
              <FaDiscord />
              Join Discord
            </div>
          </div>
        </div>

        <Whatweoffer />
        <Teams />

      </div>
      
      
      <Whatweoffer/>

      <Teams/>
      
    </div>
     
  )
}

export default Community