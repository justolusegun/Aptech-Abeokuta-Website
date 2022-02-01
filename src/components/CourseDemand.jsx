import styled from "styled-components";
import gradone from "../images/gradone.jpeg";
import gradtwo from "../images/gradtwo.jpeg";
import gradthree from "../images/gradthree.jpeg";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Containertwo = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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

const Info = styled.h3`
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  color: #fff;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Button = styled.button`
  background: goldenrod;
  padding: 5px 10px;
  transition: all ease;
  &:hover {
    background: #fff;
    color: goldenrod;
    transform: scale(1.1);
  }
`;
const Span = styled.span`
  margin: auto auto 20px auto;
  display: block;
`;
const Pad = styled.div`
  padding-top: 30%;
`;
const CourseDemand = () => {
  const courses = [
    {
      id: 1,
      img: gradone,
      desc: "Aptech ACNS Career Courses",
    },
    {
      id: 2,
      img: gradtwo,
      desc: "Advanced Diploma In Software Engineering(ADSE)",
    },
    {
      id: 3,
      img: gradthree,
      desc: "Aptech Smart Proffessional Courses",
    },
  ];

  return (
    <>
      <H1>
        We Teach In <span style={{ color: "goldenrod" }}>Demand Courses</span>
      </H1>
      <Container>
        {courses.map((course) => {
          return (
            <Containertwo key={course.id}>
              <Image src={course.img} />
              <Info>
                <Pad>
                  <Span>{course.desc}</Span>
                  <Span>
                    {(() => {
                      if (course.id === 1) {
                        return (
                          <NavLink to="/courses/acns" exact="true">
                            <Button>Read More</Button>
                          </NavLink>
                        );
                      } else if (course.id === 2) {
                        return (
                          <NavLink to="/courses/adse" exact="true">
                            <Button>Read More</Button>
                          </NavLink>
                        );
                      } else if (course.id === 3) {
                        return (
                          <NavLink to="/courses/pro" exact="true">
                            <Button>Read More</Button>
                          </NavLink>
                        );
                      }
                    })()}
                  </Span>
                </Pad>
              </Info>
            </Containertwo>
          );
        })}
      </Container>
    </>
  );
};

export default CourseDemand;
