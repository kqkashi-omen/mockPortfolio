import React from 'react';

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="section-tag">[01] Profile</div>
      <p className="about-statement">
        I am a developer interested in building durable, accessible, and
        technically honest digital products. My focus lies at the crossroads
        of typography, robust codebases, and performance-led interactions.
      </p>
      <p className="hero-subtext" style={{ maxWidth: '780px' }}>
        Trained in clean systems engineering, I skip visual bloat and excessive
        libraries in favor of native primitives, semantic HTML, and targeted
        micro-interactions.
      </p>
    </section>
  );
}