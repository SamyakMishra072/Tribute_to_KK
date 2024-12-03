import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { AwardCard } from '../components/ui/AwardCard';
import { awards } from '../data/awards';
import { Trophy } from 'lucide-react';

export function Achievements() {
  return (
    <div>
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Trophy className="w-16 h-16 text-blue-600 dark:text-gold-400" />
              <motion.div
                className="absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-full -z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Awards & Recognition</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Celebrating KK's remarkable contributions to Indian music through his numerous accolades and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <AwardCard key={award.id} award={award} index={index} />
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold">Career Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-800/50 rounded-lg">
                <h3 className="text-2xl font-bold text-gold-400 mb-2">25+</h3>
                <p>Years in Industry</p>
              </div>
              <div className="p-6 bg-gray-800/50 rounded-lg">
                <h3 className="text-2xl font-bold text-gold-400 mb-2">20+</h3>
                <p>Major Awards</p>
              </div>
              <div className="p-6 bg-gray-800/50 rounded-lg">
                <h3 className="text-2xl font-bold text-gold-400 mb-2">5000+</h3>
                <p>Live Performances</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}