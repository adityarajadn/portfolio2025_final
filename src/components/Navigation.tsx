/**
 * File: Navigation.tsx
 * Fungsi: Komponen navigasi untuk menu utama website
 * Menampilkan menu navigasi dengan link ke PROJECTS, SKILLS, dan CONTACT
 */

import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <button onClick={() => scrollToSection('projects')} className="nav-link">
          PROJECTS
        </button>
        <button onClick={() => scrollToSection('skills')} className="nav-link">
          SKILLS
        </button>
        <button onClick={() => scrollToSection('gallery')} className="nav-link">
          GALLERY
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
