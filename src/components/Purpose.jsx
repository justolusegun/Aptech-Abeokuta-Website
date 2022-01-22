import React from "react";
import { School } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Card = styled.div`
  padding: 20px;
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  position: relative;
  border: 1px solid grey;
`;
const H1 = styled.h1`
  text-align: center;
  margin: 50px auto 50px;
  position: relative;
  line-height: 60px;
  color: #000;
`;
const Head = styled.div``;

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
      title: "APTECH'S CERTIFICATES ENJOY GLOBAL RECOGNITION",
      img: <School fontSize="large" />,
      desc: "Aptech's courses lead to professional I.T. certifications from leading I.T brands such as Microsoft and from Aptech itself.Each course includes classroom learning as well as practical sessions in the lab.",
    },
    {
      id: 3,
      title: "APTECH'S CERTIFICATES ENJOY GLOBAL RECOGNITION",
      img: <School fontSize="large" />,
      desc: "Aptech's courses lead to professional I.T. certifications from leading I.T brands such as Microsoft and from Aptech itself.Each course includes classroom learning as well as practical sessions in the lab.",
    },
  ];
  return (
    <>
      <H1>
        Why Aptech <span Style="Color:goldenrod">Works</span>
      </H1>
      <Container>
        {purposes.map((purpose) => {
          return (
            <Card>
              <Head>
                {purpose.img}
                {purpose.title}
              </Head>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default Purpose;
