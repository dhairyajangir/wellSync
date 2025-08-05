import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import FeatureCard from '../components/FeatureCard';

const features = [
  {
    title: 'Health Tracking',
    description: 'Monitor your fitness, sleep, and nutrition with real-time insights',
    icon: '🏋️‍♂️',
    path: '/health'
  },
  {
    title: 'Financial Insights',
    description: 'Smart budgeting and investment tracking for your wealth',
    icon: '💰',
    path: '/finance'
  },
  {
    title: 'Productivity Booster',
    description: 'Optimize your time and tasks with AI-powered scheduling',
    icon: '⏳',
    path: '/productivity'
  },
  {
    title: 'Personal Growth',
    description: 'Track your learning journey and achieve personal goals',
    icon: '🌱',
    path: '/growth'
  },
  {
    title: 'Dashboard',
    description: 'All your metrics in one unified view for better insights',
    icon: '📊',
    path: '/dashboard'
  },
  {
    title: 'AI Wellness Advisor',
    description: 'Get personalized recommendations for holistic well-being',
    icon: '🤖',
    path: '/ai-advisor'
  }
];

const testimonials = [
  {
    quote: "WellSync has transformed how I manage my health and finances. It's like having a personal assistant!",
    author: "Sarah L."
  },
  {
    quote: "The AI recommendations are spot-on. I've never felt more in control of my life.",
    author: "John D."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Your Life, Unified
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Achieve Balance Across Health, Wealth, and Growth
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            At WellSync, we believe in empowering you to take control of your life. Whether it's tracking your fitness goals,
            managing your finances, boosting productivity, or fostering personal growth, we provide the tools you need to thrive.
            Our AI-driven insights and personalized recommendations help you live your best life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium border border-gray-200 dark:border-gray-700"
            >
              Explore Features
            </motion.button>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-32 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose WellSync?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-16">
            WellSync is more than just a platform—it's your partner in achieving holistic well-being.
            Our cutting-edge technology combines AI-driven insights, real-time data visualization,
            and personalized recommendations to help you live your best life. Join thousands of users
            who are already transforming their lives with WellSync.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-32"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="text-gray-900 dark:text-white font-medium">
                  – {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}