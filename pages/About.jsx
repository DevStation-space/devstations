import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Particle from '../components/Particle'
const About = () => {
  return (
    <div>
      <Head>
        <title>DevStation | About us</title>
       
        <meta 
          name="description"
          content="DevStation is a community of developers who are passionate about learning and sharing their knowledge with others."
          title='DevStation | About us'
        />
      </Head>
      <Header />
      <Particle />
      <h1>about</h1>
      <Footer />
    </div>
  )
}

export default About