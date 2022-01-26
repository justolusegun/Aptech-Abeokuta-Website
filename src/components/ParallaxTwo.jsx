import React from "react";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import Imgtwo from "../images/imgtwo.JPG";
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
const P = styled.p`
  line-height: 20px;
  font-size: 18px;
`;
const ParallaxTwo = () => {
  return (
    <Parallax
      bgImage={Imgtwo}
      className="image image2"
      bgImageAlt="Aptech Students"
      strength={800}
    >
      <div className="content image2">
        <span className="img-txt">
          <H1>
            <span style={{ color: "goldenrod" }}>Aptech</span> Abeokuta
          </H1>
          <P className="para">
            Aptech Abeokuta Lays Particular Emphasis On Academic Quality{" "}
          </P>
          Hers's How We Do It :
        </span>
      </div>
    </Parallax>
  );
};

export default ParallaxTwo;
