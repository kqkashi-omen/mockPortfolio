import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <motion.button
      type="button"
      className="menu-btn"
      onClick={() => setIsOpen(!isOpen)}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="menu-line"
        animate={
          isOpen
            ? { rotate: 45, y: 4 }
            : { rotate: 0, y: 0 }
        }
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        className="menu-line"
        animate={
          isOpen
            ? { rotate: -45, y: -4 }
            : { rotate: 0, y: 0 }
        }
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.button>
  );
}