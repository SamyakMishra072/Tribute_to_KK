import { Album } from '../types';

export const albums: Album[] = [
  {
    id: '1',
    title: 'Pal',
    year: 1999,
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80',
    songs: [
      {
        title: 'Pal',
        duration: '5:00',
        spotifyUrl: 'https://open.spotify.com/track/5bhDX6VntGz0woaO5hzJf0',
        youtubeUrl: 'https://www.youtube.com/watch?v=9pjwBrh-4Co'
      },
      {
        title: 'Yaaron',
        duration: '4:45',
        spotifyUrl: 'https://open.spotify.com/track/4E7VxQRRE9DNS5MFlopx2o',
        youtubeUrl: 'https://www.youtube.com/watch?v=LCfvYo3ILG0'
      }
    ]
  },
  {
    id: '2',
    title: 'Humsafar',
    year: 2008,
    cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80',
    songs: [
      {
        title: 'Humsafar',
        duration: '4:30',
        spotifyUrl: 'https://open.spotify.com/track/2ZUz8hZNcv0VJgBRv6R8L1',
        youtubeUrl: 'https://www.youtube.com/watch?v=8CYlLCtH5Hs'
      }
    ]
  },
  {
    id: '3',
    title: 'Jannat',
    year: 2009,
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80',
    songs: [
      {
        title: 'Tu Hi Meri Shab Hai',
        duration: '5:15',
        spotifyUrl: 'https://open.spotify.com/track/1XxqJ0ZZHhWjxWSUSrBxeL',
        youtubeUrl: 'https://www.youtube.com/watch?v=_qOO1yXQyK4'
      }
    ]
  }
];