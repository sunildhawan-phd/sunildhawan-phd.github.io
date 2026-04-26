import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 250, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 250, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="fixed top-0 left-0 w-6 h-6 bg-cobalt/30 dark:bg-cobalt-bright/30 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default CustomCursor;
