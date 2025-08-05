import React from 'react';
import { motion } from 'framer-motion';

interface SubFeatureProps {
  icon: string;
  title: string;
  description: string;
}

export default function SubFeatureCard({ icon, title, description }: SubFeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <span className="text-4xl">{icon}</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}