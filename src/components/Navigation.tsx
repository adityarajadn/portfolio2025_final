/**
 * File: Navigation.tsx
 * Fungsi: Komponen navigasi untuk menu utama website
 * Menampilkan menu navigasi dengan link ke PROJECTS, SKILLS, dan CONTACT
 */

import React from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
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
