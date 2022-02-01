/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import { Facebook } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { LinkedIn } from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";
import { WhatsApp } from "@material-ui/icons";
import { Room } from "@material-ui/icons";
import { Phone } from "@material-ui/icons";
import { MailOutline } from "@material-ui/icons";
import { Mobile } from "../Responsive";
import AptechLogo from "../images/logo.png";
import "../Footer.css";

const Container = styled.div`
  display: flex;
  ${Mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;



const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${Mobile({ backgroundColor: "#000000" })}
`;
const ContactItem = styled.div`
margin-bottom 20px;
display: flex;
align-items: center;
`;


function Footer() {
  return (
    <div className="Fmain">
        <Container>
      <Left>
        <span className="logo">
            <img src={AptechLogo} alt="Aptech Logo" />
        </span>
        

      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
        <ListItem><NavLink className="FootNav"  to="/" exact="true"> Home </NavLink></ListItem>
        <ListItem><NavLink className="FootNav"  to="/courses" exact="true"> Courses </NavLink></ListItem>
          <ListItem><NavLink className="FootNav"  to="/about" exact="true"> About </NavLink></ListItem>
          <ListItem><NavLink className="FootNav"  to="/whyAptech" exact="true"> Why Aptech </NavLink></ListItem>
          <ListItem><NavLink className="FootNav"  to="/contact" exact="true"> Contact </NavLink></ListItem>
        </List>
      </Center>



      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> #22, Quarry Road, Panseke, Ibara, Abeokuta Ogun state, Nigeria.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +234 (0) 803 41 52 55 7
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> aptechabeokuta@gmail.com
        </ContactItem>
      </Right>
      <Center>
        <Title>Find Us</Title>
        <List>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <a href="https://www.facebook.com/aptechabk/" target="_blank">   <Facebook /></a>
          </SocialIcon>
          <SocialIcon color="55acee">
            <a href="https://www.linkedin.com/aptech-computer-education-801840229" target="_blank"><LinkedIn /></a>
          </SocialIcon>
          <SocialIcon color="55acee">
            <a href="https://twitter.com/AptechAbk" target="_blank"> <Twitter />  </a> 
          </SocialIcon>
          <SocialIcon color="075e54">
            <a href="https://wa.link/k4rnh2" target="_blank"><WhatsApp /></a>
          </SocialIcon>
        </SocialContainer>  
        </List>
      </Center> 
    </Container>
        <div className="row">
            <hr />
            <p className="bfot">
                &copy;{new Date().getFullYear()} APTECH ABEOKUTA | All Right reserved 
            </p>
        </div>
    </div>
  );
}

export default Footer;






















































// import React from 'react';
// import AptechLogo from "../images/logo.png";
// import {Facebook} from "@material-ui/icons";
// // import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import "../Footer.css";

// const Footer = () => {
//   return (
//       <>
//         <div className="Fmain">
//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <ul className="list-unstyled">
//                             <span className="logo">
//                                 <img src={AptechLogo} alt="Aptech Logo" />
//                             </span>
//                         </ul>
//                     </div>
//                     <div className="col">
//                         <h4>MORE INFO</h4>
//                         <ul className="list-unstyled">
//                             <li>Home</li>
//                             <li>About</li>
//                             <li>Courses</li>
//                             <li>Why Aptech</li>
//                             <li>Contact</li>
//                         </ul>
//                     </div>
//                     <div className="col">
//                         <h4>FOllOW US</h4>
//                         <ul className="list-unstyled">
//                             <p>No 1, Quarry Road, old savanna bank, beside bSide lounge, Abeokuta Ogun state, Nigeria </p>
//                             <Facebook style={{backgroundColor:"white", borderRadius: "50%", color:"blue", fontSize: "larger"}} />
//                         </ul>
//                     </div>
//                     <div className="col">
//                         <h4>CONTACT</h4>
//                         <ul className="list-unstyled">
//                             <p><span className="act">Email: </span>aptechabeokuta@gmail.com</p>
//                             <p><span className="act">Telephone: </span>+234 (0) 111 22 33 44 5</p>
//                             <p><span className="act">Office opens: </span>Mon - Saturday 8.00AM 5.00PM GMT +1</p>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <hr />
//                     <p className="col-sm">
//                          &copy;{new Date().getFullYear()} APTECH ABEOKUTA | All Right reserved 
//                     </p>
//                 </div>
//             </div> 
//         </div>

//       </>
//   )
// }

// export default Footer;
