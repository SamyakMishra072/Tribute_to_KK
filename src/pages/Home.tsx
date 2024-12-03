import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
            alt="KK performing on stage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              KK: The Voice of a Generation
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              "Music is the only thing that can touch your heart without permission"
            </p>
            <a
              href="#listen"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
            >
              <Play className="w-5 h-5 mr-2" />
              Listen Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const testimonials = [
  {
    quote: "KK's voice had the power to touch souls. His music will live forever in our hearts.",
    author: "A.R. Rahman",
    title: "Music Composer"
  },
  {
    quote: "One of the most versatile singers of our generation. His songs defined an era.",
    author: "Shankar Mahadevan",
    title: "Singer & Composer"
  },
  {
    quote: "KK's songs were not just music, they were emotions that resonated with millions.",
    author: "Pritam",
    title: "Music Director"
  }
];