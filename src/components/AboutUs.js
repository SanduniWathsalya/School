import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
    <div className="about-us-container">
    <div className="head"></div>
      
      
      <div className="sectio1">
        <h3>Who We Are</h3>
        <div className="conten1">
          <p>
          <span style={{ fontSize: '2rem' }}><b>W</b>e</span> are a premier fabric store dedicated to offering high-quality textiles at competitive prices. Our journey began in 2020 when we first stepped into the fabric industry. Over the years, we have steadily grown and refined our expertise, culminating in the official launch of our large-scale business on February 12, 2024.As a partnership venture, Glorious Fabric specializes in directly importing premium fabrics from around the globe. We cater to both wholesale and retail customers, ensuring that top-notch materials are accessible to everyone at affordable prices .
          </p>
          <img src="/pic1.png" alt="Who We Are" className='Who'/>
        </div>
      </div>
      
      <div className="sectio2">
        <h3>Our Mission</h3>
        <div className="conten2">
          <p>
              Our mission is to deliver the most suitable and desirable fabrics at affordable prices, ensuring the highest level of quality and customer satisfaction. We are dedicated to understanding and meeting our customers' needs, striving to achieve their trust and loyalty through exceptional service and consistent value.   
          </p>
          
        </div>
      </div>
      
      <div className="sectio3">
        <h3>We are ready to support your projects...</h3>
        <div className="conten3">
          <p>
          Whether you are a designer, retailer, or individual buyer, we are here to support your projects with our exceptional service and competitive pricing. Thank you for choosing Glorious Fabric Pvt Ltd. We look forward to being your trusted partner in all your fabric needs. Contact Us Feel free to reach out to us for any inquiries or assistance. We're here to help!

            
          </p>
          <img src="/pic3.png" alt="Customer Care" className='Us'/>
        </div>
      </div>
      
    </div>
    </section>

  );
};

export default AboutUs;