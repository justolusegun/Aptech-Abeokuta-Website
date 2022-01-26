import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import whyImg from "../images/whyImg.jpeg";
import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`
  margin: 80px auto 100px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  ${Mobile({ display: "block", marginTop: "40px" })};
`;

const H3 = styled.h3`
  margin-top: 40px;
  color: #000;
`;
const Body = styled.div`
  text-align: center;
  flex: 1;
  padding: 20px;
  box-shadow: 3px 5px 5px 3px #ccc;
  margin-right: 20px;
  ${Mobile({ margin: "30px 20px 20px 30px" })};
`;
const P = styled.div``;
const WhyNews = () => {
  return (
    <>
      <Container>
        <Body>
          <H3>Who Are We?</H3>
          <P>
            Aptech Computer Education is the I.T training brand of Aptech Ltd.
            It is a leading provider of quality I.T Education to school
            graduates, diploma holder, university graduates, and working
            professional. Aptech has always been seen as a leader in the I.T
            training industry. We have gained a reputation for the quality and
            integrity with which we provide our services to million of students
            worldwide through world-class education programs and teaching
            methodologies.
          </P>
        </Body>
        <Carousel fade style={{ width: "100%", flex: 1 }}>
          <Carousel.Item>
            <img className="d-block w-100" src={whyImg} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default WhyNews;
