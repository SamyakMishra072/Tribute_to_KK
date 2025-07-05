import React from 'react';
import { motion } from 'framer-motion';
import { Play, Music } from 'lucide-react';

const Hero: React.FC = () => {
  const musicalNotes = ['♪', '♫', '♬', '♩', '♭', '♯'];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.postimg.cc/jjnSRVsY/wp8047620-kk-singer-wallpapers.jpg"
          alt="Concert background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Floating Musical Notes */}
      {musicalNotes.map((note, index) => (
        <motion.div
          key={index}
          className="musical-note"
          initial={{ y: 100, opacity: 0 }}
          animate={{ 
            y: [100, -100, 100], 
            opacity: [0, 0.6, 0],
            x: [0, 50, -50, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: index * 1.5,
            ease: "easeInOut"
          }}
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + index * 10}%`,
          }}
        >
          {note}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="playfair text-6xl md:text-8xl font-bold mb-6 text-shadow"
        >
          Remembering <span className="text-yellow-400">KK</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Celebrating the life and legacy of Krishnakumar Kunnath,
          the voice that touched millions of hearts
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => document.getElementById('biography')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Explore His Journey
          </button>
          
          <button
            onClick={() => document.getElementById('discography')?.scrollIntoView({ behavior: 'smooth' })}
            className="glassmorphism text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
          >
            <Music size={20} />
            Listen to His Music
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
