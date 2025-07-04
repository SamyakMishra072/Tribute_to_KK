# KK Tribute Website

A beautiful, responsive tribute website dedicated to the legendary Indian playback singer Krishnakumar Kunnath (KK). This website celebrates his life, musical journey, and lasting impact on Indian cinema and music.

## 🎵 About KK

Krishnakumar Kunnath (August 23, 1968 – May 31, 2022), known professionally as KK, was one of India's most beloved playback singers. With his versatile voice and emotional depth, he recorded over 500 songs in multiple languages and became a household name across India.

## ✨ Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Timeline**: Explore KK's musical journey chronologically
- **Music Integration**: Spotify embeds for listening to his popular songs
- **Photo Gallery**: Masonry layout with lightbox functionality
- **Animated Counters**: Dynamic statistics showcasing his achievements
- **SEO Optimized**: Complete meta tags and structured data

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Netlify

## 🎨 Design Philosophy

The website uses a warm color palette inspired by KK's musical style:
- **Deep Maroon** (#660000): Represents the depth and richness of his voice
- **Gold** (#FFD700): Symbolizes the golden moments in his career
- **Soft Cream** (#FFF8E7): Provides a warm, welcoming background

Typography combines elegant serif fonts (Playfair Display) for headings with clean sans-serif (Inter) for body text, creating a balance between sophistication and readability.

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kk-tribute.git
   cd kk-tribute
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with smooth scroll
│   ├── Hero.tsx            # Hero section with animated musical notes
│   ├── Biography.tsx       # Timeline of KK's life and career
│   ├── Discography.tsx     # Album grid with Spotify integration
│   ├── Achievements.tsx    # Animated counters and awards
│   ├── Gallery.tsx         # Photo gallery with lightbox
│   └── Footer.tsx          # Footer with social links
├── data/
│   └── kkData.ts          # All static data for the website
├── App.tsx                # Main application component
├── main.tsx              # React entry point
└── index.css             # Global styles and animations
```

## 🎯 Key Features

### Interactive Elements
- **Smooth Scrolling**: Navigate between sections seamlessly
- **Hover Effects**: Enhanced user interaction with visual feedback
- **Modal Windows**: Spotify embeds open in beautiful modal dialogs
- **Lightbox Gallery**: Click any photo to view in full-screen mode

### Performance Optimizations
- **Lazy Loading**: Images load only when needed
- **Preloaded Assets**: Critical resources loaded upfront
- **Optimized Images**: Compressed images from Pexels
- **Modern Build**: Vite for fast development and optimized production builds

### Accessibility
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **ARIA Labels**: Screen reader friendly
- **High Contrast**: WCAG AA compliant color schemes
- **Semantic HTML**: Proper heading structure and landmarks

## 🌐 Deployment

The website is configured for one-click deployment to Netlify:

1. **Connect your repository** to Netlify
2. **Build settings** are automatically configured via `netlify.toml`
3. **Deploy** with a single click

Build command: `npm run build`
Publish directory: `dist`

## 📊 SEO & Analytics

- Complete meta tags for social sharing
- Open Graph and Twitter Card support
- Structured data for search engines
- Sitemap and robots.txt included
- Performance optimized for Core Web Vitals

## 🎵 Music Integration

The website includes Spotify embeds for KK's popular songs:
- Pal (2008)
- Tadap Tadap Ke (1999)
- Aankhon Mein Teri (Om Shanti Om)
- Khuda Jaane (Bachna Ae Haseeno)
- Tu Hi Meri Shab Hai (Gangster)

## 🙏 Acknowledgments

This tribute website is created with love and respect for KK's incredible contribution to Indian music. It's a fan-made project intended to celebrate his legacy and keep his memory alive.

## 📄 License

This project is created for educational and tribute purposes. All music, images, and content rights belong to their respective owners.

---

*"Music is not just my profession, it's my passion. Every song I sing comes from the heart."* - KK

**Made with ❤️ by a devoted fan**