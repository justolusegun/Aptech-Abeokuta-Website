import React from "react";
import styled from "styled-components";
import { Mobile } from "../Responsive";

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
  ${Mobile({ fontSize: "25px", paddingBottom: "5px" })}
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Mobile({ flexDirection: "column" })}
`;
const Body = styled.div`
  flex: 1;
  text-align: center;
  ${Mobile({ marginBottom: "50px" })}
`;
const Story = () => {
  const datas = [
    {
      id: 1,
      num: 5,
      desc: "CONTINENTS",
    },
    {
      id: 2,
      num: 40,
      desc: "COUNTRIES OF GLOBAL PRESENCE",
    },
    {
      id: 3,
      num: 35,
      desc: "YEARS OF GLOBAL EXPERIENCE",
    },
    {
      id: 4,
      num: 7000000,
      desc: "STUDENTS TRAINED",
    },
  ];
  return (
    <>
      <H1>Our Story</H1>
      <Container>
        {datas.map((data) => {
          return (
            <Body key={data.id}>
              <div style={{ color: "goldenrod", fontSize: "25px" }}>
                {data.num}
              </div>
              <div>{data.desc}</div>
            </Body>
          );
        })}
      </Container>
    </>
  );
};

export default Story;
