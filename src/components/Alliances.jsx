import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import lincoln from "../images/lincoln.png";
import middle from "../images/middle.png";
import { Mobile } from "../Responsive";
import { SmallMobile } from "../Responsive2";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 100px;
  ${Mobile({ display: "block" })};
`;
const Head = styled.div`
  width: 50%;
  text-align: center;
  margin: 150px auto 50px;
`;

const H3 = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  color: #000;
  margin-top: 30px;
  position: relative;
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
  }
  ${SmallMobile({ fontSize: "18px" })}
`;
const Body = styled.div`
  text-align: center;
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  box-shadow: 3px 5px 5px 3px #ccc;
  min-height: 430px;
`;
const P = styled.div`
  text-align: justify;
`;
const Image = styled.img`
  max-width: 300px;
  margin: auto;
`;
const Alliances = () => {
  return (
    <>
      <Head>
        <H3>OUR ACADEMIC ALLIANCES</H3>
      </Head>
      <Container>
        <Body>
          <Image src={lincoln} />
          <H3>Lincoln University College, Malaysia</H3>
          <P>
            Lincoln University College (LUC), located at Petaling Jaya, Malaysia
            was established in the year 2002 as Lincoln College (LC) and later
            upgraded to Lincoln University College in the year 2011. Lincoln
            University College is one of the premier private institutions of
            higher education approved by the Ministry of Higher Education and
            Malaysian Qualifications Agency (MQA- National Accreditation Board).
            The University College is also crowned with 5 Star ranking by the
            Ministry of Higher Education, Malaysia in 2017.
          </P>
        </Body>
        <Body>
          <Image src={middle} />
          <H3>Middlesex University College, London</H3>
          <P>
            Middlesex University teaches 40,000 students at their campuses in
            London, Dubai, Mauritius and Malta, and with prestigious academic
            partners across the world. It has a reputation for the highest
            quality teaching and has a practical, innovative approach to working
            with businesses to develop staff potential and provide business
            solutions.
          </P>
        </Body>
      </Container>
    </>
  );
};

export default Alliances;
