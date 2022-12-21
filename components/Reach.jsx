import React from 'react'
import styles from '../styles/Reach.module.css'
import Image from 'next/image'
import community from '../assets/images/reach1.png'
import college from '../assets/images/reach5.png'

const Reach = () => {
  return (
    <>
    {/* <div className={styles.reach}>
      <h1>OUR REACH</h1>
    </div> */}
    <div className={styles.Mentorstats}>
      <div className={styles.Stats__head}>Our Reach</div>
      <div className={styles.Stats__holder}>
        <div className={`${styles.m__stat__block} ${styles.Mstat}`}>
        <Image src={community} alt=""/>
        <div>
          <div className={styles.MSdata}>2K+</div>
          <div className={styles.MSmetadata}>Community members</div>
        </div>
        </div>
        <div className={`${styles.m__stat__block} ${styles.Mstat}`}>
        <Image src={college} alt=""/>
          <div>
          <div className={styles.MSdata}>500+</div>
          <div className={styles.MSmetadata}>Opportunities created</div>
          </div>
        </div>
        <div className={`${styles.m__stat__block} ${styles.Mstat}`}>
        <Image src={college} alt=""/>
          <div>
          <div className={styles.MSdata}>2k+</div>
          <div className={styles.MSmetadata}>College Members</div>
          </div>
        </div>
        {/* <div className={`${styles.m__stat__block} ${styles.Mstat}`}> */}
        {/* <Image src={Reach4} alt=""/>
        <div>
          <div className={styles.MSdata}>10+</div>
          <div className={styles.MSmetadata}>Companies and Partners</div>
        </div>
        </div>  */}
      </div>
    </div>
    </>
  )
}

export default Reach