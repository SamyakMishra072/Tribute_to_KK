import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X, Music, Calendar } from 'lucide-react';
import { kkDiscography } from '../data/kkData';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  album: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, album }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="playfair text-2xl font-bold text-gray-800 mb-2">{album.title}</h3>
              <p className="text-gray-600 flex items-center gap-2">
                <Calendar size={16} />
                {album.year} • {album.type}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              src={album.spotifyUrl}
              width="100%"
              height="300"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title={`${album.title} - Spotify Player`}
              className="rounded-lg"
            />
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Experience the soulful melodies and heartfelt lyrics that made "{album.title}" a timeless classic in KK's discography.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Discography: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="discography" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="playfair text-5xl md:text-6xl font-bold mb-6 text-red-800">
            Musical Masterpieces
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-700">
            Explore the albums and songs that defined KK's remarkable career and touched millions of hearts.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {kkDiscography.map((album) => (
            <motion.div
              key={album.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedAlbum(album)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Play size={48} className="mx-auto mb-2" />
                    <p className="text-sm font-semibold">Click to Listen</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <h3 className="playfair text-xl font-bold text-gray-800 mb-1">{album.title}</h3>
                <p className="text-gray-600 flex items-center justify-center gap-2">
                  <Calendar size={14} />
                  {album.year} • {album.type}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-red-800 rounded-lg p-8 text-white">
            <Music className="mx-auto mb-6 text-yellow-400" size={48} />
            <blockquote className="playfair text-2xl md:text-3xl italic text-yellow-400 mb-6">
              "Each song is a piece of my soul, and I'm grateful to share it with the world."
            </blockquote>
            <p className="text-lg">— KK on his musical journey</p>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedAlbum && (
        <Modal
          isOpen={!!selectedAlbum}
          onClose={() => setSelectedAlbum(null)}
          album={selectedAlbum}
        />
      )}
    </section>
  );
};

export default Discography;