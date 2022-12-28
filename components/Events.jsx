import React from 'react'
import styles from '../styles/Events.module.css'
import Reach from './Reach'
import Image from 'next/image'
import Devathon from '../assets/images/devathon.png'

const Events = () => {
  return (
  <>
    <div className={styles.heading}>
      <h1>EVENTS</h1>
    </div>
    <div className={styles.box}>
    <div className={styles.boxes1}>
      <Image src={Devathon}  className='h-900 w-900 rounded-lg' alt='open-source-ideathon'/>
    </div>
    {/* <div className={styles.boxes2}></div>
    <div className={styles.boxes3}></div> */}
    </div>
    <div className={styles.boxes4}>
      <h1>More to Come!!!</h1>
    </div>
    <Reach/>

    </>
  )
}

export default Events