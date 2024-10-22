// src/components/CoreValues.js
import React from 'react';
import './CoreValues.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CoreValues = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,        // Enable automatic sliding
        autoplaySpeed: 3000,   // Set speed for autoplay (3 seconds in this case)
        pauseOnHover: true   
      };
  return (
    <section className="core-values">
      <div className="core-values-container">
        <h2>Our Core Values</h2>
        <div className="values-wrapper">
          <div className="values-grid">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <p>{d.title}</p>
                </div>
                <p className="value-text">{d.text}</p>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

const data = [
 
  {
    title: 'Sustainability',
    text: 'We prioritize eco-friendly materials and practices, ensuring that our products and processes minimize environmental impact.'
  },
  {
    title: 'Customer Satisfaction',
    text: 'We prioritize eco-friendly materials and practices, ensuring that our products and processes minimize environmental impact.'
  },
  {
    title: 'Innovation and Creativity',
    text: 'We embrace the latest trends and technology in textiles, continuously evolving our collections to inspire creativity in our customers.'
  },
  {
    title: 'Community Support',
    text: 'We believe in fostering strong relationships within our community by supporting local artisans and contributing to local initiatives.'
  },
  {
    title: 'Affordability',
    text: 'We offer premium quality fabrics at competitive prices, ensuring that everyone has access to top-quality materials for their projects.'
  },
  {
    title: 'Integrity and Trust',
    text: 'Transparency and honesty define our interactions with customers, suppliers, and partners, building trust through every transaction.'
  }
];

export default CoreValues;
