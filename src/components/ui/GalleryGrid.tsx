import React from 'react';
import { motion } from 'framer-motion';
import { GalleryItem } from '../../types';
import { Play } from 'lucide-react';

interface GalleryGridProps {
  items: GalleryItem[];
  onSelect: (url: string) => void;
}

export function GalleryGrid({ items, onSelect }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative group cursor-pointer"
          onClick={() => item.type === 'image' && onSelect(item.url)}
        >
          <div className="aspect-square overflow-hidden rounded-lg">
            {item.type === 'image' ? (
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={item.thumbnail}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/70 transition-colors"
                >
                  <Play className="w-12 h-12 text-white" />
                </a>
              </div>
            )}
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-white text-sm">{item.caption}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}