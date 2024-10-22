import React from 'react';
import './Hero.css'; 

function Hero() {
  return (
    <section className="Sec">
      <img src="/img with blur.png" alt="Curtain" className="hero-img" />
      <div className="hero-text">
        <img src="/Logo.png" alt="Curtain" className="logo" />
        <h1>About Us</h1>
        <p>Welcome to Glorious Fabric Pvt Ltd !  </p>
        
      </div>
    </section>
  );
}

export default Hero;