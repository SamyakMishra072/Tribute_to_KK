import React from 'react';
import { motion } from 'framer-motion';
import { Award as AwardIcon } from 'lucide-react';
import { Award } from '../../types';

interface AwardCardProps {
  award: Award;
  index: number;
}

export function AwardCard({ award, index }: AwardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold mb-1">{award.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{award.year}</p>
          </div>
          <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
            <AwardIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full">
            {award.category}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300">
          {award.description}
        </p>
      </div>
    </motion.div>
  );
}