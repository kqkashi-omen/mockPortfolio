import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from './BlurText';

// Smooth, cinematic expansion curves matching desktop feel
const getOverlayVariants = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  // Button sits at top: 18px, right: 18px (center is ~46px) on mobile; top: 32px, right: 32px on desktop (~64px center)
  const origin = isMobile ? 'calc(100% - 46px) 46px' : 'calc(100% - 64px) 64px';

  return {
    initial: {
      clipPath: `circle(0% at ${origin})`,
      opacity: 0.2,
    },
    animate: {
      clipPath: `circle(165% at ${origin})`,
      opacity: 1,
      transition: {
        duration: 1.15, // Slow, elegant cinematic unfold
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      clipPath: `circle(0% at ${origin})`,
      opacity: 0,
      transition: {
        duration: 0.48, // Snappy exit
        ease: [0.32, 0, 0.67, 0],
      },
    },
  };
};

const backdropVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { 
      duration: 0.85, // Slower fade-in to sync smoothly with the expanding circle
      ease: [0.16, 1, 0.3, 1] 
    },
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
          {/* Static frosted backdrop layer (smooth fade sync) */}
          <motion.div
            className="menu-backdrop"
            variants={backdropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />

          {/* Smooth Expanding Overlay */}
          <motion.div
            className="menu-overlay"
            variants={getOverlayVariants()}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              willChange: 'clip-path, opacity',
              transform: 'translate3d(0, 0, 0)',
              WebkitTransform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <nav className="menu-links">
              {navItems.map((item, index) => (
                <div key={item.label} className="menu-item">
                  <button
                    type="button"
                    className="menu-link"
                    onClick={(e) => handleNavigation(e, item.href)}
                  >
                    <BlurText
                      text={item.label}
                      baseDelay={0.45 + index * 0.08} // Staggered to reveal as the circle sweeps past
                      delay={0.035}
                      direction="bottom"
                      animateBy="characters"
                    />
                  </button>
                </div>
              ))}
            </nav>

            <motion.div
              className="menu-footer"
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.85, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
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