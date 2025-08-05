import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FeatureCard as FeatureCardType } from '../types';

export default function FeatureCard({ title, description, icon, path }: FeatureCardType) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer"
      onClick={() => navigate(path)}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <span className="text-4xl">{icon}</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}