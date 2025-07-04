import React from 'react';
import { motion } from 'framer-motion';
import { Music, Heart, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      icon: <Youtube size={24} />, 
      href: "https://www.youtube.com/@KKofficial", 
      label: "YouTube",
      color: "hover:text-red-500"
    },
    { 
      icon: <Instagram size={24} />, 
      href: "https://www.instagram.com/kk_official", 
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    { 
      icon: <Twitter size={24} />, 
      href: "https://twitter.com/kk_official", 
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    { 
      icon: <Music size={24} />, 
      href: "https://open.spotify.com/artist/4fEkbug6kZzzJ8eYX6Kbbp", 
      label: "Spotify",
      color: "hover:text-green-500"
    }
  ];

  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Music className="h-8 w-8 text-yellow-400" />
              <span className="playfair text-2xl font-bold">KK Tribute</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Celebrating the life and musical legacy of Krishnakumar Kunnath,
              whose voice continues to inspire and touch hearts worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="playfair text-xl font-bold mb-4 text-yellow-400">Quick Links</h3>
            <nav className="space-y-2">
              {['Home', 'Biography', 'Discography', 'Achievements', 'Gallery'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block mx-auto text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Memorial Section */}
          <div className="text-center md:text-right">
            <h3 className="playfair text-xl font-bold mb-4 text-yellow-400">In Memory</h3>
            <p className="text-gray-300 mb-4">
              August 23, 1968 - May 31, 2022
            </p>
            <div className="flex items-center justify-center md:justify-end space-x-1 text-red-400">
              <Heart size={20} />
              <span className="text-sm">Forever in our hearts</span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mb-8">
          <h3 className="playfair text-xl font-bold mb-6 text-yellow-400">Connect & Listen</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 ${link.color} transition-all duration-200 hover:scale-110`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <blockquote className="playfair text-lg italic text-yellow-400 max-w-2xl mx-auto">
            "Music is the universal language that connects hearts across all boundaries."
          </blockquote>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 KK Tribute. Made with{' '}
              <Heart className="inline h-4 w-4 text-red-400 mx-1" />
              by Samyak Mishra.
            </p>
            <p className="text-gray-400 text-sm">
              This is a fan-made tribute website to honor KK's legacy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
