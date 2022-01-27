import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import ethical from "../images/ethical.jpeg";
import andriodApp from "../images/android-app.jpeg";
import java from "../images/java.png";
import net from "../images/net.jpeg";
import sql from "../images/sql.jpeg";
import python from "../images/Python.jpeg";
import { Mobile } from "../Responsive";
import { SmallMobile } from "../Responsive2";
import { NavLink } from "react-router-dom";

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
  padding: 30px;
  box-shadow: 3px 3px 3px 3px #ddd;
  width: 100%;
  ${Mobile({ height: "100%" })}
`;
const P = styled.div`
  text-align: justify;
`;
const Image = styled.img`
  width: 100%;
  margin: auto;
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
  margin: 30px auto 20px auto;
  display: block;
`;
const ProJobProfile = () => {
  return (
    <>
      <Head>
        <H3>OUR ACADEMIC ALLIANCES</H3>
      </Head>
      <Container>
        <Body>
          <Image src={ethical} />
          <H3>ETHICAL HACKING</H3>
          <P>
            A white hat is an ethical computer hacker, or a computer security
            expert, who specializes in penetration testing and other testing
            methodologies that ensure the security of an organization's
            informat…
          </P>
          <Span>
            <NavLink to="/contact" exact="true">
              <Button>Enroll Now</Button>
            </NavLink>
          </Span>
        </Body>
        <Body>
          <Image src={andriodApp} />
          <H3>ANDROID APP</H3>
          <P>
            Android software development is the process by which applications
            are created for devices running the Android operating system. Google
            states that "Android apps can be written using Kotlin, Java, and…
          </P>
          <Span>
            <NavLink to="/contact" exact="true">
              <Button>Enroll Now</Button>
            </NavLink>
          </Span>
        </Body>
      </Container>
      <Container>
        <Body>
          <Image src={java} />
          <H3>JAVA</H3>
          <P>
            Java is a high-level, class-based, object-oriented programming
            language that is designed to have as few implementation dependencies
            as possible.Java is a programming language. Java is used to develop…
          </P>
          <Span>
            <NavLink to="/contact" exact="true">
              <Button>Enroll Now</Button>
            </NavLink>
          </Span>
        </Body>
        <Body>
          <Image src={net} />
          <H3>.NET</H3>
          <P>
            The .NET Framework is a software framework developed by Microsoft
            that runs primarily on Microsoft Windows. It includes a large class
            library called Framework Class Library and provides language inte…
          </P>
          <Span>
            <NavLink to="/contact" exact="true">
              <Button>Enroll Now</Button>
            </NavLink>
          </Span>
        </Body>
      </Container>
      <Container>
        <Body>
          <Image src={sql} />
          <H3>SQL SERVER</H3>
          <P>
            Microsoft SQL Server is a relational database management system
            developed by Microsoft. As a database server, it is a software
            product with the primary function of storing and retrieving data as
            requ…
          </P>
          <Span>
            <NavLink to="/contact" exact="true">
              <Button>Enroll Now</Button>
            </NavLink>
          </Span>
        </Body>
        <Body>
          <Image src={python} />
          <H3>WEB WITH PYTHON</H3>
          <P>
            One area where Python shines is web development. Python offers many
            frameworks from which to choose from including bottle.py, Flask,
            CherryPy, Pyramid, Django and web2py. These frameworks have been u…
          </P>
          <Span>
            <NavLink to="/contact" exact="true">
              <Button>Enroll Now</Button>
            </NavLink>
          </Span>
        </Body>
      </Container>
    </>
  );
};

export default ProJobProfile;
