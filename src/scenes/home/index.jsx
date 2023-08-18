import React from 'react'
import Navbar from 'components/Navbar'
import HeroSection from 'components/HomePage/HeroSection'
import Services from 'components/Services/Services'
import Footer from 'components/Footer'
import Blogs from 'components/HomePage/Blogs'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection />
        <Blogs />
        {/* <Services /> */}
        <Footer />
    </div>
  )
}

export default Home