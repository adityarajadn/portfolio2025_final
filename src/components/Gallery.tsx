/**
 * File: Gallery.tsx
 * Fungsi: Komponen untuk menampilkan galeri foto
 * Menampilkan grid layout dengan 6 foto dalam format 2x3
 */

import React from 'react';
import { galleryItems } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Gallery.css';

const Gallery: React.FC = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="gallery" className="gallery">
      <h2 
        ref={titleRef as React.RefObject<HTMLHeadingElement>}
        className={`gallery-title ${titleVisible ? 'fade-in-up' : ''}`}
      >
        GALLERY
      </h2>
      <div 
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className={`gallery-grid ${gridVisible ? 'grid-animate' : ''}`}
      >
        {galleryItems.map((item, index) => (
          <div 
            key={item.id} 
            className="gallery-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={item.image} alt={item.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
