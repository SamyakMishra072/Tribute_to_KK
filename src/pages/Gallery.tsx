import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { GalleryGrid } from '../components/ui/GalleryGrid';
import { ImageModal } from '../components/ui/ImageModal';
import { galleryItems } from '../data/gallery';
import { Camera } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              <Camera className="w-16 h-16 text-blue-600 dark:text-gold-400" />
              <motion.div
                className="absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-full -z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A visual journey through KK's memorable moments and performances
          </p>
        </motion.div>

        <GalleryGrid items={galleryItems} onSelect={setSelectedImage} />
      </Section>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}