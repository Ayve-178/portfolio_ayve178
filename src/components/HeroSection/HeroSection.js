import React from "react";
import image from "../../assets/images/SquareQuick_202242035625999.jpg";
import Ptext from "../Ptext/Ptext";
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero-heading">
          <span>Hello, I am</span>
          <span className="hero-name">Khairun Nessa Ayve</span>
        </h1>
        <div className="hero-image">
          <img src={image} alt="cover" />
        </div>
        <div className="hero-info">
          <Ptext>
            As dreams don't have any expiration date, I believe in taking a deep breath and again working on dreams. I love to involve myself in continuous learning. And I am a quite fast learner I guess. Working under pressure is my super power and I prefer to waste time on perfection.
          </Ptext>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
