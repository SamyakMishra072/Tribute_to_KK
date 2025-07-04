import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Discography from './components/Discography';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-cream"
    >
      <Header />
      <Hero />
      <Biography />
      <Discography />
      <Achievements />
      <Gallery />
      <Footer />
    </motion.div>
  );
}

export default App;