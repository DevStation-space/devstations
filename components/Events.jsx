import React from 'react'
import styles from '../styles/Events.module.css'
import Reach from './Reach'
import Image from 'next/image'
import Devathon from '../assets/images/devathon.png'

// const Events = () => {
//   return (
//   <>
//     <div className={styles.heading}>
//       <h1>EVENTS</h1>
//     </div>
//     <div className={styles.box}>
//     <div className={styles.boxes1}>
//       <Image src={Devathon}  className='h-900 w-900 rounded-lg' alt='open-source-ideathon'/>
//     </div>
//     {/* <div className={styles.boxes2}></div>
//     <div className={styles.boxes3}></div> */}
//     </div>
//     <div className={styles.boxes4}>
//       <h1>More to Come!!!</h1>
//     </div>
//     <Reach/>

//     </>
//   )
// }


import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import ideathon from '../assets/images/1.png'
import { carouselImage }   from "../pages/carousel.json";
import innoverse from '../assets/images/Innoverse.jpg'


const Events = () => {
  const imgDetails = carouselImage['imgDetails']
  return (
    <div className={styles.container}>
      <Carousel showArrows={true} showIndicators={true} infiniteLoop={true} width={500} className={styles.mySwiper} showThumbs={false}>
        {imgDetails.map((item) => (
            <div key={item.id} className={styles.swipItem}>
              <div className={styles.imgBox}>
                {/* <Image src={`${basePath}/${item.imageUrl}`} alt="slides" height={300} width={300} /> */}
                <img src={`${item.imageUrl}`} alt="slides" height={300} width={300} />
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  )
}



export default Events