import React from "react";
import { Carousel } from "react-bootstrap";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import video3 from "../videos/video3.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import "../index.css";
import styled from "styled-components";

const Drk = styled.div`
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    opacity: 0.3;
  }
`;
const H1 = styled.h1`
  font-weight: 700;
`;
const CarouselVideo = () => {
  const videoProperties = [
    {
      id: 1,
      title: "video1",
      src: video1,
      desc: "Welcome to Aptech Abeokuta",
    },
    {
      id: 2,
      title: "video2",
      src: video2,
      desc: "Build Your Career With ICT Degree",
    },
    {
      id: 3,
      title: "video3",
      src: video3,
      desc: "Why Need An ICT Degree?",
    },
  ];

  return (
    <Carousel>
      {videoProperties.map((videoObj) => {
        return (
          <Carousel.Item key={videoObj.id}>
            <Drk>
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                playing={true}
                controls={false}
                fluid={false}
                width="100%"
                height="100%"
              />
              <Carousel.Caption>
                <H1 data-aos="fade-up">{videoObj.desc}</H1>
              </Carousel.Caption>
            </Drk>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselVideo;
