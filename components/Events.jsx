import styles from '../styles/Events.module.css'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carousel from '../pages/upcoming.json';
import React from 'react'
import Link from "next/link";

const Events = () => {

 const imgDetails = carousel.carouselImage.imgDetails;
  return (
    <div className={styles.container} style={{paddingTop:'72px',height: '100vh'}}>
      <Carousel interval={1500} showStatus={false} showIndicators={false} showArrows={true} infiniteLoop={true} width={"70%"} className={styles.mySwiper} showThumbs={false}>
        {imgDetails.map((item) => (
          <div key={item.id} className={styles.swipItem}>
            <div className={styles.row}>
              {/* <div className="col-md-6" style={{backgroundColor:"ff000085" */}
              <div className="col-md-6" style={{backgroundColor:item.backgroundColor, marginRight:"-100px", width:"50%", height:"600px !important", zIndex:"99"}}>
                <div className={styles.box}>
                  <div className={styles.boxRow}>
                    <div className="col-md-6">
                      <h1 style={{float:"left"}}>{item.title}</h1>
                    </div>
                    <div className="col-md-6">
                      <p style={{float:"left"}}>{item.text}</p>
                    </div>
                  </div>
                  <Link
                    href={`${item.links}`}
                    traget="_blank"
                    alt="Event Link"
                  >
                    <button> View Event </button>
                  </Link>
                </div>
              </div>
              <div className="col-md-6" style={{width:"55%", }}>
                <div className={styles.imgBox}>
                  <Image src={`${item.imageUrl}`} alt="slides" height={300} width={300} />
                </div>
              </div>
            </div>   
          </div>
          ))}
        
      </Carousel>
    </div>
  );
}


export default Events
