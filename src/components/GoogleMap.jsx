/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import "../FormSec.css"

const GoogleMap = () =>{
  return(
      
    <>
        <div className="ap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.910857356426!2d3.326393514859295!3d7.136306694846939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4c6fc3130c2b%3A0x85cfc1734f8026f5!2sAptech!5e0!3m2!1sen!2sng!4v1643321720589!5m2!1sen!2sng" 
      width="100%" 
      height="500" 
      style={{border:  "0"}} 
      allowfullscreen="" 
      loading="lazy"></iframe>
        </div>    
    </>
      
  )
}

export default GoogleMap;
