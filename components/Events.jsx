import styles from '../styles/Events.module.css'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carousel from '../pages/carousel.json';
import React from 'react'

const Events = () => {

 const imgDetails = carousel.carouselImage.imgDetails;

  return (
    <div className={styles.container}>
      <Carousel showArrows={true} showIndicators={true} infiniteLoop={true} width={500} className={styles.mySwiper} showThumbs={false}>
        {imgDetails.map((item) => (
            <div key={item.id} className={styles.swipItem}>
              <div className={styles.imgBox}>
                 
                <Image src={`${item.imageUrl}`} alt="slides" height={300} width={300} />
              </div>
            </div>
          ))}
        
      </Carousel>
    </div>
  );
}


export default Events