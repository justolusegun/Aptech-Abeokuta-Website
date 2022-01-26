import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import termOne from "../images/termOne.png";
import termTwo from "../images/termTwo.png";
import termThree from "../images/term3.png";
import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
  ${Mobile({ display: "block" })};
`;
const Head = styled.div`
  width: 50%;
  text-align: center;
  margin: 150px auto 50px;
`;

const H1 = styled.h1`
  color: goldenrod;
`;
const H3 = styled.h3`
  color: #000;
`;
const Body = styled.div`
  text-align: center;
  flex: 1;
  padding: 20px;
  margin-right: 10px;
  box-shadow: 3px 5px 5px 3px #ccc;
`;
const P = styled.div``;
const News = () => {
  return (
    <>
      <Head>
        <H1>Upcoming Events</H1>
        <H3>And News</H3>
      </Head>
      <Container>
        <Body>
          <H3>Aptech (ACCP)</H3>
          <P>
            Aptech has been one of the front-runners in the I.T. education
            space. In order to make learning interactive and exciting, Aptech
            introduce a new ACCP program that covers Artificial Intelligent,
            Machine Learning, Internet of a thing(IoT), Dart Programming
            Language, Flutter, etc.
          </P>
        </Body>
        <Carousel fade style={{ width: "100%", flex: 1 }}>
          <Carousel.Item>
            <img className="d-block w-100" src={termOne} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={termTwo} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={termThree} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default News;
