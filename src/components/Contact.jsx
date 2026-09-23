import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="section-tag">[04] Contact</div>
      <h2 className="contact-header">
        Let's build<br />something great.
      </h2>
      <a href="mailto:ayushman@example.com" className="contact-email">
        ayushman@example.com
      </a>
      <div className="contact-footer">
        <div>© 2026 Ayushman Mahananda. All rights reserved.</div>
        <div>Built with React & Framer Motion</div>
      </div>
    </section>
  );
}