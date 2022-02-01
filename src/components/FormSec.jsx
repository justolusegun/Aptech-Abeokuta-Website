import React from 'react';
import "../FormSec.css";
import { Form, Col, Row, Button } from "react-bootstrap";
import email from "../images/email.png";

const FormSec = () => {
  return(
      <>
        <div className="Cmain">
          
                   <div className="dvd">
                        <div className="con-main">
                            <div className="contact-info">
                                <img src={email} alt="emailImage" />
                                <h2>Contact Us</h2>
                                <h5>We would love to hear from you!</h5>
                                <p className="tel">Tel</p>
                                <p className='tel'>(+234) 803-7217-003 <br />
                                   (+234) 803-4152-557 
                                </p>
                            </div>
                        </div>
                       <div className="form">
                       <Form>
  <Row className="mb-3">

  <Form.Group  className="mb-3 form" controlId="formGroupEmail">
    <Form.Label> <h6> Full Name:</h6></Form.Label>
    <Form.Control placeholder="Enter Full Name" />
  </Form.Group>

    <Form.Group className='form' as={Col} controlId="formGridEmail">
      <Form.Label> <h6>Email:</h6> </Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

  <Form.Group className="mb-3 form" controlId="exampleForm.ControlTextarea1">
    <Form.Label> <h6>Message: </h6> </Form.Label>
    <Form.Control as="textarea" rows={7} style={{width: "100%"}} />
  </Form.Group>
  </Row>

  <Button variant="primary" type="submit">
    Send Message
  </Button>
</Form>  
                       </div>
                   </div>
        </div>
      </>
  );
};

export default FormSec;
