import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Timeline } from '../components/ui/Timeline';
import { timelineEvents } from '../data/timeline';
import { Music } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Biography Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The Journey of KK</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From advertising jingles to becoming one of India's most beloved voices
            </p>
          </motion.div>

          <div className="prose dark:prose-invert prose-lg mx-auto">
            <p>
              Krishnakumar Kunnath, popularly known as KK, was one of India's most versatile 
              singers. His journey in music began with advertising jingles and evolved into 
              a career that spanned multiple languages and genres.
            </p>
            
            <div className="my-8 flex items-center justify-center">
              <div className="relative w-24 h-24">
                <Music className="w-full h-full text-blue-600 dark:text-gold-400" />
                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-full -z-10" />
              </div>
            </div>

            <p>
              Known for his soulful voice and emotional depth, KK had the unique ability to 
              connect with listeners across generations. His songs became anthems for love, 
              friendship, and life's various emotions.
            </p>

            <blockquote>
              "I want my songs to have a life beyond me."
              <footer>- KK</footer>
            </blockquote>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section dark>
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Life & Career Milestones
          </motion.h2>
          <Timeline events={timelineEvents} />
        </div>
      </Section>

      {/* Legacy Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-8">Continuing Legacy</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              KK's music continues to inspire and touch hearts. His songs remain a testament 
              to his extraordinary talent and the emotional depth he brought to Indian music.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold mb-2">3500+</h3>
                <p>Advertising Jingles</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold mb-2">700+</h3>
                <p>Songs Recorded</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold mb-2">Multiple</h3>
                <p>Languages</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}