import React from "react";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import Imgthree from "../images/imgthree.JPG";
import { Mobile } from "../Responsive";
import { SmallMobile } from "../Responsive2";

const H1 = styled.h1`
  width: 100%;
  text-align: center;
  margin: 30px auto 30px auto;
  position: relative;
  line-height: 40px;
  padding-bottom: 20px;
  ${Mobile({
    padding: "15px",
    margin: "10px",
    fontSize: "30px",
    lineHeight: "30px",
  })}
  ${SmallMobile({
    fontSize: "20px",
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
    ${SmallMobile({ display: "none" })}
  }
`;

const AdseParallax = () => {
  return (
    <Parallax
      bgImage={Imgthree}
      className="image image2"
      bgImageAlt="Aptech Students"
      strength={800}
    >
      <div className="content image2">
        <span className="img-txt">
          <H1>
            <span style={{ color: "goldenrod" }}>Advanced Diploma In</span>{" "}
            Software Engineering
          </H1>
        </span>
      </div>
    </Parallax>
  );
};

export default AdseParallax;
