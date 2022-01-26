import React from "react";
import { Carousel } from "react-bootstrap";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import video3 from "../videos/video3.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import "../index.css";
import styled from "styled-components";
import { Mobile } from "../Responsive";
import { SmallMobile } from "../Responsive2";

const H1 = styled.h1`
  font-weight: 700;
  ${Mobile({ fontWeight: "400" })}
  ${SmallMobile({ fontSize: " 20px" })}
`;

const CarouselVideo = () => {
  const videoProperties = [
    {
      id: 1,
      title: "video1",
      src: video1,
      desc: (
        <span>
          Welcome to <span style={{ color: "goldenrod" }}>Aptech Abeokuta</span>
        </span>
      ),
    },
    {
      id: 2,
      title: "video2",
      src: video2,
      desc: (
        <span>
          Build Your Career With{" "}
          <span style={{ color: "goldenrod" }}>ICT Degree</span>
        </span>
      ),
    },
    {
      id: 3,
      title: "video3",
      src: video3,
      desc: (
        <span>
          Why Need An <span style={{ color: "goldenrod" }}>ICT Degree?</span>
        </span>
      ),
    },
  ];

  return (
    <Carousel>
      {videoProperties.map((videoObj) => {
        return (
          <Carousel.Item key={videoObj.id}>
            <ReactPlayer
              url={videoObj.src}
              pip={true}
              playing={true}
              controls={false}
              width="100%"
              height="100%"
            />
            <Carousel.Caption className="headOne">
              <H1>{videoObj.desc}</H1>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselVideo;
