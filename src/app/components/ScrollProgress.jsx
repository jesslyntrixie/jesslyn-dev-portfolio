'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-16 lg:top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 z-40 origin-left"
      style={{ scaleX }}
    />
  );
}