import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { TimelineEvent } from '../../types';

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900 -translate-x-1/2" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={clsx(
              'relative grid grid-cols-1 md:grid-cols-2 gap-8',
              index % 2 === 0 ? 'md:text-right' : 'md:text-left md:flex-row-reverse'
            )}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 transform" />
            
            <div className={clsx(
              'md:p-8',
              index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:col-start-2'
            )}>
              <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                {event.date}
              </span>
              <h3 className="text-xl font-bold mt-1 mb-2">{event.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
            </div>

            {event.image && (
              <div className={clsx(
                'md:p-8',
                index % 2 === 0 ? 'md:pl-16 md:col-start-2' : 'md:pr-16'
              )}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}