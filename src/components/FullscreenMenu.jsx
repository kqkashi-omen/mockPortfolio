import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from './BlurText';

const overlayVariants = {
  initial: {
    clipPath: 'circle(0% at calc(100% - 64px) 64px)',
    opacity: 0,
  },
  animate: {
    clipPath: 'circle(160% at calc(100% - 64px) 64px)',
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    clipPath: 'circle(0% at calc(100% - 64px) 64px)',
    opacity: 0,
    transition: {
      duration: 0.45,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};

const backdropVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.35, ease: 'easeIn' },
  },
};

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'SERVICES', href: '#services' },
  { label: 'WORKS', href: '#work' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

export default function FullscreenMenu({ isOpen, setIsOpen }) {
  const handleNavigation = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="menu-backdrop"
            variants={backdropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />

          <motion.div
            className="menu-overlay"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <nav className="menu-links">
              {navItems.map((item, index) => (
                <div key={item.label} className="menu-item">
                  <button
                    type="button"
                    className="menu-link"
                    onClick={(e) => handleNavigation(e, item.href)}
                  >
                    {/* 
                      - Starts 0.45s after click (letting the circle expand first)
                      - Each row starts 0.12s after the previous row
                      - Each letter floats in with a deliberate 0.055s wave
                    */}
                    <BlurText
                      text={item.label}
                      baseDelay={0.45 + index * 0.12}
                      delay={0.055}
                      direction="bottom"
                      animateBy="characters"
                    />
                  </button>
                </div>
              ))}
            </nav>

            <motion.div
              className="menu-footer"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              }}
              exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
            >
              <div>
                <div className="menu-footer-label">EMAIL ADDRESS</div>
                <div className="menu-footer-email">contact@ayushman.dev</div>
              </div>
              <div className="menu-footer-links">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://leetcode.com" target="_blank" rel="noreferrer">LeetCode</a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}