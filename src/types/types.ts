/**
 * File: types.ts
 * Fungsi: Mendefinisikan semua interface dan type TypeScript untuk struktur data portfolio
 * Berisi definisi tipe untuk Project, Skill, Social Media, dan Gallery Item
 */

export interface SocialMedia {
  name: string;
  icon: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'programming' | 'tools';
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
}

export interface HeroContent {
  title: string;
  description: string;
  imageText: string;
  imageMe: string;
}
