import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import advert from "../images/advert.jpg";
import advert2 from "../images/advert2.jpg";
import imgone from "../images/imgone.JPG";
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
const H4 = styled.h4`
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
        <H1>Some events at the centre.</H1>
        {/* <H3>And News</H3> */}
      </Head>
      <Container>
        <Body>
          <H4>AVIGO, is an indigenous firm, which is one of the most effective environmental and allied services company in Nigeria, it was incorporated at Corporate Affairs Commission Abuja in the year 2017.</H4>
          <P>
          AVIGO is a 100% Nigerian owned Company. The company has a comprehensive pool of professional staff consisting of Managers, Software developers, Hardware Engineers, Network Engineers as well as grounded Informational Technology professionals. We have the skill set to design, and deploy Local Area Network (LAN), Wide Area Network (WAN), WIFI, Cisco Network Cascading, Network Integration, etc. We also can also offer network support services to existing clients network.
          </P>
        </Body>
        <Carousel fade style={{ width: "100%", flex: 1 }}>
          <Carousel.Item>
            <img className="d-block w-100" src={advert} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={advert2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imgone} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default News;
