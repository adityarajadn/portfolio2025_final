/**
 * File: Skills.tsx
 * Fungsi: Komponen untuk menampilkan skills/keahlian
 * Menampilkan dua kategori: Programming (Java, React, C#, Flutter) dan Tools (Godot, Blender, Figma)
 */

import React from 'react';
import { skills } from '../data/portfolioData';
import './Skills.css';

const Skills: React.FC = () => {
  const programmingSkills = skills.filter(skill => skill.category === 'programming');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');

  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">SKILLS</h2>
      
      <div className="skills-container">
        <div className="skills-category">
          <h3 className="category-title">Programming</h3>
          <div className="skills-grid">
            {programmingSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">
                  <img src={skill.icon} alt={skill.name} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="category-title">Tools</h3>
          <div className="skills-grid">
            {toolsSkills.map((skill, index) => (
              <div key={index} className="skill-item">
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
