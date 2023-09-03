import React from "react";
import Navbar from "components/Navbar";
import HeroSection from "components/HomePage/HeroSection";
import Services from "components/Services/Services";
import Footer from "components/Footer";
import Blogs from "components/HomePage/Blogs";
import AwardSection from "components/HomePage/Awards";
import ContactUs from "components/HomePage/ContactUs";
import Phases from "components/HomePage/Phases";
import UniqueFeatures from "components/HomePage/UniqueFeatures";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AwardSection />
      {/* <Phases /> */}
      <UniqueFeatures />
      <Blogs />
      {/* <Services /> */}
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
