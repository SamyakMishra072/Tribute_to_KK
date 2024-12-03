import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ImageModalProps {
  image: string;
  onClose: () => void;
}

export function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 p-2 text-white hover:text-gray-300"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>
      <motion.img
        src={image}
        alt="Gallery image"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="max-w-full max-h-[90vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
}