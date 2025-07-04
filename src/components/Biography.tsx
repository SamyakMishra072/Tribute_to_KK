import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Music, Award } from 'lucide-react';
import { kkBiography } from '../data/kkData';

const Biography: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="biography" className="py-20 bg-gradient-to-br from-red-900 to-red-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="playfair text-5xl md:text-6xl font-bold mb-6 text-yellow-400">
            The Journey of a Legend
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to becoming one of India's most beloved playback singers,
            KK's journey is one of passion, dedication, and musical excellence.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-yellow-400 opacity-30"></div>

          {kkBiography.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-red-800 z-10"></div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-50 transition-all duration-300 border border-yellow-400 border-opacity-30">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={20} className="text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">{item.year}</span>
                  </div>
                  <h3 className="playfair text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Year Badge (Mobile) */}
              <div className="md:hidden absolute -left-2 top-0 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                {item.year}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8 border border-yellow-400 border-opacity-30">
            <Award className="mx-auto mb-6 text-yellow-400" size={48} />
            <blockquote className="playfair text-2xl md:text-3xl italic text-yellow-400 mb-6">
              "Music is not just my profession, it's my passion. Every song I sing comes from the heart."
            </blockquote>
            <p className="text-lg">— Krishnakumar Kunnath (KK)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Biography;