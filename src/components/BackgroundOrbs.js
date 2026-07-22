import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        style={{ willChange: "transform" }}
      />
      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 150, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[150px]"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
