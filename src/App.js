// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import CoreValues from './components/CoreValues';
import Team from './components/Team';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <CoreValues />
      <Team />
      <Footer/>
    </div>
  );
};

export default App;
