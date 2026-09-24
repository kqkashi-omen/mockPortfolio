import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function SpotlightReveal() {
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth, weighted physical lag mimicking high-end Webflow sites
  const springConfig = { damping: 32, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <motion.div
      className="spotlight-layer"
      style={{
        opacity: isVisible ? 1 : 0,
        // High-end multi-stop feathering curve
        WebkitMaskImage: `radial-gradient(circle 340px at var(--mouse-x, -1000px) var(--mouse-y, -1000px), black 0%, rgba(0, 0, 0, 0.85) 35%, rgba(0, 0, 0, 0.3) 65%, transparent 100%)`,
        maskImage: `radial-gradient(circle 340px at var(--mouse-x, -1000px) var(--mouse-y, -1000px), black 0%, rgba(0, 0, 0, 0.85) 35%, rgba(0, 0, 0, 0.3) 65%, transparent 100%)`,
      }}
      ref={(el) => {
        if (!el) return;
        const unsubX = smoothX.on('change', (v) => el.style.setProperty('--mouse-x', `${v}px`));
        const unsubY = smoothY.on('change', (v) => el.style.setProperty('--mouse-y', `${v}px`));
        return () => {
          unsubX();
          unsubY();
        };
      }}
    >
      <div className="spotlight-underlayer" />
      {/* Specular core highlight */}
      <div 
        className="spotlight-glow"
        style={{
          transform: 'translate3d(calc(var(--mouse-x, -1000px) - 50%), calc(var(--mouse-y, -1000px) - 50%), 0)',
        }}
      />
    </motion.div>
  );
}