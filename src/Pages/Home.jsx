import React from "react";
import CarouselVideo from "../components/Carousel";
import ParallaxOne from "../components/ParallaxOne";
import Purpose from "../components/Purpose";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <CarouselVideo />
      <Purpose />
      <ParallaxOne />
      <Testimonial />
    </>
  );
};

export default Home;
