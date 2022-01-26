import React from "react";
import { Public, School } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const Card = styled.div`
  width: 100%;
  padding: 20px;
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  position: relative;
  box-shadow: 3px 5px 5px 3px #ccc;
  border-radius: 10px;
`;
const H1 = styled.h1`
  text-align: center;
  margin: 50px auto 50px;
  position: relative;
  line-height: 60px;
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
  }
`;
const Head = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
`;
const Body = styled.div`
  padding: 30px 0px;
`;
const Purpose = () => {
  const purposes = [
    {
      id: 1,
      title: "APTECH'S CERTIFICATES ENJOY GLOBAL RECOGNITION",
      img: <School fontSize="large" />,
      desc: "Aptech's courses lead to professional I.T. certifications from leading I.T brands such as Microsoft and from Aptech itself.Each course includes classroom learning as well as practical sessions in the lab.",
    },
    {
      id: 2,
      title: "OUR INTERNTIONAL EDUCATION ALLIANCES",
      img: <Public fontSize="large" />,
      desc: "Aptech's courses lead to professional I.T. certifications from leading I.T brands such as Microsoft and from Aptech itself.Each course includes classroom learning as well as practical sessions in the lab.",
    },
    {
      id: 3,
      title: "APTECH MISSION",
      img: <Public fontSize="large" />,
      desc: "Aptech's courses lead to professional I.T. certifications from leading I.T brands such as Microsoft and from Aptech itself.Each course includes classroom learning as well as practical sessions in the lab.",
    },
  ];
  return (
    <>
      <H1>
        Why Aptech <span style={{ color: "goldenrod" }}>Works</span>
      </H1>
      <Container>
        {purposes.map((purpose) => {
          return (
            <Card key={purpose.id}>
              <Head>
                <span style={{ color: "goldenrod" }}>{purpose.img}</span>
                {purpose.title}
              </Head>
              <Body>{purpose.desc}</Body>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default Purpose;
