/**
 * File: App.tsx
 * Fungsi: Komponen utama aplikasi yang mengintegrasikan semua komponen
 * Menggabungkan Hero, Navigation, Projects, Skills, dan Gallery menjadi satu halaman portfolio
 */

import React from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Hero />
      <Navigation />
      <Projects />
      <Skills />
      <Gallery />
    </div>
  );
};

export default App;
