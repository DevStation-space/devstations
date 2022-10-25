import Image from 'next/image'
import React from 'react'
import styles from '../styles/Welcome.module.css'
// import Particle from './Particle'
import support from '../assets/images/background.png'
import {BsArrowRight} from 'react-icons/bs'
const Welcome = () => {
  return (
    <div>
      {/* <div className={styles.bgImage}></div> */}
      <div className='flex md:flex-row flex-col   md:px-20  px-5 md:py-10 py-3'>
        <div className=' '>
          <h1 className='md:text-4xl  text-xl md:text-start text-center items-center'> <span className='text-yellow-500'>DEV</span>STATION  COMMUNITY</h1>

          <p className='md:text-2xl text-md text-justify py-10 items-center align-center justify-center'>
            Dev Station is an open source community that aims to provide a platform for developers to learn, share and grow together.

          </p>
          <button className='px-10 py-5 bg-slate-500 rounded-2xl md:text-2xl text-xs'>
           <h1><span> <BsArrowRight /> Join Us</span></h1> Join Us
          </button>
        </div>
        <div className='  '>
          <Image
            src={support}
            alt="support"
            width={600}
            height={600}
            className='bg-transparent '       />
        </div>
      </div>

      <div  >
        <div className='md:px-20  px-5 bg-[#0E0C0C] rounded-2xl'>
          <p className={styles.gradPara}>COMMUNITIES /PARTNERS THAT WE ARE WORKING WITH !!</p>
        </div>
      </div>


    </div>
  )
}

export default Welcome