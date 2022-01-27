import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import jobprofile1 from "../images/jobprofile1.jpeg";
import styled from "styled-components";
import { Mobile } from "../Responsive";
import { SmallMobile } from "../Responsive2";

const Container = styled.div`
  margin: 80px auto 100px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  ${Mobile({ display: "block", marginTop: "40px" })};
`;
const H1 = styled.h1`
  text-align: center;
  margin: 100px auto 50px;
  position: relative;
  line-height: 40px;
  color: #000;
  padding-bottom: 20px;

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
    ${SmallMobile({ display: "none" })};
  }
`;
const H3 = styled.h3`
  text-align: center;
  margin-top: 40px;
  color: #000;
`;
const Body = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: 3px 3px 5px 3px #ddd;
  margin-right: 20px;
  margin-left: 20px;
  ${Mobile({ margin: "30px 20px 20px 30px" })};
`;
const P = styled.div``;
const AcnsJobprofile1 = () => {
  return (
    <>
      <H1>
        Job Profile:{" "}
        <span style={{ color: "goldenrod" }}>Hardware Specialist</span>
      </H1>
      <Container>
        <Body>
          <H3>Course Objective</H3>
          <P>
            <ul>
              <li>Digital Electronics</li>
              <li>Fundamentals of Computer Hardware and Networking</li>
              <li>PC Configuration and Troubleshooting</li>
              <li>and more!!</li>
            </ul>
          </P>
        </Body>
        <Carousel fade style={{ width: "100%", flex: 1 }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jobprofile1}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <H1>
        Job Profile:{" "}
        <span style={{ color: "goldenrod" }}>Network Administrator</span>
      </H1>
      <Container>
        <Carousel fade style={{ width: "100%", flex: 1 }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jobprofile1}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
        <Body style={{}}>
          <H3>Course Objective</H3>
          <P>
            <ul>
              <li>Networking Essentials </li>
              <li>Routing Technology</li>
              <li>Working with Windows Operating System</li>
              <li>and more!!</li>
            </ul>
          </P>
        </Body>
      </Container>
    </>
  );
};

export default AcnsJobprofile1;
