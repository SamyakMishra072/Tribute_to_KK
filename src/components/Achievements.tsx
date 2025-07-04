import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Star, Music, Award } from 'lucide-react';
import { kkAchievements } from '../data/kkData';

const Counter: React.FC<{ value: number; suffix: string; label: string; icon: React.ReactNode }> = ({ 
  value, 
  suffix, 
  label, 
  icon 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-400 border-opacity-20"
    >
      <div className="text-yellow-500 mb-4 flex justify-center">
        {icon}
      </div>
      <div className="playfair text-4xl md:text-5xl font-bold text-red-800 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
};

const Achievements: React.FC = () => {
  const icons = [
    <Music size={48} />,
    <Award size={48} />,
    <Trophy size={48} />,
    <Star size={48} />,
    <Music size={48} />,
    <Award size={48} />
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-yellow-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="playfair text-5xl md:text-6xl font-bold mb-6 text-red-800">
            A Legacy of Excellence
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-700">
            Numbers that tell the story of an extraordinary musical journey spanning over two decades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kkAchievements.map((achievement, index) => (
            <Counter
              key={index}
              value={achievement.value}
              suffix={achievement.suffix}
              label={achievement.label}
              icon={icons[index]}
            />
          ))}
        </div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="playfair text-3xl font-bold text-center mb-12 text-red-800">
            Notable Recognition
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-800 text-white rounded-lg p-8 text-center">
              <Trophy className="mx-auto mb-4 text-yellow-400" size={48} />
              <h4 className="playfair text-2xl font-bold mb-2">Screen Awards</h4>
              <p className="text-gray-200">Best Male Playback Singer nominations for multiple songs</p>
            </div>
            
            <div className="bg-yellow-400 text-black rounded-lg p-8 text-center">
              <Star className="mx-auto mb-4 text-red-800" size={48} />
              <h4 className="playfair text-2xl font-bold mb-2">People's Choice</h4>
              <p className="text-gray-800">Most loved voice in Indian cinema for over two decades</p>
            </div>
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-lg border border-yellow-400 border-opacity-30">
            <Award className="mx-auto mb-6 text-red-800" size={48} />
            <blockquote className="playfair text-2xl md:text-3xl italic text-red-800 mb-6">
              "Awards and numbers are just statistics. The real achievement is when a song touches someone's heart."
            </blockquote>
            <p className="text-lg text-gray-700">— KK's philosophy on success</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;