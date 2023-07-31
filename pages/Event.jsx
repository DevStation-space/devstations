import styles from '../styles/Events.module.css'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carousel from '../pages/upcoming.json';
import pastEvent from '../pages/events.json';
import React from 'react'
import Link from "next/link";
import { Button, Card, CardBody,CardImg, CardTitle,CardText} from "reactstrap";
import Footer from '../components/Footer'
import Header from '../components/Header'
import Particle from '../components/Particle'
import ImportantBar from "../components/importantBar";

const Event = () => {

 const imgDetails = carousel.carouselImage.imgDetails;
 const eventDetails = pastEvent.eventImage.eventDetails;
 const cardStyle = { width: "18rem",paddingTop:"50px" };


  return (
    <div style={{color:'whitesmoke'}}>
    <Header/>
    {/* <ImportantBar/> */}
    <div className={styles.container} style={{paddingTop:'30px'}}>
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
                    target="_blank"
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
      <div className={styles.cards} >
      {eventDetails.map((item) => (
        <Card style={cardStyle} key={item.id} >
              <Button href={item.links}>
              <CardImg alt="Event Image" src={item.imageUrl} top></CardImg>
              <div className={styles.upcoming}>{item.status}</div>
              <CardBody className={styles.cardbody}>
                <CardTitle className={styles.cardtitle}>{item.title}</CardTitle>
                <CardText className={styles.cardtext}>{item.text}</CardText>
              </CardBody>
              </Button>
            </Card>
          ))}
      </div> 


    </div>
    <Footer />
    <Particle/>
    </div>
  );
}


export default Event
