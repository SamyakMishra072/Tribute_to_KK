import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Music2, Youtube } from 'lucide-react';
import { Album } from '../../types';

interface AlbumCardProps {
  album: Album;
}

export function AlbumCard({ album }: AlbumCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="relative aspect-square">
        <img
          src={album.cover}
          alt={album.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{album.title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{album.year}</p>
      </div>

      <motion.div
        className="absolute inset-0 bg-black/80 p-6 flex flex-col justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
      >
        <h4 className="text-white font-bold mb-4">Tracklist:</h4>
        <ul className="space-y-4">
          {album.songs.map((song, index) => (
            <li key={index} className="text-white">
              <div className="flex items-center justify-between mb-2">
                <span>{song.title}</span>
                <span className="text-gray-400">{song.duration}</span>
              </div>
              <div className="flex space-x-2">
                {song.spotifyUrl && (
                  <a
                    href={song.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
                  >
                    <Music2 className="w-4 h-4" />
                  </a>
                )}
                {song.youtubeUrl && (
                  <a
                    href={song.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}