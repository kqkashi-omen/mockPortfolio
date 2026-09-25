import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.webp';

export default function Navbar({ isOpen, setIsOpen }) {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    const heroElement = document.querySelector('#home');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Left Logo */}
      <header className="navbar-top-left">
        <a 
          href="#home" 
          onClick={handleScrollToTop} 
          className="nav-logo-link" 
          aria-label="Back to top"
        >
          <img 
            src={logo} 
            alt="AM Monogram Logo" 
            className="nav-logo" 
          />
        </a>
      </header>

      {/* Top Right Circular Floating Menu Button */}
      <button
        type="button"
        className="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
      >
        <motion.span
          className="menu-line"
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.span
          className="menu-line"
          animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="menu-line"
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />
      </button>
    </>
  );
}