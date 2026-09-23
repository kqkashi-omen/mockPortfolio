import React from 'react';
import { motion } from 'framer-motion';

export default function BlurText({
  text = '',
  delay = 0.065,         // Slower gap between each letter
  baseDelay = 0,         // Wait time before this specific line starts
  className = '',
  animateBy = 'characters',
  direction = 'bottom',
}) {
  const segments = animateBy === 'words' ? text.split(' ') : text.split('');
  const yOffset = direction === 'top' ? -35 : 35;

  return (
    <span className={`blur-text-container ${className}`}>
      {segments.map((segment, i) => (
        <motion.span
          key={i}
          className="blur-text-segment"
          initial={{
            opacity: 0,
            filter: 'blur(16px)',
            y: yOffset,
          }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
          }}
          transition={{
            duration: 0.9,                           // Slower, deliberate float
            delay: baseDelay + i * delay,           // Sequences across lines & letters
            ease: [0.16, 1, 0.3, 1],                 // Smooth cinematic easing
          }}
        >
          {segment}
          {animateBy === 'words' && i < segments.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </span>
  );
}