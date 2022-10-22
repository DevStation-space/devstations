import Image from 'next/image'
import React from 'react'
import styles from '../styles/Welcome.module.css'
// import Particle from './Particle'
import support from '../assets/images/background.png'
const Welcome = () => {
  return (
    <div>
      {/* <Particle  /> */}

    
    <div className={styles.bgImage}></div>
    <div className='flex flex-row flex-1 w-[100vw] px-20 py-10'>
      <div className='w-[50vw] '>
        <p className='text-2xl text-center items-center align-center justify-center'>
          Dev Station is an open source community that aims to provide a platform for developers to learn, share and grow together.
        </p>
      </div>
      <div className='w-[50vw] '>
        <Image
          src={support}
          alt="support"
          width={400}
          height={400}
          className='bg-transparent h-[200px] w-[200px]'
        />
      </div>
    </div>

    <div  >
    <div className='px-20 bg-[#0E0C0C] rounded-2xl'>
      <p className={styles.gradPara}>COMMUNITIES /PARTNERS THAT WE ARE WORKING WITH !!</p>
    </div>
    </div>


    </div>
  )
}

export default Welcome