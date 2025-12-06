/**
 * File: Projects.tsx
 * Fungsi: Komponen untuk menampilkan section project dengan drag-to-shuffle seperti kartu remi
 * Kartu paling atas bisa di-drag ke kiri/kanan untuk pindah ke project berikutnya
 */

import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart({ x: e.clientX, y: e.clientY });
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStart && isDragging) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      setDragOffset({ x: deltaX, y: deltaY });
    }
  };

  const handleMouseUp = () => {
    if (Math.abs(dragOffset.x) > 100) {
      // Swipe left or right
      if (dragOffset.x > 0) {
        // Swiped right - previous card
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      } else {
        // Swiped left - next card
        setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      }
    }
    setDragStart(null);
    setDragOffset({ x: 0, y: 0 });
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX, y: touch.clientY });
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStart && isDragging) {
      const touch = e.touches[0];
      const deltaX = touch.clientX - dragStart.x;
      const deltaY = touch.clientY - dragStart.y;
      setDragOffset({ x: deltaX, y: deltaY });
    }
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + projects.length) % projects.length;
    
    if (position === 0) {
      // Top card - being dragged
      const rotation = dragOffset.x * 0.1;
      return {
        transform: `translate(${dragOffset.x}px, ${dragOffset.y}px) rotate(${rotation}deg)`,
        zIndex: 10,
        opacity: 1,
        pointerEvents: 'auto' as const,
      };
    } else if (position <= 2) {
      // Stack behind
      return {
        transform: `translateY(${position * 10}px) scale(${1 - position * 0.05})`,
        zIndex: 10 - position,
        opacity: 1 - position * 0.2,
        pointerEvents: 'none' as const,
      };
    } else {
      // Hidden cards
      return {
        transform: `translateY(30px) scale(0.85)`,
        zIndex: 0,
        opacity: 0,
        pointerEvents: 'none' as const,
      };
    }
  };

  const currentProject = projects[currentIndex];
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: stackRef, isVisible: stackVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="projects" className="projects">
      <div 
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={`projects-header ${headerVisible ? 'animate-in' : ''}`}
      >
        <h2 className="projects-title">{currentProject.category} PROJECTS</h2>
        <p className="projects-counter">{currentIndex + 1} / {projects.length}</p>
      </div>
      
      <div className="projects-main-container">
        {/* Left Side - Project Info */}
        <div 
          ref={infoRef as React.RefObject<HTMLDivElement>}
          className={`project-info-container ${infoVisible ? 'slide-in-left' : ''}`}
        >
          <h3 className="project-title">{currentProject.title}</h3>
          <p className="project-description">{currentProject.description}</p>
          <div className="project-tags">
            {currentProject.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="project-tag">{tag}</span>
            ))}
          </div>
          {currentProject.link && (
            <a 
              href={currentProject.link} 
              className="project-link" 
              aria-label="Project link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-placeholder">🔗</div>
            </a>
          )}
        </div>

        {/* Right Side - Image Stack */}
        <div 
          ref={stackRef as React.RefObject<HTMLDivElement>}
          className={`projects-stack-wrapper ${stackVisible ? 'slide-in-right' : ''}`}
        >
          <div className="projects-stack">
            {projects.map((project, index) => {
              const style = getCardStyle(index);
              const isTopCard = (index - currentIndex + projects.length) % projects.length === 0;
              
              return (
                <div
                  key={project.id}
                  className={`project-image-card ${isTopCard ? 'top-card' : ''}`}
                  style={style}
                  onMouseDown={isTopCard ? handleMouseDown : undefined}
                  onMouseMove={isTopCard ? handleMouseMove : undefined}
                  onMouseUp={isTopCard ? handleMouseUp : undefined}
                  onMouseLeave={isTopCard ? handleMouseUp : undefined}
                  onTouchStart={isTopCard ? handleTouchStart : undefined}
                  onTouchMove={isTopCard ? handleTouchMove : undefined}
                  onTouchEnd={isTopCard ? handleTouchEnd : undefined}
                >
                  <img src={project.image} alt={project.title} draggable={false} />
                </div>
              );
            })}
          </div>
          <p className="drag-hint">← Drag to shuffle →</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
