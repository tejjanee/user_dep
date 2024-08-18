import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
        
<h3>Who We Are</h3>
<p>
  At the IIT Indore Health Center, 
  we are committed to delivering exceptional healthcare services to our vibrant campus community.
   Our team of medical professionals provides compassionate and comprehensive care to ensure the health and well-being of every student,
   faculty, and staff member.
</p>
<p>
  We are dedicated to promoting a healthy campus environment in 2023 and beyond, 
  offering services that include general consultations, wellness programs, preventive care, 
  and emergency medical assistance.
</p>
<p>
  Our experienced staff is always here to support you, 
  whether you're seeking advice on staying healthy, 
  managing a chronic condition, or addressing an acute health issue.
</p>
<p>
  From routine checkups to specialized care, 
  the IIT Indore Health Center is your partner in well-being.
   We believe that a healthy body and mind are essential for academic success and personal growth.
</p>
<p>
  Stay healthy with us—because your well-being is our priority!
</p>
<p>Health is Happiness!</p>

        </div>
      </div>
    </>
  );
};

export default Biography;