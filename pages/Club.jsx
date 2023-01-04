import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Particle from '../components/Particle'
import ImportantBar from "../components/importantBar";


const club = () => {
  return (
    <>
      <Header />
      <ImportantBar/>
      <div>
        Club
      </div>
      <Footer />
      <Particle />
    </>
  )
}

export default club