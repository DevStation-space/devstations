import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
const OngoingEvent = () => {
    const eventData = [
        {
          id: 1,
          title: "INNOVERSE",
          text: "At Innoverse, we bring open-source enthusiasts and entrepreneurs together and share new ideas and learn from industry experts. “INNOVATION is taking two things that exist and putting them together in a new way. What good is an idea if it remains an idea? TRY. EXPERIMENT. FAIL.TRY AGAIN. CHANGE THE WORLD.",
          imageUrl: "/assets/img/event/innoverse.jpg",
          backgroundColor: "#712a8285",
          links: "https://innoverse.devstations.tech/",
        },
        {
          id: 2,
          title: "IDEATHON",
          text: "An open-source Ideathon, to bring out the best of both enthusiasts and entrepreneurs in this field. This is a fantastic learning opportunity for anyone interested in open-source and project management",
          imageUrl: "/assets/img/event/ideathon.png",
          backgroundColor: "#9c9b39b5",
          links: "https://ideathon.devstations.tech/",
        },
      ];
    
  return (
    <div className=" py-10    ">
    <div  className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-8">
    <Carousel
      showStatus={false}
      showIndicators={false}
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      emulateTouch={true}
      stopOnHover={true}
      className="blueGlassmorphism items-center justify-center flex flex-col gap-10 py-5   "
    >
      
        {eventData.map((item) => (
        <div key={item.id} className=" flex flex-col md:flex-row items-center justify-center gap-10 ">
          <div className={`${item.backgroundColor} z-[100] md:w-2/3  h-full`}>
            <div className=" p-6 rounded-lg md:shadow-lg">
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p className="text-justify my-4 px-6 ">{item.text}</p>
              <Link href={item.links} target="_blank" rel="noopener noreferrer" alt="Event Link" className="  px-4 py-3 whiteGlassmorphism">
                View Event
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 px-10 py-20 h-[40vh] ">
            <img src={item.imageUrl} alt="slides" className="w-full rounded-lg shadow-lg border-2 border-black " />
          </div>
          
        </div>
      ))}
      
      
    </Carousel>
    </div>
  </div>
  )
}

export default OngoingEvent