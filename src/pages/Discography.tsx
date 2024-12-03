import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { AlbumCard } from '../components/ui/AlbumCard';
import { albums } from '../data/albums';
import { Search } from 'lucide-react';

export function Discography() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    album.songs.some(song => song.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discography</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Explore KK's musical journey through his albums and songs
          </p>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search albums or songs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAlbums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>

        {filteredAlbums.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No albums found matching your search.</p>
          </div>
        )}
      </Section>
    </div>
  );
}