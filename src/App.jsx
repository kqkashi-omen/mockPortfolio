import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FullscreenMenu from './components/FullscreenMenu';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className="portfolio-app">
      <Navbar isOpen={menuOpen} setIsOpen={setMenuOpen} />
      <FullscreenMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />

      {/* Main site blurs smoothly when menu is open */}
      <main className={`main-content ${menuOpen ? 'menu-blurred' : ''}`}>
        <Hero />
        <div className="separator" />
        <Work />
        <div className="separator" />
        <About />
        <div className="separator" />
        <Skills />
        <div className="separator" />
        <Contact />
      </main>
    </div>
  );
}