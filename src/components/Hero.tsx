/**
 * File: Hero.tsx
 * Fungsi: Komponen untuk menampilkan hero section di bagian atas halaman
 * Menampilkan judul "PORTFOLIO", deskripsi, dan ikon social media (LinkedIn, GitHub, Email)
 */

import React from 'react';
import { heroContent, socialMediaLinks } from '../data/portfolioData';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
        <img src={heroContent.imageText} alt="PORTFOLIO" />
        <img src={heroContent.imageMe} alt="Me" id="me" />
        <div className="hero-content">
        <div className="hero-left-content">
            <p className="hero-left-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectur adipiscing elit condimentum elit condimentum euismod nisl pelentesque sem porttitor at. Proin ac lobortis consequat blancs tellus. Praesent in id cursus eu pretium tellus vitae.
            </p>
            <div className="icon-container">
                <div className="social-links">
                {socialMediaLinks.map((social, index) => (
                    <a 
                    key={index} 
                    href={social.url} 
                    className="social-icon"
                    aria-label={social.name}
                    >
                    <img src={social.icon} alt={social.name} />
                    </a>
                ))}
                </div>
            </div>
        </div>
        <div className="hero-right-content">
          <p className="hero-right-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectur adipiscing elit condimentum elit condimentum euismod nisl pelentesque sem porttitor at. Proin ac lobortis consequat blancs tellus. Praesent in id cursus eu pretium tellus vitae.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
