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
  padding: 0px;
  box-shadow: 3px 3px 5px 3px #ddd;
  margin-right: 20px;
  margin-left: 20px;
  ${Mobile({ margin: "20px 20px 20px 30px" })};
  ${SmallMobile({ padding: "5px" })}
`;

const LI = styled.li`
  line-height: "10px";
  margin: "10px";
  ${SmallMobile({ lineHeight: "23px", margin: "10px" })};
`;
const P = styled.div``;
const AdseJobprofile1 = () => {
  return (
    <>
      <H1>
        <span style={{ color: "goldenrod" }}>Semester 1</span> (CPISM)
      </H1>
      <Container>
        <Body>
          <H3>Course Objective</H3>
          <P>
            <ul>
              <LI>
                Solve programming problems using flowcharts and pseudocodes
              </LI>
              <LI>Use programming constructs to write programs in C</LI>
              <LI>
                Use HTML5/CSS3/JavaScript to implement well-structured Web sites
              </LI>
              <LI>
                Learn Bootstrap-Free and open-source front-end web framework for
                designing websites and web applications
              </LI>
              <LI>
                Design and develop responsive Web sites and single page
                applications using AngularJS
              </LI>
              <LI>
                Develop an interactive Web site using latest Web technologies
              </LI>
              <LI>Learn the basic principles of effective web UX/UI design</LI>
              <LI>
                Develop object-oriented programming skills using OOP principles
                and concepts
              </LI>
              <LI>
                Normalize raw data into well-organized database tables in SQL
                Server
              </LI>
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
        <span style={{ color: "goldenrod" }}>Semester 2</span> (DISM)
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
              <LI>Use XML & JSON to store and exchange data </LI>
              <LI> Learn to use Red Hat linux operating system</LI>
              <LI>Develop object-oriented applications using Java</LI>
              <LI>Design and develop desktop applications using Java</LI>
              <LI>
                Develop basic and advanced object-oriented applications using C#
              </LI>
              <LI>Understand the "what, why and how" of IoT</LI>
              <LI>Use Microsoft coding and XML documentation conventions</LI>
            </ul>
          </P>
        </Body>
      </Container>
    </>
  );
};

export default AdseJobprofile1;
