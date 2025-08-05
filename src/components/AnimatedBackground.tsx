import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            background: `hsl(${i * 60}, 70%, 50%)`,
            left: `${i * 15}%`,
            top: `${i * 10}%`,
          }}
        />
      ))}
    </div>
  );
}