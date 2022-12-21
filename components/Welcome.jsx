import Image from 'next/image'
import React from 'react'
import styles from '../styles/Welcome.module.css'
// import Particle from './Particle'
import support from '../assets/images/background.png'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import Events from './Events'
const Welcome = () => {
  return (
    <>
      {/* <div className={styles.bgImage}></div> */}
      <div className='flex md:flex-row flex-col   md:px-20  px-5 md:py-20 py-3'>
        <div className='md:w-3/2 w-full '>
          <h1 className='md:text-4xl  text-xl  text-left items-center'> <span className='text-yellow-500'>DEV</span><span className='text-yellow-500'>STATION  COMMUNITY</span></h1>

          <p className='md:text-xl  text-md text-justify py-10 items-center align-center justify-center text-yellow-200 max-w-2xl'>
            DevStation is an Open Source Community that helps tech enthusiasts to grow their self in tech. It provides free resources for the developers as well as the beginners. We provide a platform for the developers to discuss their ideas and projects. We are also  providing Jobs & internships, hackathons,meet ups, Mentorship, Workshops from Industry Experts, Industrial visits,Open Source Projects & Much More!!!

          </p>

          {/* <div className='flex justify-center'> */}
            <a href='https://discord.io/devstation' target='_blank' rel='noreferrer noopener'>
              {/* <button className='px-3 py-2 bg-[#ffec04] hover:bg-pink-500 hover:cursor-pointer justify-center rounded-full md:text-2xl text-md'> */}
                <h1 className='flex flex-row items-center  justify-between text-[#212121] font-serif'>
                  Join Us
                  <span className=' item-center  justify-between text-center p-1'>
                    <BsArrowRight />
                  </span> </h1>
              {/* </button> */}
            </a>
          {/* </div> */}
          {/* </Link> */}

        </div>
        <div className='  '>
          <Image
            src={support}
            alt="support"
            width={600}
            height={600}
            className='bg-transparent ' />
        </div>
      </div>

      <div  >
        <div className='md:px-20  px-5 bg-[#0E0C0C] rounded-2xl'>
          <p className={styles.gradPara}>COMMUNITIES /PARTNERS THAT WE ARE WORKING WITH !!</p>
        </div>
      </div>
     

    </>
  )
}

export default Welcome