import React from "react";
import CarouselVideo from "../components/Carousel";
import News from "../components/News";
import ParallaxOne from "../components/ParallaxOne";
import Purpose from "../components/Purpose";
import Testimonial from "../components/Testimonial";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <CarouselVideo />
      <Purpose />
      <ParallaxOne />
      <Testimonial />
      <News />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
