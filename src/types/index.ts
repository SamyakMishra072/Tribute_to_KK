export interface Album {
  id: string;
  title: string;
  year: number;
  cover: string;
  songs: Song[];
}

export interface Song {
  title: string;
  duration: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
}

export interface Award {
  id: string;
  title: string;
  year: number;
  category: string;
  description: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  caption: string;
  thumbnail?: string;
}