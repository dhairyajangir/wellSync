import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Activity, DollarSign, CheckSquare, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  progress?: number;
}

function MetricCard({ title, value, icon, progress }: MetricCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        {icon}
      </div>
      <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</p>
      {progress !== undefined && (
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
            className="bg-indigo-600 h-2 rounded-full"
          />
        </div>
      )}
    </motion.div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Back Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="mb-8 flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Your Dashboard</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Track your progress across health, wealth, and personal growth
          </p>
        </motion.div>

        {/* Overview Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <MetricCard
            title="Steps Today"
            value="8,459"
            icon={<Activity className="w-6 h-6 text-indigo-600" />}
            progress={70}
          />
          <MetricCard
            title="Balance"
            value="$2,459.00"
            icon={<DollarSign className="w-6 h-6 text-green-600" />}
          />
          <MetricCard
            title="Tasks Completed"
            value="12/15"
            icon={<CheckSquare className="w-6 h-6 text-blue-600" />}
            progress={80}
          />
          <MetricCard
            title="Mood Score"
            value="85%"
            icon={<Heart className="w-6 h-6 text-red-600" />}
            progress={85}
          />
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Health Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Health Overview</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Heart Rate</span>
                <span className="text-gray-900 dark:text-white font-medium">72 bpm</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Calories Burned</span>
                <span className="text-gray-900 dark:text-white font-medium">450 kcal</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Sleep Score</span>
                <span className="text-gray-900 dark:text-white font-medium">85%</span>
              </div>
            </div>
          </motion.div>

          {/* Finance Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Financial Overview</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Income</span>
                <span className="text-gray-900 dark:text-white font-medium">$4,500.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Expenses</span>
                <span className="text-gray-900 dark:text-white font-medium">$2,041.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Savings</span>
                <span className="text-gray-900 dark:text-white font-medium">$2,459.00</span>
              </div>
            </div>
          </motion.div>

          {/* Productivity Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Productivity Overview</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Focus Time</span>
                <span className="text-gray-900 dark:text-white font-medium">4h 30m</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Tasks Completed</span>
                <span className="text-gray-900 dark:text-white font-medium">12/15</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Productivity Score</span>
                <span className="text-gray-900 dark:text-white font-medium">92%</span>
              </div>
            </div>
          </motion.div>

          {/* Personal Growth Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Personal Growth</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Learning Progress</span>
                <span className="text-gray-900 dark:text-white font-medium">75%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Meditation Time</span>
                <span className="text-gray-900 dark:text-white font-medium">20m</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Goals Achieved</span>
                <span className="text-gray-900 dark:text-white font-medium">8/10</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}