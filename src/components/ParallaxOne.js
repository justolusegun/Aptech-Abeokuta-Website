import React from "react";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import ImgOne from "../images/imgone.JPG";
import { Mobile } from "../Responsive";
import "../index.css";

const H1 = styled.h1`
  text-align: center;
  margin: auto auto 30px auto;
  position: relative;
  line-height: 40px;
  padding-bottom: 20px;
  ${Mobile({
    padding: "10px",
    margin: "10px",
    fontSize: "30px",
    lineHeight: "30px",
  })}

  &::after {
    content: "";
    background-color: #ff523b;
    width: 150px;
    height: 5px;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    ${Mobile({ display: "none" })}
  }
`;
const ParallaxOne = () => {
  return (
    <Parallax
      bgImage={ImgOne}
      className="image"
      bgImageAlt="Aptech Students"
      strength={800}
    >
      <div className="content">
        <span className="img-txt">
          <H1>
            Why Should I <span style={{ color: "goldenrod" }}>Enroll?</span>
          </H1>
          A career in programming is actually possible whether you are old or
          young, male or female and one of the very best reasons to become a
          computer programmer is the bounty of jobs out there. And because we
          are an increasingly technologically reliant society it is also
          apparent that there will be jobs in the programming sector for a long
          time to come. As other industries decline and cease to be, programming
          is growing and expanding into almost all areas of life.
        </span>
      </div>
    </Parallax>
  );
};

export default ParallaxOne;
