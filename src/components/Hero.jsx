import React from 'react';
import portraitImg from '../assets/hero-portrait.png';

export default function Hero() {
  return (
    <section id="home" className="section-container hero">
      <div className="hero-grid">
        {/* Left Column: Typography */}
        <div className="hero-content">
          <div className="section-tag">[00] PORTFOLIO / 2026</div>
          <h1 className="hero-title">
            SOFTWARE<br />DEVELOPER
          </h1>
          <p className="hero-subtext">
            I construct purposeful, high-performance web systems and minimalist
            interactive experiences with modern frontend architecture.
          </p>
        </div>

        {/* Right Column: Circular Masked Portrait */}
        <div className="hero-portrait-wrapper">
          <div className="hero-portrait-mask">
            <img 
              src={portraitImg} 
              alt="Ayushman Mahananda Portrait" 
              className="hero-portrait-img" 
            />
          </div>
        </div>
      </div>

      {/* Bottom Metadata */}
      <div className="hero-meta">
        <div>
          <span>NAME</span>
          Ayushman Mahananda
        </div>
        <div>
          <span>DISCIPLINE</span>
          Frontend Engineering & Architecture
        </div>
        <div>
          <span>LOCATION</span>
          Available Worldwide / Remote
        </div>
      </div>
    </section>
  );
}