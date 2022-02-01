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
             <span style={{ color: "goldenrod" }}>Aptech</span> Abeokuta
          </H1>
         Welcome! It is all about Aptech Abeokuta....
         
        </span>
      </div>
    </Parallax>
  );
};

export default ParallaxOne;
