/**
 * File: portfolioData.ts
 * Fungsi: Menyimpan semua data konten portfolio dalam satu tempat
 * Berisi data untuk hero section, projects, skills, social media, dan gallery
 */

import { HeroContent, Project, Skill, SocialMedia, GalleryItem } from '../types/types';

export const heroContent: HeroContent = {
    title: 'PORTFOLIO',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectur adipiscing elit condimentum elit condimentum euismod nisl pelentesque sem porttitor at. Proin ac lobortis consequat blancs tellus. Praesent in id cursus eu pretium tellus vitae.',
    imageMe: '/assets/images/me2.png',
    imageText: '/assets/images/PORTFOLIO.png'
};

export const socialMediaLinks: SocialMedia[] = [
  {
    name: 'LinkedIn',
    icon: '/assets/icons/linkedin.png',
    url: '#'
  },
  {
    name: 'GitHub',
    icon: '/assets/icons/github.png',
    url: '#'
  },
  {
    name: 'Email',
    icon: '/assets/icons/mail.png',
    url: 'mailto:contact@email.com'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'SteamHunt | Raion Academy 2025',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectur adipiscing elit condimentum elit condimentum euismod nisl pelentesque sem porttitor at. Proin ac lobortis consequat blancs tellus. Praesent in id cursus eu pretium tellus vitae.',
    category: 'GAME',
    image: '/assets/images/steamhunt_prev.png',
    tags: ['Game Programmer', 'Game Artist'],
    link: 'https://rawrjaaa.itch.io/steamhunt'
  },
  {
    id: '2',
    title: 'Car Crash | Racing Game',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectur adipiscing elit condimentum elit condimentum euismod nisl pelentesque sem porttitor at. Proin ac lobortis consequat blancs tellus. Praesent in id cursus eu pretium tellus vitae.',
    category: 'GAME',
    image: '/assets/images/carCrash_prev.png',
    tags: ['Game Programmer', 'Game Artist'],
    link: 'https://rawrjaaa.itch.io/car-crash'
  },
  {
    id: '3',
    title: 'Coming Soon',
    description: 'Coming Soon. . .',
    category: 'GAME',
    image: '/assets/images/mobile-app.jpg',
    tags: ['Coming Soon'],
    link: '#'
  }
];

export const skills: Skill[] = [
  // Programming Skills
  {
    name: 'Java',
    icon: '/assets/icons/java.png',
    category: 'programming'
  },
  {
    name: 'React',
    icon: '/assets/icons/react.png',
    category: 'programming'
  },
  {
    name: 'C#',
    icon: '/assets/icons/cSharp.png',
    category: 'programming'
  },
  {
    name: 'GDScript',
    icon: '/assets/icons/gdScript.png',
    category: 'programming'
  },
  // Tools
  {
    name: 'Godot',
    icon: '/assets/icons/godot.png',
    category: 'tools'
  },
  {
    name: 'unity',
    icon: '/assets/icons/unity.png',
    category: 'tools'
  },
  {
    name: 'Figma',
    icon: '/assets/icons/figma.png',
    category: 'tools'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    image: '/assets/images/gallery/1.jpg',
    alt: 'Gallery Image 1'
  },
  {
    id: '2',
    image: '/assets/images/gallery/2.jpg',
    alt: 'Gallery Image 2'
  },
  {
    id: '3',
    image: '/assets/images/gallery/3.jpg',
    alt: 'Gallery Image 3'
  },
  {
    id: '4',
    image: '/assets/images/gallery/4.jpg',
    alt: 'Gallery Image 4'
  },
  {
    id: '5',
    image: '/assets/images/gallery/5.jpg',
    alt: 'Gallery Image 5'
  },
  {
    id: '6',
    image: '/assets/images/gallery/6.jpg',
    alt: 'Gallery Image 6'
  }
];
