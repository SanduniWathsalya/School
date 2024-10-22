// src/components/Team.js
import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section className="team">
      <h2>Our Team</h2>
      <div class="team-section">
        <div class="team-container">
            <div class="team-member">
                <div class="image-container">
                    <img src="/ceo.jpg" alt="Founder & CEO"/>
                </div>
                <h3>Founder & CEO</h3>
                <p>Mr.ABCD EFGH</p>
            </div>
            
            <div class="team-member">
                <div class="image-container">
                    <img src="/ceo.jpg" alt="Social Media Manager"/>
                </div>
                <h3>Social Media Manager</h3>
                <p>Mr.ABCD EFGH</p>
            </div>
        </div>
    </div>
    </section>
  );
};

export default Team;