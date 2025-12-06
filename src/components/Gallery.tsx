/**
 * File: Gallery.tsx
 * Fungsi: Komponen untuk menampilkan galeri foto
 * Menampilkan grid layout dengan 6 foto dalam format 2x3
 */

import React from 'react';
import { galleryItems } from '../data/portfolioData';
import './Gallery.css';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="gallery">
      <h2 className="gallery-title">GALLERY</h2>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} alt={item.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
