import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          At IIT Indore Health Center, we're dedicated to providing high-quality healthcare services for students, 
          faculty, and staff. Whether you're here for a routine checkup or seeking specialized care,
          we're here to support your well-being every step of the way.Stay healthy, stay strong!
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero"/>
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;