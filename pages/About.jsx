import Head from 'next/head'
import React from 'react'

const About = () => {
  return (
    <div>
      <Head>
        <title>DevStation | About us</title>
        {/* <link rel="icon" href="../assets/images/favicon.ico" /> */}
        <meta 
          name="description"
          content="DevStation is a community of developers who are passionate about learning and sharing their knowledge with others."
          title='DevStation | About us'
        />
      </Head>
      <h1>about</h1>
    </div>
  )
}

export default About