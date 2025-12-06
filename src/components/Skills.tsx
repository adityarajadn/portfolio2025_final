/**
 * File: Skills.tsx
 * Fungsi: Komponen untuk menampilkan skills/keahlian
 * Menampilkan dua kategori: Programming (Java, React, C#, Flutter) dan Tools (Godot, Blender, Figma)
 */

import React from 'react';
import { skills } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

const Skills: React.FC = () => {
  const programmingSkills = skills.filter(skill => skill.category === 'programming');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: programmingRef, isVisible: programmingVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: toolsRef, isVisible: toolsVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="skills" className="skills">
      <h2 
        ref={titleRef as React.RefObject<HTMLHeadingElement>}
        className={`skills-title ${titleVisible ? 'fade-in-up' : ''}`}
      >
        SKILLS
      </h2>
      
      <div className="skills-container">
        <div 
          ref={programmingRef as React.RefObject<HTMLDivElement>}
          className={`skills-category ${programmingVisible ? 'slide-in-left' : ''}`}
        >
          <h3 className="category-title">Programming</h3>
          <div className="skills-grid">
            {programmingSkills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-icon">
                  <img src={skill.icon} alt={skill.name} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div 
          ref={toolsRef as React.RefObject<HTMLDivElement>}
          className={`skills-category ${toolsVisible ? 'slide-in-right' : ''}`}
        >
          <h3 className="category-title">Tools</h3>
          <div className="skills-grid">
            {toolsSkills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-icon">
                  <img src={skill.icon} alt={skill.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
