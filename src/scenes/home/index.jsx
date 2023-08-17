import React from 'react'
import Navbar from 'components/HomePage/Navbar'
import HeroSection from 'components/HomePage/HeroSection'
import Services from 'components/HomePage/Services'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection />
        <Services />
    </div>
  )
}

export default Home